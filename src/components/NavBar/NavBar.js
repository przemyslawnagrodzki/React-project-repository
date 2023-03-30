import React from "react"
import styles from './NavBar.module.scss'
import Container from '../Container/Container'

const NavBar = () => {
    return (
        <div className={styles.navbackground}>
            <nav className={styles.navclass}>
                <div><i className="icon fa fa-solid fa-tasks"></i></div>
                <ul className={styles.navlist}>
                    <li a="#href" className={styles.navlink}>Home</li>
                    <li a="#href" className={styles.navlink}>Favorite</li>
                    <li a="#href" className={styles.navlink}>About</li>
                </ul>
            </nav>
        </div>
    )
}
export default NavBar