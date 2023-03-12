import Column from '../components/Column/Column'

const List = () => {
    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h1 className={styles.title}>Things to do<span>soon</span></h1>
                <p className={styles.description}>Interesting things I want to check out</p>
            </header>
            <section className={styles.columns}>
                <Column title="Books" />
                <Column title="Movies" />
                <Column title="Games" />
            </section>
        </div>
    )
}

export default List