import CartActionTypes from "./carrt.types";
import { addItemToCart, deleteItem, cleanItemFromCart } from "./car.utils";
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
      let addItems = addItemToCart(state.cartItems, action.payload);
      return {
        ...state,
        cartItems: addItems,
      };
    case CartActionTypes.DELETE_ITEM:
      let deleteItems = deleteItem(state.cartItems, action.payload);
      return {
        ...state,
        cartItems: deleteItems,
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      let cartItems = cleanItemFromCart(state.cartItems, action.payload);
      return {
        ...state,
        cartItems,
      };
    case CartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
