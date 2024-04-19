import {AnalyzedInstruction, ExtendedIngredient, ResponseRecipe} from "../config/apiTypesResponseRecipe";

// export type RecipeInfo = {
//     image: string,
//     preparation: number,
//     cooking: number,
//     ratings:number,
//     servings: number,
//     summary: string,
//     ingredients: ExtendedIngredient[],
//     analyzedInstructions: AnalyzedInstruction
// }
export interface RecipeInfo{
    summary: string;
    image: string;
    servings: number;
    ratings: number;
    analyzedInstructions: AnalyzedInstruction[];
    ingredients: ExtendedIngredient[];
    cooking: number;
    preparation: number }

export const normalizeRecipe = (data:ResponseRecipe): RecipeInfo => {
            return {
            image: data.image,
            preparation: data.preparationMinutes,
            cooking: data.cookingMinutes,
            ratings: data.aggregateLikes,
            servings: data.servings,
            summary: data.summary,
            ingredients: data.extendedIngredients,
            analyzedInstructions: data.analyzedInstructions
        }
}
