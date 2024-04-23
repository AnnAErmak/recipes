import {observer} from "mobx-react-lite";
import * as React from "react";
import {useState} from "react";
import {Link, useSearchParams} from "react-router-dom";
import Button from "components/Button";
import Card from "components/Card";
import Search from "components/Icons/Search";
import Watch from "components/Icons/Watch";
import Input from "components/Input";
import MultiDropdown, {Option} from "components/MultiDropdown";
import Pagination from "components/Pagination";
import Text from "components/Text";
import {PAGINATION_LIMIT, INDENT} from "config/paginations";
import RecipesStore from "store/RecipesStore";
import {useQueryParamsStoreInit} from "store/RootStore/hooks/useQueryParamsStoreInit";
import {getRecipes} from "utils/api";
import {Meta} from "utils/meta";
import {normalizeRecipes} from "utils/normalizeRecipes";
import {useLocalStore} from "utils/useLocalStore";
import FilterStore from "../../../store/FilterStore";
import styles from './Recipes.module.scss'


const Recipes: React.FC = () => {
    useQueryParamsStoreInit()
        // const recipesStore = useLocalStore(() => new RecipesStore())
        const filterStore = useLocalStore(() => new FilterStore())
    // console.log(recipesStore.recipesList)
    // React.useEffect(() => {
    //     recipesStore.getRecipes()
    // }, [recipesStore])

    const handleInputChange = (value)=>{
        filterStore.setSearch(value)
    }
    const handleMultiDropDownChange = (value)=>{
        filterStore.setFilterCategory(value)
    }
    const handleGetTitle = (value) => {
        if(value.length === 0){
            return
        }
        return filterStore.setTitleCategory(value)
    }

    const handlerPagination = (value) =>{
        filterStore.setActivePage(value)
    }
    return (

            <main>
                <img src='src/assets/main_bg.jpg' alt="background_page"/>
                <div className={`container ${styles.main_wrapper}`}>
                    <Text view={'p-20'} className={styles.aline_text} >Find the perfect food and drink ideas for every occasion, from weeknight dinners to
                        holiday feasts.
                    </Text>
                    <div className={styles.actions_wrapper}>
                        <div className={styles.input_wrapper}>
                            <Input value={filterStore.search} onChange={handleInputChange}/>
                            <Button className={styles.button_search}>
                                <Search/>
                            </Button>
                        </div>
                            <MultiDropdown className={styles.dropdown} options={[
                                {key: '1', value: 'main course'},
                                {key: '2', value: 'side dish'},
                                {key: '3', value: 'dessert'},
                                {key: '4', value: 'appetizer'},
                            ]}
                                           value={filterStore.filterCategory} getTitle={handleGetTitle}
                                           onChange={handleMultiDropDownChange}/>
                    </div>
                {/*    <div className={styles.list_wrapper}>*/}
                {/*        {recipesStore.recipesList.length === 0 && <span>нет таких рецептов</span>}*/}

                {/*{recipesStore.meta === Meta.success && (recipesStore.recipesList.recipe.map(item =>(*/}
                {/*                <Link className={styles} to={`recipe/${item.id}`} key={item.id}>*/}
                {/*                    <Card*/}
                {/*                        image={item.image}*/}
                {/*                        captionSlot ={<Text view={'p-14'} weight={'medium'} color={'secondary'}>*/}
                {/*                            <Watch className={styles.icon} width={12} height={12}/>*/}
                {/*                            {item.captionSlot}   minutes*/}
                {/*                    </Text>}*/}
                {/*                        title={<Text weight={'medium'} view={'p-20'}  color={'primary'} maxLines={2}>{item.title}</Text>}*/}
                {/*                        subtitle={<Text view={'p-16'} color={'secondary'} maxLines={3}>{item.subtitle}</Text> }*/}
                {/*                        contentSlot={<Text view={'p-18'} weight={'bold'} color={'accent'}>{item.contentSlot} kcal</Text>}*/}
                {/*                        actionSlot={<Button className={styles.button_search}>Save</Button>}*/}
                {/*                    />*/}
                {/*                </Link>*/}
                {/*            )*/}
                {/*            ))}*/}

                {/*    </div>*/}
                    <Pagination
                        limit={PAGINATION_LIMIT}
                        // count={recipesStore.recipesList.totalCount}
                        count={500}
                        page={filterStore.activePage}
                        indent={INDENT}
                        onChangePage={handlerPagination}
                    />
                </div>
            </main>

    )
}

export default observer(Recipes);
