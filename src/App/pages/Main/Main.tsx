import * as React from "react";
import {Outlet} from "react-router-dom";
import Header from "../../../components/Header";

const Main: React.FC = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}
export default Main
