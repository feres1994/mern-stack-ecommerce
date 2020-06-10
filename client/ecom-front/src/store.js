import { createStore, applyMiddleware, compose } from 'redux';
import Cookie from 'js-cookie';
import thunk from 'redux-thunk';
import combineReducer from './reducers';

const cartItems = Cookie.getJSON('cartItems') || [];
const initialState = { cart: { cartItems } };
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
