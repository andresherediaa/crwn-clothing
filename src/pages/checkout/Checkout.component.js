import React from "react";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import CheckoutItem from "../../components/checkout-item/CheckoutItem.component";
import "./checkout.styles.scss";
import {clearItemFromCart} from './.././../redux/cart/cart.actions'

const Checkout = ({ cartItems, total,  clearItemFromCart }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem
          key={cartItem.id}
          item={cartItem}
          clearItemFromCart={()=>clearItemFromCart(cartItem.id)}
        />
      ))}

      <div className="total">TOTAL: {total}</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

const mapDispatchToProps = (dispatch) => ({
   clearItemFromCart: (itemId) => dispatch(clearItemFromCart(itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
