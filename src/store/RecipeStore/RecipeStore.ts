import axios from "axios";
import {action, computed, makeObservable, observable, runInAction} from "mobx";
import {API_KEY, BASE_HEADER, BASE_URL} from "config/api";
import {Meta} from "utils/meta";
import {ILocalStore} from "utils/useLocalStore";
import {normalizeRecipe, RecipeInfoApi, RecipeInfoModel} from "../models/recipes";

type PrivateFields = '_recipeInfo' | '_meta' | '_equipment'
axios.defaults.baseURL = BASE_URL
axios.defaults.headers.get = BASE_HEADER

export default class RecipeStore implements ILocalStore{

    private _recipeInfo: RecipeInfoModel[] = []
    private _equipment: {name:string, image:string}[] = []
    private _meta: Meta = Meta.initial;

    constructor() {
        makeObservable<RecipeStore, PrivateFields>(this,{
            _recipeInfo: observable,
            _equipment: observable,
            _meta: observable,
            recipeInfo: computed,
            equipment: computed,
            meta: computed,
            getRecipeInfo: action,
        })
    }

    get recipeInfo(){
        return this._recipeInfo
    }
    get equipment(){
        return this._equipment
    }
    get meta() {
        return this._meta
    }

    async getRecipeInfo(id: number): Promise<void>{

        this._meta = Meta.loading;
        this._recipeInfo = [];

        const responseInfo = await axios.get<RecipeInfoApi>(`${id}/information`,{
            params:{
                apiKey:API_KEY,
            }
        })

        const EquipmentById = await axios.get<{name:string, image:string}[]>(`${id}/equipmentWidget.json`,{
            params:{
                apiKey:API_KEY,
            }
        })
        console.log(EquipmentById)
        runInAction(() => {
            if (responseInfo.status !== 200 && EquipmentById.status !== 200) {
                this._meta = Meta.error
            }

            try {
                this._meta = Meta.success;
                this._recipeInfo = normalizeRecipe(responseInfo.data);
                this._equipment = EquipmentById.data.equipment
                return;
            } catch (e) {
                console.error(e.message)
                this._meta = Meta.error;
                this._recipeInfo = []
                this._equipment = []
            }
        })
    }

    destroy(): void {
    }
}
