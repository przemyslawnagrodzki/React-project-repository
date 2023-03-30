import React from "react"
import styles from './NavBar.module.scss'
import Container from '../Container/Container'

const NavBar = () => {
    return (
        <div className={styles.navbackground}>
            <nav className={styles.navclass}>
                <div><i className="icon fa fa-solid fa-tasks"></i></div>
                <ul className={styles.navlist}>
                    <li><a href="/" className={styles.navlink}>Home</a></li>
                    <li><a href="/favorite" className={styles.navlink}>Favorite</a></li>
                    <li><a href="/about" className={styles.navlink}>About</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default NavBar