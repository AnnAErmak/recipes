import * as React from "react";
import Container from "components/Container";
import Text from "components/Text";
import {AnalyzedInstruction} from "store/models/recipes";
import styles from './Steps.module.scss';

type StepsProps = {
    analyzedInstructions: AnalyzedInstruction[]
}
const Steps: React.FC<StepsProps> = ({analyzedInstructions}) => {

    if(!analyzedInstructions) return <p>У этого рецепта нет инструкции</p>

    return (
        <section>
            <Container>
                <Text view={'p-20'} weight={'bold'} className={styles.title}>Directions</Text>
                <div className={styles.steps}>
                    {analyzedInstructions[0].steps.map(item => (
                        <div key={item.number}>
                            <Text view={'p-16'} weight={'bold'}>{`Step ${item.number}`}</Text>
                            <Text view={'p-14'}>{item.step}</Text>
                        </div>
                    ))}
                </div>
            </Container>

        </section>
    )
}

export default Steps
