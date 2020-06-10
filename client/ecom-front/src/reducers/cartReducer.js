import { ADD_PRODUCT_TO_CART } from '../actions/types';
const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      const item = action.payload;
      const product = state.cartItems.find((x) => x.id === product.id);
      if (product) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id === product.id ? product : x
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    default:
      return state;
  }
};

export default cartReducer;
