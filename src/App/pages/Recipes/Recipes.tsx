import {observer} from "mobx-react-lite";
import * as React from "react";
import { useSearchParams} from "react-router-dom";
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
    // console.log(recipesStore.recipesList.length)

    // const {recipeList} = recipesStore
    // console.log(recipeList)

    const [params, setParams] = useSearchParams()

    // const recipeList = recipesStore.recipesList
    const handelChangePagination = React.useCallback((value) => {
        const offset = String((value * PAGINATION_LIMIT) - PAGINATION_LIMIT)
        const config = {
            offset: offset,
            type:params.get('type') || '',
            query: params.get('query') || ''
        }
        recipesStore.getRecipes(config)
        filterStore.setActivePage(value)
        setParams(config)
    }, [])

    React.useEffect(() => {
        if(!window.location.search){
            setParams({"offset": "0"})
        } else {
            const config = {offset: params.get('offset'),
                type:params.get('type'),
                query: params.get('query')
            }
            recipesStore.getRecipes(config)
            filterStore.setActivePage(((+config.offset / PAGINATION_LIMIT) + 1))
        }

    }, [])

    return (
        <main>
            <div className={styles.bg}/>
            <Container>
                <Text view={'p-20'} className={styles.aline_text}>
                    Find the
                    perfect food and drink ideas for every
                    occasion, from weeknight dinners to
                    holiday feasts.
                </Text>
                <Filters/>
                {recipesStore.recipesList.length !== 0 &&<Content recipeStor={recipesStore}/>}
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
