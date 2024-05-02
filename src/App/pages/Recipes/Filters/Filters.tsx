import {observer} from "mobx-react-lite";
import * as React from "react";
import {useSearchParams} from "react-router-dom";
import Button from "components/Button";
import Search from "components/Icons/Search";
import Input from "components/Input";
import MultiDropdown, {Option} from "components/MultiDropdown";
import {categories} from "config/categories";
import FilterStore from "store/FilterStore";
import {useLocalStore} from "utils/useLocalStore";
import styles from './Filters.module.scss'




const Filters: React.FC = () => {
    const filterStore = useLocalStore(() => new FilterStore())
    const [params, setParams] = useSearchParams()

    const handelChangeInput =(value) =>{
        filterStore.setSearch(value)
    }

    const handelChangeCategory =(value) => {
        return filterStore.setFilterCategory(value)
    }
    const handelGetTitle = (value) => {
        return filterStore.getTitleCategory(value)
    }
    const handleApplyFilters = () => {
        const categories = filterStore.filterCategory.map((el: Option) => el.value).join();
        params.set("type", categories)
        params.set("query", filterStore.search)
        params.set("offset", '0')
        setParams(params)
    }

    React.useEffect(() => {
        if(params.get('type')){
            const selectCategories = params.get('type').split(',')
            const matches =  selectCategories.map(el => categories.find(item => item.value === el) )
            filterStore.setFilterCategory(matches)
        }
        if(params.get('query')) {
            filterStore.setSearch(params.get('query'))
        }
    }, [])

    return (
        <div className={styles.filterWrapper}>
            <div className={styles.inputWrapper}>
                <Input value={filterStore.search} onChange={handelChangeInput}/>
                <Button
                    className={styles.button_search}
                    onClick={handleApplyFilters}
                >
                    <Search/>
                </Button>
            </div>
            <MultiDropdown className={styles.dropdown} options={categories}
               value={filterStore.filterCategory}
               getTitle={handelGetTitle}
               onChange={handelChangeCategory}/>
        </div>
    )
}
export default observer(Filters)
