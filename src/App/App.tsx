import * as React from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {PaginationContext} from "../utils/PaginationContext";
import InfoRecipe from "./pages/InfoRecipe/InfoRecipe";
import Main from "./pages/Main";
import Recipes from "./pages/Recipes";

const Provider = PaginationContext.Provider

const App: React.FC = () => {
    const [activePage, setActivePage] = React.useState(1)
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route path="/recipe">
                        <Route path=":id" element={<InfoRecipe/>}/>
                    </Route>
                    <Route path="*" element={<Navigate to="/" replace/>}/>
                    <Route index element={<Provider value={{activePage, setActivePage}}> <Recipes/></Provider>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
