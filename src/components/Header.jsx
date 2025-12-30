import React from "react";
import "./Header.css";

function Header({ cartCount }) {
  return (
    <header className="app-header">
      <div className="logo">ComponentCorner</div>
      <nav className="nav-menu">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">Products</a>
        <a href="#" className="nav-link">About</a>
        <a href="#" className="nav-link">Contact</a>

        <div className="cart-container">
          <span className="cart-icon">🛒</span>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div>
      </nav>
    </header>
  );
}

export default Header;