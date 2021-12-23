import {createSelector} from 'reselect'

const selectCart=state=> state.cart;
 

export const selectCartItems= createSelector(
     [selectCart],
     (cart)=>cart.cartItems
)

export const selectCartItemsCount=createSelector(
     [selectCartItems],
     (cartItems)=>cartItems.reduce((accumulative_quantity, cartItem) => accumulative_quantity  + cartItem.quantity, 0)
)

export const selectCartHidden=createSelector(
     [selectCart],
     (cart)=>cart.hidden
)

export const selectCartTotal=createSelector(
     [selectCartItems],
     (cartItems)=>cartItems.reduce((accumulative_total, cartItem) => accumulative_total  + cartItem.quantity * cartItem.price, 0)
)