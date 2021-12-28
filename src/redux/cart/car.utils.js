export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const cleanItemFromCart = (cartItems, cartItemTodelete) => {
  const deletecartItems = cartItems.filter(
    (cartItem) => cartItem.id !== cartItemTodelete
  );
  return deletecartItems;
};

export const deleteItem = (cartItems, cartItemTodelete) => {
  const deletecartItems = cartItems.map((cartItem) => {
    if (cartItem.id == cartItemTodelete.id) {
      return { ...cartItemTodelete, quantity: cartItem.quantity - 1 };
    } else {
      return cartItem;
    }
  });
  return deletecartItems.filter(cartItem=>cartItem.quantity!==0)
 
};
