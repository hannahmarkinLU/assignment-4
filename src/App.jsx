import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero
        title="Welcome to Component Corner"
        subtitle="Your one-stop shop for electronics"
        ctaText="Shop Now"
      />
      <div className="app">
        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          <ProductCard
            name="Wireless Headphones" 
            price={99.99} 
            image="https://i5.walmartimages.com/seo/VILINICE-Noise-Cancelling-Headphones-Wireless-Bluetooth-Over-Ear-Headphones-with-Microphone-Black-Q8_b994b99c-835f-42fc-8094-9f6be0f9273b.be59955399cdbd1c25011d4a4251ba9b.jpeg" 
            description="High-quality wireless headphones with noise cancellation." 
          />
          <ProductCard
            name="Smart Watch" 
            price={199.99} 
            image="https://i.ebayimg.com/images/g/7RwAAOSwIw9kXEQK/s-l1200.jpg" 
            description="Track your fitness and notifications on the go." 
          /> 
          <ProductCard
            name="Bluetooth Speaker" 
            price={49.99} 
            image="https://images-na.ssl-images-amazon.com/images/I/71kzInVwzgL._AC_UL375_SR375,375_.jpg" 
            description="Portable speaker with powerful sound." 
          /> 
        </div>
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