import {observer} from "mobx-react-lite";
import * as React from 'react';
import {Link, useLocation} from "react-router-dom";
import Button from "components/Button";
import Card from "components/Card";
import Watch from "components/Icons/Watch";
import Text from "components/Text";
import RecipesStore from "store/RecipesStore";
import {Meta} from "utils/meta";
import {useLocalStore} from "utils/useLocalStore";
import Loader from "../Loader";
import styles from './Content.module.scss';

const Content: React.FC = () => {
    const recipesStore = useLocalStore(() => new RecipesStore())
    const location = useLocation()

    if (recipesStore.meta === Meta.loading) {
        return (
            <div className={styles.list_wrapper}>
                {[...new Array(3)].map(el => <Loader key={el}/>)}
            </div>
        )
    }

    return (
        <div className={styles.list_wrapper}>
            {recipesStore.recipesList.map((item, idx) => (
                    <Link to={`recipe/${item.id}`} state={{from: location}} key={item.id + idx}>
                        <Card
                            image={item.image}
                            captionSlot={<Text view={'p-14'} weight={'medium'} color={'secondary'}>
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
export default observer(Content)
