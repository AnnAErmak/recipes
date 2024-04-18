import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import InfoRecipe from "./pages/InfoRecipe/InfoRecipe";
import Main from "./pages/Main";
import Recipes from "./pages/Recipes";
import styles from './App.module.scss'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route path="/recipe">
                        <Route path=":id" element={<InfoRecipe/>}/>
                    </Route>
                    <Route path="*" element={<Navigate to="/" replace/>}/>
                    <Route index element={<Recipes/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
