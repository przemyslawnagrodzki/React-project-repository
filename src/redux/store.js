import { createStore } from 'redux';
import shortid from 'shortid';
import InitialState from './InitialState';
import strContains from '../utils/strContains'

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }] };



    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }] };




    case 'UPDATE-SEARCHSTRING':
      return { ...state, searchString: action.payload }
    default:
      return state;
  };
}

const store = createStore(
  reducer,
  InitialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = (state) => state.columns

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });

export const addCard = payload => ({ type: 'ADD_CARD', payload })

export const updateSearchString = payload => ({ type: 'UPDATE_SEARCHSTRING', payload })