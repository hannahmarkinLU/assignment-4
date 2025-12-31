import React from "react";
import CartItem from "../components/CartItem";

function CartPage({ products, removeFromCart }) {
  return (
    <main className="cart">
      <h2 className="section-title">Shopping Cart</h2>

      {products.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty</p>
      ) : (
        <>
          {products.map((item) => (
            <CartItem key={item.id} item={item} onRemove={removeFromCart} />
          ))}
        </>
      )}
    </main>
  );
}

export default CartPage;
