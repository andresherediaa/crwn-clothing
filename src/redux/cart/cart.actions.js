import CartActionTypes from "./carrt.types";
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const clearItemFromCart = (id) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: id,
});

export const deleteItem = (item) => ({
  type: CartActionTypes.DELETE_ITEM,
  payload: item,
});

export const clearCart = ()=>({
  type: CartActionTypes.CLEAR_CART,
})