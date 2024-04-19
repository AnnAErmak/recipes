import {useContext, useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Button from "components/Button";
import Card from "components/Card";
import Search from "components/Icons/Search";
import Input from "components/Input";
import MultiDropdown from "components/MultiDropdown";
import Pagination from "components/Pagination";
import Text from "components/Text";
import {PAGINATION_LIMIT, INDENT} from "config/paginations";
import {getRecipes} from "utils/api";

import {normalizeRecipes} from "utils/normalizeRecipes";
import Watch from "../../../components/Icons/Watch";
import {PaginationContext} from "../../../utils/PaginationContext";
import {re} from '../InfoRecipe/recipe'
import styles from './Recipes.module.scss'

const Recipes = () => {
    const [recipes, setRecipes] = useState(re);
    const [countRecipes, setcountRecipes] = useState(0)
    // const [activePage, setActivePage] = useState(1)

    const {activePage, setActivePage} = useContext(PaginationContext)

    const handlerPagination = (page) => {
        setActivePage(page)
    }

    useEffect(() => {

        const fetchLimitRecipes = async () => {
            const response = await getRecipes({
                params: {
                    offset: (activePage * PAGINATION_LIMIT) - PAGINATION_LIMIT,
                    number: PAGINATION_LIMIT,
                },
                })
            const recipes = normalizeRecipes(response)
            setRecipes([...recipes.recipe])
            setcountRecipes(recipes.totalResults)
        }


        // fetchLimitRecipes()

    }, [activePage])
// console.log(recipes)
    return (

            <main>
                <img src='src/assets/main_bg.jpg' alt="background_page"/>
                <div className={`container ${styles.main_wrapper}`}>
                    <Text view={'p-20'} className={styles.aline_text} >Find the perfect food and drink ideas for every occasion, from weeknight dinners to
                        holiday feasts.
                    </Text>
                    <div className={styles.actions_wrapper}>
                        <div className={styles.input_wrapper}>
                            <Input/>
                            <Button className={styles.button_search}>
                                <Search/>
                            </Button>
                        </div>
                            <MultiDropdown className={styles.dropdown} options={[{key: '1', value: 'Gthdfz jgwbz'}]} value={[]} getTitle={() => {
                            }} onChange={()=>{}}/>
                    </div>
                    <div className={styles.list_wrapper}>
                        {recipes.length === 0 && <span>нет таких рецептов</span>}
                        {recipes.length > 0 &&(
                            recipes.map(item =>(
                                <Link className={styles} to={`recipe/${item.id}`} key={item.id}>
                                    <Card
                                        image={item.image}
                                        captionSlot ={<Text view={'p-14'} weight={'medium'} color={'secondary'}>
                                            <Watch className={styles.icon} width={12} height={12}/>
                                            {item.captionSlot}   minutes
                                    </Text>}
                                        title={<Text weight={'medium'} view={'p-20'}  color={'primary'} maxLines={2}>{item.title}</Text>}
                                        subtitle={<Text view={'p-16'} color={'secondary'} maxLines={3}>{item.subtitle}</Text> }
                                        contentSlot={<Text view={'p-18'} weight={'bold'} color={'accent'}>{item.contentSlot} kcal</Text>}
                                        actionSlot={<Button className={styles.button_search}>Save</Button>}
                                    />
                                </Link>
                            )
                            ))
                        }
                    </div>
                    <Pagination
                        limit={PAGINATION_LIMIT}
                        count={countRecipes}
                        page={activePage}
                        indent={INDENT}
                        onChangePage={handlerPagination}
                    />
                </div>
            </main>

    )
}

export default Recipes
