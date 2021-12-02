import React from "react";
import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const CartIcon = ({ toggleCartHidden, countItems }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{countItems}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => {  
  let countItems=state.cart.cartItems.reduce((accumulative_quantity, cartItem) => accumulative_quantity  + cartItem.quantity, 0)
  return{
    countItems
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
