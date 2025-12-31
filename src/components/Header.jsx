import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header({ cartCount }) {
  return (
    <header className="app-header">
      <div className="logo">
        <Link to="/">ComponentCorner</Link>
      </div>

      <nav className="nav-menu">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/products" className="nav-link">
          Products
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>

        <Link to="/cart" className="cart-container">
          <span className="cart-icon">🛒</span>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
