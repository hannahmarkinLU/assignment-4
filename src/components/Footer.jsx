import React from "react";
import "./Footer.css";

function Footer({ storeName, address, phone, email, hours }) {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left column: store info */}
        <div className="footer-info">
          <h3 className="footer-store-name">{storeName}</h3>
          <p>{address}</p>
          <p>Phone: {phone}</p>
          <p>Email: {email}</p>
        </div>

        {/* Right column: links */}
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
