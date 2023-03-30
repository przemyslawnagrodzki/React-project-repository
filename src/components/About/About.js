import React from "react";
import styles from './About.module.scss'
import PageTitle from '../PageTitle/PageTitle'

const About = () => {
    return (
        <main className={styles.main}>
            <PageTitle>ABOUT</PageTitle>
            <p>Lorem ipsum.</p>
        </main>
    )
}

export default About