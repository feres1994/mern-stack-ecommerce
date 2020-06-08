import { combineReducers } from 'redux';
import productListReducer from './productsReducer';

const combineReducer = combineReducers({
  products: productListReducer,
});

export default combineReducer;
