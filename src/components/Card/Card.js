import styles from './Card.module.scss'

const Card = props => {
    return (
        <li className={styles.cards}>{props.title}</li>
    )
}

export default Card;