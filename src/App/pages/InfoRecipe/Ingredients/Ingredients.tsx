import * as React from 'react'
import Dishtrai from "components/Icons/Dishtrai";
import Text from "components/Text";
import styles from './Ingredients.module.scss'

type IngredientsProps = {
    ingredients: {
        id: number
        original: string
    }[]
}

const Ingredients: React.FC<IngredientsProps> = ({ingredients}) => {
    return (
        <div className={styles.ingredients}>
            <Text view={'p-20'} weight={'bold'} className={styles.title}>Ingredients</Text>
            <ul className={styles.list}>
                {ingredients.map((item, index) => (
                    <li key={item.id + index} className={styles.ingredient}>
                        <div className={styles.svg_wrapper}><Dishtrai/></div>
                        <Text view={'p-16'}>{item.original}</Text>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Ingredients
