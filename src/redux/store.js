import shortid from 'shortid';
import InitialState from './InitialState';
import { strContains } from '../utils/strContains'
import Column from '../components/Column/Column';
import { createStore, combineReducers } from 'redux';
import listsReducer from './listsRedux'
import columnsReducer from './columnsRedux'
import cardsReducer from './cardsRedux'
import searchStringReducer from './searchStringRedux'

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  InitialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
//selectors








// action creators


