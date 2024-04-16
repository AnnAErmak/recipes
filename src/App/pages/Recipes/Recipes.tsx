import Text from "../../../components/Text";
import styles from './Recipes.module.scss'

const Recipes = () => {
    return(
        <main>
            <img src='../../../assets/main_bg.png' alt="background_page"/>
            <div className={`container ${styles.main_wrapper}`}>
                <Text tag='p'>Find the perfect food and drink ideas for every occasion, from weeknight dinners to holiday feasts.</Text>
            </div>
        </main>
    )
}

export default Recipes
