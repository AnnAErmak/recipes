import * as React from 'react'
import Container from "components/Container";
import styles from './Description.module.scss'

export type DescriptionProps = {
    summary:string
}

const Description: React.FC<DescriptionProps> = ({summary}) => {
    return (
        <Container className={styles.shortRecipe}>
            <div dangerouslySetInnerHTML={{__html: summary}} />
        </Container>
    )
}

export default Description
