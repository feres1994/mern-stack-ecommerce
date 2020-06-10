import Axios from 'axios';
import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from './types';

export const addToCart = (productId, quantity) => async (dispatch) => {
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
  } catch (error) {}
};

export const removeProductFromCart = (productId) => (dispatch) => {
  dispatch({
    type: REMOVE_PRODUCT_FROM_CART,
    payload: productId,
  });
};
