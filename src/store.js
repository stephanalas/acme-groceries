import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const LOAD = 'LOAD';
const UPDATE = 'UPDATE';
const CREATE = 'CREATE';
const SET_VIEW = 'SET_VIEW'


const groceryReducer = (state = [], action) => {
  const { type } = action;
  if (type === LOAD) {
    state =  action.groceries
  } else if (type === UPDATE) {
    state = state.map(grocery => grocery.id === action.grocery.id ? action.grocery  : grocery )
  } else if (type === CREATE) {
    state = [...state, action.grocery]
  }
  return state
  
};

const viewReducer = (state = '', action) => {
  if (action.type === SET_VIEW) {
    state = `${action.view}`;
  }
  return state
}

const reducer = combineReducers({
  groceries: groceryReducer,
  view: viewReducer
})

const middleWare = applyMiddleware(thunkMiddleware);

const store = createStore(reducer, middleWare);

export default store;


