import * as React from "react";
import {Link, NavLink} from "react-router-dom";
import Heart from "../Icons/Heart";
import Logo from "../Icons/Logo";
import User from "../Icons/User";
import styles from './Header.module.scss'

const Header: React.FC = () => {
    return (
        <header>


            <div className={`container ${styles.header_wrapper}`}>
                <div className={styles.header_menu}>
                    <Link to='/' className={styles.logo}>
                        <Logo/>
                        <p>Food Client</p>
                    </Link>
                    <nav>
                        <NavLink to="." end>Recipes</NavLink>
                        <NavLink to="0">Ingredients</NavLink>
                        <NavLink to="1">Products</NavLink>
                        <NavLink to="2">Menu Items</NavLink>
                        <NavLink to="3">Meal Planning</NavLink>
                    </nav>
                </div>
                <div className={styles.icons}>
                    <User/>
                    <Heart/>
                </div>
            </div>
        </header>
    )
}

export default Header
