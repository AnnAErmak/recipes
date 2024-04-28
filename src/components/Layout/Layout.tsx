import cn from "classnames";
import * as React from "react";
import {Outlet} from "react-router-dom";
import Header from "../Header";
import styles from './Layout.module.scss'


type LayoutProps ={
    className?: string
}

const Layout: React.FC<LayoutProps> =({className}) =>{
    return (
        <div className = {cn(styles.layout, className)}>
            <Header/>
            <Outlet/>
        </div>
    )
}
export default Layout
