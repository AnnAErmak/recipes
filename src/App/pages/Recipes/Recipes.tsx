import {observer} from "mobx-react-lite";
import * as React from "react";
import {useSearchParams} from "react-router-dom";
import img from 'assets/main_bg.png';
import Container from "components/Container";
import Pagination from "components/Pagination";
import Text from "components/Text";
import {PAGINATION_LIMIT, INDENT} from "config/paginations";
import FilterStore from "store/FilterStore";
import RecipesStore from "store/RecipesStore";
import {useQueryParamsStoreInit} from "store/RootStore/hooks/useQueryParamsStoreInit";
import {useLocalStore} from "utils/useLocalStore";
import Content from "./Content";
import Filters from "./Filters";
import styles from './Recipes.module.scss'

const Recipes: React.FC = () => {
    useQueryParamsStoreInit();
    const recipesStore = useLocalStore(() => new RecipesStore())
    const filterStore = useLocalStore(() => new FilterStore())

    const [params, setParams] = useSearchParams()

    const handelChangePagination = React.useCallback((value) => {
        const offset = String((value * PAGINATION_LIMIT) - PAGINATION_LIMIT)
        params.set("offset", offset)
        setParams(params)
        filterStore.setActivePage(value)
    }, [])

    React.useEffect(() => {
        if(!window.location.search){
            setParams({"offset": "0"})
        } else {
            const value =Math.ceil((+params.get('offset') + recipesStore.totalCount) / recipesStore.totalCount)
            filterStore.setActivePage(value)
            const config = {offset: params.get('offset'),
                type:params.get('type'),
                query: params.get('query')
            }
            recipesStore.getRecipes(config)
        }

    }, [])

    return (
        <main>
            <img src={img} alt="background_page"/>
            <Container>
                <Text view={'p-20'} className={styles.aline_text}>
                    Find the
                    perfect food and drink ideas for every
                    occasion, from weeknight dinners to
                    holiday feasts.
                </Text>
                <Filters/>
                <Content recipesStore={recipesStore}/>
                <Pagination
                    limit={PAGINATION_LIMIT}
                    count={recipesStore.totalCount}
                    page={filterStore.activePage}
                    indent={INDENT}
                    onChangePage={handelChangePagination}
                />
            </Container>
        </main>
    )
}

export default observer(Recipes);
