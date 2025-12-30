import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import CartItem from './components/CartItem';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

function App() {
  // Products data array
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image: "https://i5.walmartimages.com/seo/VILINICE-Noise-Cancelling-Headphones-Wireless-Bluetooth-Over-Ear-Headphones-with-Microphone-Black-Q8_b994b99c-835f-42fc-8094-9f6be0f9273b.be59955399cdbd1c25011d4a4251ba9b.jpeg",
      description: "High-quality wireless headphones with noise cancellation."
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      image: "https://i.ebayimg.com/images/g/7RwAAOSwIw9kXEQK/s-l1200.jpg",
      description: "Track your fitness and notifications on the go."
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 49.99,
      image: "https://images-na.ssl-images-amazon.com/images/I/71kzInVwzgL._AC_UL375_SR375,375_.jpg",
      description: "Portable speaker with powerful sound."
    },
    { 
    id: 4, 
    name: "Laptop Stand", 
    price: 49.99, 
    image: "https://m.media-amazon.com/images/I/81MN9l2nl2S.jpg",
    description: "Ergonomic aluminum stand for laptops and tablets"
  },
  { 
    id: 5, 
    name: "Webcam", 
    price: 129.99, 
    image: "https://images.seattletimes.com/wp-content/uploads/2018/03/Logitech_C920_Pro_Stream_Webcam_1_164522.jpg?d=780x825",
    description: "4K webcam with auto-focus and noise reduction"
  },
  { 
    id: 6, 
    name: "Mechanical Keyboard", 
    price: 159.99, 
    image: "https://m.media-amazon.com/images/I/71g6wzBOsvL.jpg",
    description: "RGB backlit keyboard with custom switches"
  }
];

  // initialize cart state
  const [cart, setCart] = useState([]);

  // function to add a product to the cart (AI assistance for adding quantities)
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);

      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // function to remove a product from the cart
  const removeFromCart = (id) => {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      .filter(item => item.quantity > 0)
    );
  };

  // function to count cart items for badge
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // function to calculate cart total
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header cartCount={cartCount} />
      <Hero
        title="Welcome to Component Corner"
        subtitle="Your one-stop shop for electronics"
        ctaText="Shop Now"
      />
      <div className="app">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          {products.map(product => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
              onAddToCart={() => addToCart(product)} // pass function to ProductCard
            />
          ))}
        </div>
        <hr className="section-divider" />
      </div>
      <div className="cart">
        <h2 className="section-title">Shopping Cart</h2>

        {cart.length === 0 ? (
          <p className="empty-cart-message">
            Your cart is empty
          </p>
        ) : (
          <>
            {cart.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={removeFromCart}
              />
            ))}
          </>
        )}
      </div>
      <Footer
        storeName="Component Corner"
        address="123 Main Street, City, Country"
        phone="(123) 456-7890"
        email="info@componentcorner.com"
        hours="Mon-Fri 9am - 6pm"
      />
    </>
  );
}

export default App;