import React from "react";
import styles from './Favorite.module.scss'
import PageTitle from '../PageTitle/PageTitle'

const Favorite = () => {
    return (
        <main className={styles.main}>
            <PageTitle>FAVORITE</PageTitle>
            <p>Lorem Ipsum.</p>
        </main>
    )
}

export default Favorite