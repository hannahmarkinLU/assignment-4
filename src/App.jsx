import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";

import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image:
        "https://i5.walmartimages.com/seo/VILINICE-Noise-Cancelling-Headphones-Wireless-Bluetooth-Over-Ear-Headphones-with-Microphone-Black-Q8_b994b99c-835f-42fc-8094-9f6be0f9273b.be59955399cdbd1c25011d4a4251ba9b.jpeg",
      description: "High-quality wireless headphones with noise cancellation.",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      image: "https://i.ebayimg.com/images/g/7RwAAOSwIw9kXEQK/s-l1200.jpg",
      description: "Track your fitness and notifications on the go.",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 49.99,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71kzInVwzgL._AC_UL375_SR375,375_.jpg",
      description: "Portable speaker with powerful sound.",
    },
    {
      id: 4,
      name: "Laptop Stand",
      price: 49.99,
      image: "https://m.media-amazon.com/images/I/81MN9l2nl2S.jpg",
      description: "Ergonomic aluminum stand for laptops and tablets",
    },
    {
      id: 5,
      name: "Webcam",
      price: 129.99,
      image:
        "https://images.seattletimes.com/wp-content/uploads/2018/03/Logitech_C920_Pro_Stream_Webcam_1_164522.jpg?d=780x825",
      description: "4K webcam with auto-focus and noise reduction",
    },
    {
      id: 6,
      name: "Mechanical Keyboard",
      price: 159.99,
      image: "https://m.media-amazon.com/images/I/71g6wzBOsvL.jpg",
      description: "RGB backlit keyboard with custom switches",
    },
  ];

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <BrowserRouter>
      <Header cartCount={cartCount} />

      <Routes>
        <Route
          path="/"
          element={<HomePage products={products} addToCart={addToCart} />}
        />

        <Route
          path="/products"
          element={<ProductsPage products={products} addToCart={addToCart} />}
        />

        <Route
          path="/cart"
          element={<CartPage products={cart} removeFromCart={removeFromCart} />}
        />
      </Routes>

      <Footer
        storeName="Component Corner"
        address="123 Main Street, City, Country"
        phone="(123) 456-7890"
        email="info@componentcorner.com"
        hours="Mon-Fri 9am - 6pm"
      />
    </BrowserRouter>
  );
}

export default App;
