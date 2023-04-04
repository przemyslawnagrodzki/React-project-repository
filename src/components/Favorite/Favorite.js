import React from "react";
import styles from './Favorite.module.scss'
import PageTitle from '../PageTitle/PageTitle'
import Card from '../Card/Card'
import { useSelector } from "react-redux";
import { getFavoriteCards } from "../../redux/cardsRedux";

const Favorite = () => {
    const favoriteCards = useSelector(getFavoriteCards)
    if(favoriteCards.length === 0){
        return(
            <main className={styles.main}>
            <PageTitle>FAVORITE</PageTitle>
            <p>No cards...</p>
            </main>
        )
    }
    else
    return (
        <main className={styles.main}>
            <PageTitle>FAVORITE</PageTitle>
            <div className={styles.column}>
                <ul className={styles.card}>
                {favoriteCards.map(card => <Card key={card.id} {...card} isFavorite={card.isFavorite}/>)}
                </ul>
            </div>
        </main>
    )
}

export default Favorite