import cn from "classnames";
import {observer} from "mobx-react-lite";
import * as React from "react";
import {Link, Navigate, useHistory, useLocation, useNavigate, useParams} from "react-router-dom";
import imgUrl from 'assets/cardInfo_bg.png'
import Text from "components/Text";
import Container from "../../../components/Container";
import ArrowDownIcon from "../../../components/Icons/ArrowDownIcon";
import Dishtrai from "../../../components/Icons/Dishtrai";
import Ladle from "../../../components/Icons/Ladle";
import RecipeStore from "../../../store/RecipeStore";
import {useLocalStore} from "../../../utils/useLocalStore";
import Card from "./Card";
import Description from "./Description";
import Devices from "./Devices/Devices";
import Ingredients from "./Ingredients/Ingredients";
import Steps from "./Steps";
import {rec} from './recipe'
import styles from './InfoRecipe.module.scss'

const InfoRecipe: React.FC = () => {
    const [recipe, setRecipe] = React.useState(rec)
    // const [equipment, setEquipment] = React.useState([])

    const {id} = useParams()
    const location = useLocation()
    const recipeInfo = useLocalStore(() => new RecipeStore())
    // const fromPage = location.state?.from?.pathname || '/'
    React.useEffect(() => {
        // recipeInfo.getRecipeInfo(638464)
    }, [])

        // return<>
        //     <p onClick={(e) =>handelClickLink(e)}>Нет данных о рецепте</p>
        //     {/*{fromPage}*/}
        //
        // </>

    return (
        <main className={cn(styles.card_info_wrapper)}>
            {/*<img src={imgUrl} alt={'bg_cardInfo'}/>*/}
            <section className={styles.linkBack}>
                {/*<Link to={`/${location.state.from.search}`} className={styles.arrownLink}>*/}
                {/*    <ArrowDownIcon color={'primary'}/>*/}
                {/*    <Text tag='h1'>Pancake Breakfast Casserole</Text>*/}
                {/*</Link>*/}
            </section>
            <Card image ={recipe.image}
                  preparation={recipe.preparation}
                  cooking={recipe.cooking}
                  ratings={recipe.ratings}
                  servings ={recipe.servings} />
            <Description summary={recipe.summary} />
            <section >
                <Container className={styles.composition_wrapper}>
                    <Ingredients ingredients={recipe.ingredients}/>
                    <Devices equipment={[{name:'ghjg'},{name:'ghjg'},{name:'ghjg'},{name:'ghjg'},{name:'ghjg'},{name:'ghjg'},{name:'ghjg'}]}/>
                </Container>
            </section>
            <Steps analyzedInstructions = {recipe.analyzedInstructions}/>
        </main>
    )
}
export default observer(InfoRecipe)
