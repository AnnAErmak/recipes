export interface ResponseRecipes {
    results: Result[]
    offset: number
    number: number
    totalResults: number
}

export interface Result {
    vegetarian: boolean
    vegan: boolean
    glutenFree: boolean
    dairyFree: boolean
    veryHealthy: boolean
    cheap: boolean
    veryPopular: boolean
    sustainable: boolean
    lowFodmap: boolean
    weightWatcherSmartPoints: number
    gaps: string
    preparationMinutes: number
    cookingMinutes: number
    aggregateLikes: number
    healthScore: number
    creditsText: string
    sourceName: string
    pricePerServing: number
    id: number
    title: string
    readyInMinutes: number
    servings: number
    sourceUrl: string
    image: string
    imageType: string
    nutrition: Nutrition
    summary: string
    cuisines: any[]
    dishTypes: string[]
    diets: string[]
    occasions: any[]
    analyzedInstructions: AnalyzedInstruction[]
    spoonacularScore: number
    spoonacularSourceUrl: string
}

export interface Nutrition {
    nutrients: Nutrient[]
    properties: Property[]
    flavonoids: Flavonoid[]
    ingredients: Ingredient[]
    caloricBreakdown: CaloricBreakdown
    weightPerServing: WeightPerServing
}

export interface Nutrient {
    name: string
    amount: number
    unit: string
    percentOfDailyNeeds: number
}

export interface Property {
    name: string
    amount: number
    unit: string
}

export interface Flavonoid {
    name: string
    amount: number
    unit: string
}

export interface Ingredient {
    id: number
    name: string
    amount: number
    unit: string
    nutrients: Nutrient2[]
}

export interface Nutrient2 {
    name: string
    amount: number
    unit: string
    percentOfDailyNeeds: number
}

export interface CaloricBreakdown {
    percentProtein: number
    percentFat: number
    percentCarbs: number
}

export interface WeightPerServing {
    amount: number
    unit: string
}

export interface AnalyzedInstruction {
    name: string
    steps: Step[]
}

export interface Step {
    number: number
    step: string
    ingredients: Ingredient2[]
    equipment: Equipment[]
    length?: Length
}

export interface Ingredient2 {
    id: number
    name: string
    localizedName: string
    image: string
}

export interface Equipment {
    id: number
    name: string
    localizedName: string
    image: string
}

export interface Length {
    number: number
    unit: string
}
