import cn from "classnames";
import {observer} from "mobx-react-lite";
import * as React from "react";
import {Link, useLocation, useParams} from "react-router-dom";
import Container from "components/Container";
import ArrowDownIcon from "components/Icons/ArrowDownIcon";
import Text from "components/Text";
import RecipeStore from "store/RecipeStore";
import {Meta} from "utils/meta";
import {useLocalStore} from "utils/useLocalStore";
import Card from "./Card";
import Description from "./Description";
import Devices from "./Devices/Devices";
import Ingredients from "./Ingredients/Ingredients";
import Loader from "./Loader";
import Steps from "./Steps";
import styles from './InfoRecipe.module.scss'

const InfoRecipe: React.FC = () => {

    const {id} = useParams()
    const location = useLocation()
    const recipeInfo = useLocalStore(() => new RecipeStore())
    const  {image,
        preparation,
        cooking,
        ratings,
        servings,
        summary,
        ingredients,
        analyzedInstructions
    } =recipeInfo.recipeInfo
    const equipment = recipeInfo.equipment

    React.useEffect(() => {
        recipeInfo.getRecipeInfo(id)
    }, [])

    if(recipeInfo.meta === Meta.loading || !equipment || !analyzedInstructions){
        return (
            <Container>
                <Loader />
            </Container>
        )
    }

    return (
        <main className={cn(styles.card_info_wrapper)}>
            {/*<img src={imgUrl} alt={'bg_cardInfo'}/>*/}
            <Container>
                <section className={styles.linkBack}>
                    <Link to={`/${location.state.from.search}`} className={styles.arrownLink}>
                        <ArrowDownIcon color={'primary'}/>
                        <Text tag='h1'>Pancake Breakfast Casserole</Text>
                    </Link>
                </section>
                <Card image={image}
                      preparation={preparation}
                      cooking={cooking}
                      ratings={ratings}
                      servings={servings}/>
                <Description summary={summary}/>
                <section className={styles.composition_wrapper}>
                    {!ingredients ? <></> : <Ingredients ingredients={ingredients}/>}
                    <Devices
                        equipment={equipment}/>
                </section>
                {!analyzedInstructions ? <></> :<Steps analyzedInstructions={analyzedInstructions}/>}
            </Container>
        </main>
    )
}
export default observer(InfoRecipe)
