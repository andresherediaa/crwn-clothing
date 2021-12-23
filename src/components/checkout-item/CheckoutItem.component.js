import React from "react";
import "./checkoutitem.styles.scss";

const CheckoutItem = ({ item }) => {
  return (
    <div className="itemContainer">
      <div className="itemContainer__img">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <div className="itemContainer__block">{item.name}</div>
      <div className="itemContainer__block">{item.quantity}</div>
      <div className="itemContainer__block">{item.price}</div>
      <div className="itemContainer__block itemContainer__block--close">X</div>
    </div>
  );
};
export default CheckoutItem;
