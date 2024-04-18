import {useEffect, useState} from "react";
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
import styles from './Recipes.module.scss'

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [countRecipes, setcountRecipes] = useState(0)
    const [activePage, setActivePage] = useState(1)

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

    return (
        <main>
            {/*<img src='src/assets/main_bg.jpg' alt="background_page"/>*/}
            <div className={`container ${styles.main_wrapper}`}>
                <Text>Find the perfect food and drink ideas for every occasion, from weeknight dinners to
                    holiday feasts.</Text>
                <div>
                    <Input/>
                    <Button>
                        <Search/>
                    </Button>
                    <MultiDropdown options={[{key: '1', value: 'Gthdfz jgwbz'}]} value='' getTitle={() => {
                    }}/>
                </div>
                <div className={styles.list_wrapper}>
                    {recipes.length === 0 && <span>нет таких рецептов</span>}
                    {recipes.length > 0 &&(
                        recipes.map(item => <Link to={`recipe/${item.id}`} key={item.id}>
                            <Card
                                image={item.image}
                                captionSlot ={<Text>{item.captionSlot}</Text>}
                                title={item.title}
                                subtitle={<Text maxLines={2}>{item.subtitle}</Text> }
                                contentSlot={<span>{item.contentSlot}</span>}
                            />
                            </Link>
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
