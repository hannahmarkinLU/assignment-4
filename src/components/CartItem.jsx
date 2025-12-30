import React from "react";
import "./CartItem.css";

function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <p className="cart-item-name">{item.name}</p>
        <p className="cart-item-price">
            ${item.price.toFixed(2)} × {item.quantity}
        </p>
      </div>

      <button
        className="remove-btn"
        onClick={() => onRemove(item.id)}
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;