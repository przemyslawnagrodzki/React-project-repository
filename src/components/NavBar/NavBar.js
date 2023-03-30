import React from "react"
import styles from './NavBar.module.scss'
import Container from '../Container/Container'
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className={styles.navbackground}>
            <nav className={styles.navclass}>
                <div><i className="icon fa fa-solid fa-tasks"></i></div>
                <ul className={styles.navlist}>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : styles.navlink}
                        to="/">Home</NavLink></li>
                    <li ><NavLink className={({ isActive }) => isActive ? styles.linkActive : styles.navlink}
                        to="/favorite">Favorite</NavLink></li>
                    <li ><NavLink className={({ isActive }) => isActive ? styles.linkActive : styles.navlink}
                        to="/about">About</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}
export default NavBar