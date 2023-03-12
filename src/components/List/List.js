import Column from '../Column/Column'
import styles from './List.module.scss'
import { useState } from 'react';
import { useEffect } from 'react'
import shortid from 'shortid';
import ColumnForm from '../ColumnForm/ColumnForm'

const List = () => {
    const [columns, setColumns] = useState([
        { id: 1, title: 'Books', icon: 'book' },
        { id: 2, title: 'Movies', icon: 'film' },
        { id: 3, title: 'Games', icon: 'gamepad' }
    ]);

    useEffect(() => {

        setTimeout(() => {
            setColumns([...columns, { id: 4, title: 'Test column' }]);
        }, 2000);

    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        setColumns([...columns, { id: shortId, title: value }]);
        setValue('')
    };

    
}

    <section className={styles.columns}>
        {columns.map(column => <Column key={column.id} title={column.title} icon={column.icon} />)}
    </section>
        <ColumnForm handleSubmit={handleSubmit} />



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

const List = () => {
    

        const [columns, setColumns] = useState([
            { id: 1, title: 'Books', icon: 'book' },
            { id: 2, title: 'Movies', icon: 'film' },
            { id: 3, title: 'Games', icon: 'gamepad' }
        ]);

        setTimeout(() => {
            setColumns([...columns, { id: 4, title: 'Test column' }]);
        }, 2000);

    };

    export default List