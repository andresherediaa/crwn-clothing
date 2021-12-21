import CartActionTypes from "./carrt.types";
import { addItemToCart } from "./car.utils";
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      const newState = { ...state };
      return {
        ...state,
        hidden: !newState.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      let addItems=addItemToCart(state.cartItems, action.payload )
      return {
        ...state,
        cartItems: addItems,
      };
    default:
      return state;
  }
};

export default cartReducer;
