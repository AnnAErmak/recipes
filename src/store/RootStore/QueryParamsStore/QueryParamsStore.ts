import {action, makeObservable, observable} from "mobx";

export default class QueryParamsStore {
    private _params = {};
    private _search: string = "";
    // private _filterCategory = "";
    // private _offset: number = 0

    constructor() {
        makeObservable(this, {
            _params: observable.ref,
            setSearch: action
        })
    }

    getParam( key: string): any{
        return this._params[key];
    }

    setSearch(search: string){
        search = search.startsWith('?') ? search.slice(1) : search

        if(this._search !== search){
            this._search = search;
            this._params = {search: 'search'}
        }
    }
}
