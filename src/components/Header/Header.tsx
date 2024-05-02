import cn from "classnames";
import * as React from "react";
import {Link, NavLink} from "react-router-dom";
import Container from "components/Container";
import Heart from "components/Icons/Heart";
import Logo from "components/Icons/Logo";
import User from "components/Icons/User";
import Text from "components/Text";
import styles from './Header.module.scss'

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(true)

    return (
        <header className={styles.header}>
            <Container className={styles.wrapper}>
                <div className={styles.menu}>
                    <Link to='/' className={styles.logo}>
                        <Logo color={'accent'}/>
                        <Text view={'p-20'} weight ="bold">Food Client</Text>
                    </Link>
                    <button onClick={() => setIsOpen(!isOpen)} className={styles.burger}>
                        <div className={styles.btn__burger}>
                            <div></div>
                        </div>
                    </button>
                    <nav className={cn({
                        [styles.nav_open]: isOpen
                    })}>
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
            </Container>
        </header>
    )
}

export default Header
