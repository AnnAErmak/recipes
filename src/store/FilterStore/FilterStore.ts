import {action, computed, makeObservable, observable} from "mobx";
import {Option} from "components/MultiDropdown";
import {ILocalStore} from "utils/useLocalStore";

type PrivateFields = '_search' | '_filterCategory' | '_activePage' ;

export default class FilterStore implements ILocalStore{

    private _search: string = "";
    private _filterCategory: Option[] = [];
    // private _titleCategory: string = "";
    private _activePage: number = 1;

    constructor() {
        makeObservable<FilterStore, PrivateFields>(this, {
            _search: observable,
            _filterCategory: observable.ref,
            _activePage: observable,

            search: computed,
            filterCategory: computed,
            activePage: computed,

            setSearch: action,
            setFilterCategory: action,
            setActivePage: action
        })
    }

    get search(): string{
        return this._search
    }

    get filterCategory(): Option[]{
        return this._filterCategory
    }
    // get titleCategory(): string{
    //     return this._titleCategory
    // }

    get activePage(): number{
        return this._activePage
    }

    setSearch(value: string): void{
        this._search = value
    }

    setFilterCategory(value: Option[]): void{
        this._filterCategory = value;
    }

    setTitleCategory (data: Option[]): string{
        return  data.map((el: Option) => el.value).join();
    }

    setActivePage (value: number){
        this._activePage = value
    }
    destroy(): void {
    }
}
