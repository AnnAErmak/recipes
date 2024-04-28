import * as React from 'react'
import Container from "components/Container";
import Text from "components/Text";
import styles from './Card.module.scss'

export type CardProps = {
    image: string,
    preparation: number,
    cooking: number,
    ratings: number,
    servings: number,
}

const Card: React.FC<CardProps> = ({image, preparation, cooking, ratings, servings}) => {
    return(
        <Container className={styles.card}>
                <div className={styles.card__img}>
                    <img src={image} alt={'picture of a dish'}/>
                </div>
                <div className={styles.card__cookingInfo}>
                    <ul className={styles.list}>
                        <li>
                            <Text view={'p-16'}>Preparation</Text>
                            <Text view={'p-16'} weight={'medium'} color={'accent'} >{preparation} minutes</Text>
                        </li>
                        <li>
                            <Text view={'p-16'}>Cooking</Text>
                            <Text view={'p-16'} weight={'medium'} color={'accent'} >{cooking} minutes</Text>
                        </li>
                        <li>
                            <Text view={'p-16'}>Total</Text>
                            <Text view={'p-16'} weight={'medium'} color={'accent'} >{preparation + cooking} minutes</Text>
                        </li>
                        <li>
                            <Text view={'p-16'}>Ratings</Text>
                            <Text view={'p-16'} weight={'medium'} color={'accent'} >{ratings} likes</Text>
                        </li>
                        <li>
                            <Text view={'p-16'}>Servings</Text>
                            <Text view={'p-16'} weight={'medium'} color={'accent'} >{servings} servings</Text>
                        </li>
                    </ul>
                </div>
        </Container>
    )
}

export default Card
