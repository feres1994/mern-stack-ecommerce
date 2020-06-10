import { combineReducers } from 'redux';
import productListReducer from './productsReducer';
import productDetailReducer from './productDetailReducer';
import cartReducer from './cartReducer';

const combineReducer = combineReducers({
  products: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
});

export default combineReducer;
