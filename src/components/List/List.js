import Column from '../Column/Column'
import styles from './List.module.scss'
import ColumnForm from '../ColumnForm/ColumnForm'
import { useSelector } from 'react-redux';
import {  getColumnByList } from '../../redux/columnsRedux'
import {getListById} from '../../redux/listsRedux'
import { useParams } from 'react-router';
import SearchForm from '../SearchForm/SearchForm';
import { Navigate } from 'react-router';


const List = () => {
  const { listId } = useParams();

  const columns = useSelector(state => getColumnByList(state, listId));
  const listData = useSelector(state => getListById(state, listId));

  if(!listData) return <Navigate to="/" />
  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>{listData.title}<span>soon!</span></h2>
      </header>
      <p className={styles.description}>Interesting things I want to check out</p>
      <SearchForm></SearchForm>
      <section className={styles.columns}>
        {columns.map((column) => (
          <Column
            key={column.id}
            {...column} />
        ))}
      </section>
      <ColumnForm listId={listId} />
    </div>
  );

}



export default List 