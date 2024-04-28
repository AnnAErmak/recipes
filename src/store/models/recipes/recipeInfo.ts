export type RecipeInfoApi ={
    summary: string
    image: string
    servings: number
    aggregateLikes: number;
    analyzedInstructions: AnalyzedInstruction[];
    extendedIngredients: ExtendedIngredient[];
    cookingMinutes: number;
    preparationMinutes: number
}

export type ExtendedIngredient = {
    id: number
    name: string
}
export type AnalyzedInstruction = {
    name: string
    steps: Step[]
}
export type Step = {
    number: number
    step: string
}

export type RecipeInfoModel = {
    image: string,
    preparation: number,
    cooking: number,
    ratings: number,
    servings: number,
    summary: string,
    ingredients: ExtendedIngredient[],
    analyzedInstructions: AnalyzedInstruction[]
}

export const normalizeRecipe =(from:RecipeInfoApi): RecipeInfoModel => {
    return {
        image: from.image,
        preparation: from.preparationMinutes,
        cooking: from.cookingMinutes,
        ratings: from.aggregateLikes,
        servings: from.servings,
        summary: from.summary,
        ingredients: from.extendedIngredients,
        analyzedInstructions: from.analyzedInstructions
    }
}
