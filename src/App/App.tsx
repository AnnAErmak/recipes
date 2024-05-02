import * as React from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import Layout from "components/Layout";
import InfoRecipe from "./pages/InfoRecipe/InfoRecipe";
import Recipes from "./pages/Recipes";

const App: React.FC = () => {

    return (
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/recipe">
                        <Route path=":id" element={<InfoRecipe/>}/>
                    </Route>
                    <Route path="*" element={<Navigate to="/" replace/>}/>
                    <Route index element={<Recipes/>}/>
                </Route>
            </Routes>
    )
}

export default App
