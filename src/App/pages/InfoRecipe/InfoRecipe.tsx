import cn from "classnames";
import * as React from "react";
import {Link, useParams} from "react-router-dom";
import imgUrl from 'assets/cardInfo_bg.png'
import Text from "components/Text";
import ArrowDownIcon from "../../../components/Icons/ArrowDownIcon";
import Dishtrai from "../../../components/Icons/Dishtrai";
import Ladle from "../../../components/Icons/Ladle";
import {getEquipmentById, getInfoRecipe} from "../../../utils/api";
import {normalizeRecipe, RecipeInfo} from "../../../utils/normalizeRecipe";
import styles from './InfoRecipe.module.scss'


const InfoRecipe = () => {
    const [recipe, setRecipe] = React.useState<RecipeInfo | null>(null)
    const [equipment, setEquipment] = React.useState([])

    const {id} = useParams()

    React.useEffect(() => {
        const fetchRecipeInfo = async (idRecipe) => {
            const response = await getInfoRecipe(idRecipe)
            const equipment = await getEquipmentById(idRecipe)
            const recipeInfo = normalizeRecipe(response)

            setEquipment(equipment)
            setRecipe(recipeInfo)
        }

        fetchRecipeInfo(id)
    }, [])

    if (!recipe) {
        return <p>Нет данных о рецепте</p>
    }
    return (
        <main className={cn('container', styles.card_info_wrapper)}>
            <img src={imgUrl} alt={'bg_cardInfo'}/>
            <section className={styles.linkBack}>
                <Link to="/" className={styles.arrownLink}>
                    <ArrowDownIcon color={'primary'}/>
                    <Text tag='h1'>Pancake Breakfast Casserole</Text>
                </Link>
            </section>
            <section className={styles.shortInfo_wrapper}>
                <div className={styles.img}>
                    <img className={styles.img_recipe} src={recipe.image} alt={'pictureof a dish'}/>
                </div>
                <div className={styles.cooking_time_info}>
                    <div>
                        <p>Preparation</p>
                        <p>{recipe.preparation} minutes</p>
                    </div>
                    <div>
                        <p>Cooking</p>
                        <p>{recipe.cooking} minutes</p>
                    </div>
                    <div>
                        <p>Total</p>
                        <p>{560} minutes</p>
                    </div>
                    <div>
                        <p>Ratings</p>
                        <p>{recipe.ratings} likes</p>
                    </div>
                    <div>
                        <p>Servings</p>
                        <p>{recipe.servings} servings</p>
                    </div>
                </div>
            </section>
            <section className={styles.short_recipe}>
                <div dangerouslySetInnerHTML={{__html: recipe.summary}}>
                </div>
            </section>
            <section className={styles.composition_wrapper}>
                <div className={styles.ingredients}>
                    <Text view={'p-20'} weight={'bold'} className={styles.title}>Ingredients</Text>
                    <div className={styles.ingredients_list}>
                        {recipe.ingredients.map((item, index) => (
                            <div key={item.id + index} className={styles.ingredient}>
                                <div className={styles.svg_wrapper}><Dishtrai/></div>
                                <Text view={'p-16'}>{item.original}</Text>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.equipment}>
                    <Text view={'p-20'} weight={'bold'} className={styles.title}>Equipment</Text>
                    <div className={styles.ingredients_list}>
                        {equipment.map(item => (
                            <div key={item.name} className={styles.ingredient}>
                                <Ladle/>
                                <Text>{item.name}</Text>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <Text view={'p-20'} weight={'bold'} className={styles.title}>Directions</Text>
                <div className={styles.steps_wrapper}>
                    {!recipe.analyzedInstructions[0].steps && <></>}
                    {recipe.analyzedInstructions[0].steps.map(item => (
                        <div key={item.number}>
                            <Text view={'p-16'} weight={'bold'}>{`Step ${item.number}`}</Text>
                            <Text view={'p-14'}>{item.step}</Text>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}
export default InfoRecipe
