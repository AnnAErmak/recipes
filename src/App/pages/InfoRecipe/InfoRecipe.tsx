import cn from "classnames";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import Text from "components/Text";
import ArrowDownIcon from "../../../components/Icons/ArrowDownIcon";
import {getInfoRecipe} from "../../../utils/api";
import {normalizeRecipe} from "../../../utils/normalizeRecipe";
import {r} from './recipe'
import styles from './InfoRecipe.module.scss'
const InfoRecipe = () => {
    const [recipe, setRecipe] = useState({})
        console.log(r.id)
    const { id } = useParams()

    useEffect(() => {
            const fetchRecipeInfo = async (idRecipe) => {
                const response = await getInfoRecipe(idRecipe)
                const recipeInfo = normalizeRecipe(response)
            }

            // fetchRecipeInfo(id)
    }, [])
    return(

        <main className={cn('container', styles.card_info_wrapper)}>
            <img src={'src/assets/cardInfo_bg.png'} alt={'bg_cardInfo'}/>
            <section className={styles.linkBack}>
                <Link to="/">
                    <ArrowDownIcon />
                    <Text tag='h1'>Pancake Breakfast Casserole</Text>
                </Link>
            </section>
            <section className={styles.shortInfo_wrapper}>
                <div>
                    <img src={''} alt={'pictureof a dish'}/>
                </div>
                <div className={styles.cooking_time_info}>
                    тайменги
                </div>
            </section>
            <section className={styles.short_recipe}>
                <Text>
                    Pancake Breakfast Casserole takes around 9 hours and 20 minutes from beginning to end. One portion of this dish contains approximately 13g  of protein, 19g of fat, and a total of 499 calories. For $2.33 per serving, this recipe covers 19% of your daily requirements of vitamins and minerals. This recipe serves 8. It works well as a main course. 3369 people were glad they tried this recipe. It is brought to you by Foodnetwork. It is a good option if you're following a lacto ovo vegetarian diet. If you have sugar, baking soda, eggs, and a few other ingredients on hand, you can make it. It is perfect for Christmas. Taking all factors into account, this recipe earns a spoonacular score of 65%, which is pretty good. Similar recipes are Pancake Breakfast Casserole, Pancake Breakfast Casserole, and Pancake Breakfast Casserole.
                </Text>
            </section>
            <section>
                <div className={styles.ingredients}>
                    ингридиенты
                </div>
                <div className={styles.equipment}>
                    Экипировка
                </div>
            </section>
            <section>
                <Text>Directions</Text>
                Steps
            </section>
        </main>
    )
}
export default InfoRecipe
