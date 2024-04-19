import {createContext} from "react";

type PaginationContextType = {
    activePage: number;
    setActivePage: (page: number) => void;
};

export const PaginationContext = createContext<PaginationContextType>({
    activePage: 1,
    setActivePage: ()=> {}
})
