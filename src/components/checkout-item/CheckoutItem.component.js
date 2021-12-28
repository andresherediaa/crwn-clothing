import React from "react";
import "./checkoutitem.styles.scss";
import { addItem, deleteItem  } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const CheckoutItem = ({ item, clearItemFromCart, addItem, deleteItem }) => {
  return (
    <div className="itemContainer">
      <div className="itemContainer__img">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <div className="itemContainer__block">{item.name}</div>

      <div className="arrow" onClick={() => deleteItem(item)}>
        &#10094;
      </div>
      
      <div className="itemContainer__block">{item.quantity}</div>
      <div className="arrow" onClick={() => addItem(item)}>
        &#10095;
      </div>
      <div className="itemContainer__block">{item.price}</div>
      <div
        className="itemContainer__block itemContainer__block--close"
        onClick={() => clearItemFromCart(item.id)}
      >
        X
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (cartItem) => dispatch(addItem(cartItem)),
    deleteItem: (cartItemID) => dispatch(deleteItem(cartItemID)),
  };
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
