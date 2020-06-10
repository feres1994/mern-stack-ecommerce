import Axios from 'axios';
import Cookie from 'js-cookie';
import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from './types';

export const addToCart = (productId, quantity) => async (
  dispatch,
  getState
) => {
  const { data } = await Axios.get(
    `http://localhost:5000/products/${productId}`
  );
  try {
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: {
        id: data.id,
        name: data.name,
        image: data.image,
        countInStock: data.countInStock,
        price: data.price,
        quantity: Number(quantity),
      },
    });
    const {
      cart: { cartItems },
    } = getState();
    Cookie.set('cartItems', JSON.stringify(cartItems));
  } catch (error) {}
};

export const removeProductFromCart = (productId) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_PRODUCT_FROM_CART,
    payload: productId,
  });
  const {
    cart: { cartItems },
  } = getState();
  Cookie.set('cartItems', JSON.stringify(cartItems));
};
