import React from 'react';
import './ProductCard.css';

function ProductCard({ name, price, image, description, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-description">{description}</p>
      <p className="product-price">${price.toFixed(2)}</p>
      <button className="add-to-cart-btn" onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;