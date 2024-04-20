import {ResponseRecipes} from "../config/apiTypesResponseRecipes";

export type Recipe = {
    id: number,
    image: string,
    captionSlot: number,
    title: string,
    subtitle: string,
    contentSlot: number,
}

export type NormalizeRecipes = {
    recipe: Recipe[],
    totalResults: number
}

export const normalizeRecipes = (data: ResponseRecipes):NormalizeRecipes =>{

    const response = data.results.map(el => {

        const ingredientsArr = el.nutrition.ingredients.map(item => item.name).join(' + ')

        return {
            id: el.id,
            image: el.image,
            captionSlot: el.readyInMinutes,
            title: el.title,
            subtitle: ingredientsArr,
            contentSlot: el.nutrition.nutrients[0].amount,
        }
    })

    return {recipe: response, totalResults: data.totalResults}
}
