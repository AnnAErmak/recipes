import axios from "axios";
import {action, computed, IReactionDisposer, makeObservable, observable, reaction, runInAction} from "mobx";
import {API_KEY} from "config/api";
import {Meta} from "utils/meta";

import {ILocalStore} from "utils/useLocalStore";
import rootStore from "../RootStore";
import {normalizeRecipes, RecipeCardApi, RecipeCardModel} from "../models/recipes";

type PrivateFields = '_recipesList' | '_meta';

export default class RecipesStore implements ILocalStore{
    private _recipesList: RecipeCardModel[] = [];
    private _meta: Meta = Meta.initial;

    constructor() {
        makeObservable<RecipesStore, PrivateFields>(this, {
            _recipesList: observable.ref,
            _meta: observable,
            recipesList: computed,
            meta: computed,
            getRecipes: action,

        })
    }


    get recipesList(): RecipeCardModel[] {
        return this._recipesList
    }

    get meta() {
        return this._meta
    }

    async getRecipes(): Promise<void> {

        this._meta = Meta.loading;
        this._recipesList = []

        const response = await axios.get<RecipeCardApi>(`complexSearch`, {
            params: {
                apiKey: API_KEY,
                addRecipeInformation: true,
                addRecipeInstructions: true,
                addRecipeNutrition: true,
            }
        })

        runInAction(() => {
            if (response.status !== 200) {
                this._meta = Meta.error
            }

            try {
                this._meta = Meta.success;
                this._recipesList = []
                this._recipesList = normalizeRecipes(response.data);
                return;
            } catch (e) {
                console.error(e.message)
                this._meta = Meta.error;
                this._recipesList = []
            }
        })

    }

    private readonly _qpReaction: IReactionDisposer = reaction(
        () => rootStore.query.getParam('search'),
        (search) => {
            console.log(search)
        }
    )

    destroy(): void {
    }
}
