import axios from "axios";
import {action, computed, IReactionDisposer, makeObservable, observable, reaction, runInAction} from "mobx";
import {API_KEY} from "config/api";
import {PAGINATION_LIMIT} from "config/paginations";
import {Meta} from "utils/meta";
import {ILocalStore} from "utils/useLocalStore";
import rootStore from "../RootStore";
import {normalizeRecipes, RecipeCardApi, RecipeCardModel} from "../models/recipes";

type PrivateFields = '_recipesList' | '_meta' | '_totalCount';

export default class RecipesStore implements ILocalStore{
    private _recipesList: RecipeCardModel[] = [];
    private _meta: Meta = Meta.initial;
    private _totalCount = 0;


    constructor() {
        makeObservable<RecipesStore, PrivateFields>(this, {
            _recipesList: observable.ref,
            _totalCount: observable,
            _meta: observable,
            recipesList: computed,
            totalCount: computed,
            meta: computed,
            getRecipes: action,
            setT: action,

        })

    }
    setT(value){
        this._totalCount = value
    }
    get totalCount(){
        return this._totalCount
    }
    get recipesList(): RecipeCardModel[] {
        return this._recipesList
    }

    get meta() {
        return this._meta
    }

    async getRecipes(config: Record<string, string | number> = {}): Promise<void> {

        this._meta = Meta.loading;
        this._recipesList = []

        const response = await axios.get<RecipeCardApi>(`complexSearch`, {
            params:{
                apiKey: API_KEY,
                addRecipeInformation: true,
                addRecipeInstructions: true,
                addRecipeNutrition: true,
                number:PAGINATION_LIMIT,
                ...config
            }
        })

        runInAction(() => {
            if (response.status !== 200) {
                this._meta = Meta.error
            }

            try {
                this._meta = Meta.success;
                this._recipesList = normalizeRecipes(response.data).recipe;
                this._totalCount = response.data.totalResults;
                return;
            } catch (e) {
                console.error(e.message)
                this._meta = Meta.error;
                this._recipesList = []
            }
        })

    }

    private readonly _qpReaction: IReactionDisposer = reaction(
        () => {
            return rootStore.query.params
        },
        (newFilter) => {
            this.getRecipes(newFilter)
        }
    )

    destroy(): void {
        this._qpReaction()
    }
}
