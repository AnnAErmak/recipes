import * as React from 'react';
import {Link, useLocation} from "react-router-dom";
import { v4 as uuid4 } from 'uuid';
import Button from "components/Button";
import Card from "components/Card";
import Watch from "components/Icons/Watch";
import Text from "components/Text";
import RecipesStore from "store/RecipesStore";
import {useLocalStore} from "utils/useLocalStore";
import Loader from "../Loader";
import styles from './Content.module.scss';
// import {observer} from "mobx-react-lite";

const Content: React.FC = ({recipesStore}) => {
    const location = useLocation()
    // const recipesStore = useLocalStore(() => new RecipesStore())

    if (recipesStore.recipesList.length === 0) {
        return (
            <div className={styles.list_wrapper}>
                {[...new Array(3)].map(() => <Loader key={uuid4()}/>)}
            </div>
        )
    }

    return (
        <div className={styles.list_wrapper}>
            {recipesStore.recipesList.map((item) => (
                    <Link to={`recipe/${item.id}`} state={{from: location}} key={item.id}>
                        <Card
                            key={item.id}
                            image={item.image}
                            captionSlot={
                                <Text view={'p-14'} weight={'medium'} color={'secondary'}>
                                    <Watch className={styles.icon} width={12} height={12}/>
                                    {item.captionSlot} minutes
                                </Text>}
                            title={<Text weight={'medium'} view={'p-20'} color={'primary'} maxLines={2}>{item.title}</Text>}
                            subtitle={<Text view={'p-16'} color={'secondary'} maxLines={3}>{item.subtitle}</Text>}
                            contentSlot={<Text view={'p-18'} weight={'bold'}
                                               color={'accent'}>{item.contentSlot} kcal</Text>}
                            actionSlot={<Button className={styles.button_search}>Save</Button>}
                        />
                    </Link>
                )
            )}

        </div>
    )
}
export default Content
