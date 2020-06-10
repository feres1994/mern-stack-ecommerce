import Axios from 'axios';
import { ADD_PRODUCT_TO_CART } from './types';

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
        quantity,
      },
    });
  } catch (error) {}
};