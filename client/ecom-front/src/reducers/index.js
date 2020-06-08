import { combineReducers } from 'redux';
import productListReducer from './productsReducer';
import productDetailReducer from './productDetailReducer';

const combineReducer = combineReducers({
  products: productListReducer,
  productDetail: productDetailReducer,
});

export default combineReducer;
