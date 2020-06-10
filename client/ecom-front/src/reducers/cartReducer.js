import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
} from '../actions/types';
const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      const item = action.payload;
      const product = state.cartItems.find((x) => x.id === item.id);
      if (product) {
        console.log('shiiiiiiiiit');
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id === product.id ? item : x
          ),
        };
      } else {
        console.log('duuuuuam');
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case REMOVE_PRODUCT_FROM_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter((el) => el.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
