import GlobalFilterStore from "./GlobalFilterStore";
import QueryParamsStore from "./QueryParamsStore";

export default class RootStore {
    readonly query = new QueryParamsStore()
    readonly filters = new GlobalFilterStore()
}
