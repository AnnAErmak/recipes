import {action, computed, IReactionDisposer, makeObservable, observable, reaction} from "mobx";
import {Option} from "components/MultiDropdown";
import {PAGINATION_LIMIT} from "config/paginations";
import {ILocalStore} from "utils/useLocalStore";
import rootStore from "../RootStore";

type PrivateFields = '_search' | '_filterCategory' | '_activePage' | "_title" ;

export default class FilterStore implements ILocalStore{

    private _search: string = "";
    private _filterCategory: Option[] = [];
    private _activePage: number = 1;
    private _title: string = ''

    constructor() {
        makeObservable<FilterStore, PrivateFields>(this, {
            _search: observable,
            _filterCategory: observable.ref,
            _activePage: observable,
            _title: observable,

            search: computed,
            filterCategory: computed,
            activePage: computed,
            title: computed,

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

    get activePage(): number{
        return this._activePage
    }
    get title(): string{
        return this._title
    }

    setSearch(value: string): void{
        this._search = value
    }

    setFilterCategory(value: Option[]): void{
        this._filterCategory = value
    }

    getTitleCategory (data: Option[] = this._filterCategory): string{
        if(data.length === 0){
            return ''
        }
        this._title = data.map((el: Option) => el.value).join();
        return this._title
    }

    setActivePage (value: number){
        this._activePage = value
    }

    private readonly _qpReaction: IReactionDisposer = reaction(
        () => {
            return rootStore.query.getParam('offset')
        },
        (newFilter) => {
            this.setActivePage((+newFilter / PAGINATION_LIMIT) + 1)
        }
    )

    destroy(): void {
        this._qpReaction()
    }
}
