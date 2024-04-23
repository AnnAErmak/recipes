import axios, {AxiosRequestConfig} from "axios";
import {API_KEY, BASE_HEADER, BASE_URL} from "config/api";
import {ResponseRecipe} from "config/apiTypesResponseRecipe";
import {ResponseRecipes} from "config/apiTypesResponseRecipes";

axios.defaults.baseURL = BASE_URL
axios.defaults.headers.get = BASE_HEADER

const recipesAxios = axios.create()
const recipeAxios = axios.create()

export const getRecipes = async (config: AxiosRequestConfig) => {

    try {
        const {data} = await recipesAxios.get<ResponseRecipes>(`complexSearch`, {params:{
                apiKey:API_KEY,
                addRecipeInformation: true,
                addRecipeInstructions: true,
                addRecipeNutrition: true,
                ...config.params,
            }})
        return data
    } catch (err) {
        console.error(err.message)
    }
}

export const getInfoRecipe = async (id: number) => {
    try {
        const {data} = await recipeAxios.get<ResponseRecipe>(`${id}/information`, {
            params:{
                apiKey:API_KEY,
            }
        })
        return data
    } catch (err) {
        console.error(err.message)
    }
}

export const getEquipmentById = async (id: number) => {
    try {
        const {data} = await recipeAxios.get<{name:string, image:string}[]>(`${id}/equipmentWidget.json`, {
            params:{
                apiKey:API_KEY,
            }
        })

        return data.equipment
    } catch (err) {
        console.error(err.message)
    }
}
