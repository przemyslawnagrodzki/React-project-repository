import { createStore } from 'redux';
import shortid from 'shortid';
import initialState from './InitialState';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }] };
    default:
      return state;
  }

  switch (action.type) {
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }] };
    default:
      return state;
  }

  switch (action.type) {
    case 'UPDATE-SEARCHSTRING':
      return {  ...state, searchString: action.payload }
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;