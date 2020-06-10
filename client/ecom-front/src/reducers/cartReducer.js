import { ADD_PRODUCT_TO_CART } from '../actions/types';
const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      const item = action.payload;
      const product = state.cart.find((x) => x.id === product.id);
      if (product) {
        return {
          ...state,
          cart: state.cart.map((x) => (x.id === product.id ? product : x)),
        };
      } else {
        return { ...state, cart: [...state.cart, item] };
      }
    default:
      return state;
  }
};

export default cartReducer;
