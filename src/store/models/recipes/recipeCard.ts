export type Ingredient = {
    id: number
    name: string
    amount: number
    unit: string
    nutrients: Nutrient2[]
}

export type Nutrient2 = {
    name: string
    amount: number
    unit: string
    percentOfDailyNeeds: number
}
export type Nutrient = {
    name: string
    amount: number
    unit: string
    percentOfDailyNeeds: number
}

export type Nutrition = {
    nutrients: Nutrient[]
    ingredients: Ingredient[]
}

export type Result = {
    id: number
    image: string
    title: string
    readyInMinutes: number
    nutrition: Nutrition

}
export type RecipeCardApi = {
    results: Result[]
    offset: number
    number: number
    totalResults: number
}

export type RecipeCard ={
    id: number,
    image: string,
    captionSlot: number,
    title: string,
    subtitle: string,
    contentSlot: number,
}
export type RecipeCardModel = {
    recipe: RecipeCard[]
    totalCount: number
}

export const normalizeRecipes = (from: RecipeCardApi): RecipeCardModel => {
    const response = from.results.map(el => {

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

    return {totalResults: from.totalResults, recipe: response }
}
