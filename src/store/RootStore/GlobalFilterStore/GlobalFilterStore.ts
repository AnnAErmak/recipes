import {action, computed, makeObservable, observable} from "mobx";
import {Option} from "components/MultiDropdown";

type PrivateFields = '_categories'

export default class GlobalFilterStore {

    private _categories: Option[] = []

    constructor() {
        makeObservable<GlobalFilterStore, PrivateFields>(this, {
            _categories: observable.ref,
            categories: computed,
            setCategories: action,
        })
    }

    get categories (){
        return this._categories
    }

    setCategories (value: Option[]){
        this._categories = value
    }
    setTitleCategory (value: Option[]): string{
        if(value.length === 0) {
            return ''
        }
        return value.map((el: Option) => el.value).join();
    }
}
