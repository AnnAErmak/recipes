import * as React from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {useQueryParamsStoreInit} from "store/RootStore/hooks/useQueryParamsStoreInit";
import Layout from "../components/Layout";
import InfoRecipe from "./pages/InfoRecipe/InfoRecipe";
import Recipes from "./pages/Recipes";

const App: React.FC = () => {
    // useQueryParamsStoreInit();
    return (
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/recipe" element={<InfoRecipe/>}>
                        {/*<Route path=":id" element={<InfoRecipe/>}/>*/}
                    </Route>
                    <Route path="*" element={<Navigate to="/" replace/>}/>
                    <Route index element={<Recipes/>}/>
                </Route>
            </Routes>
    )
}

export default App
