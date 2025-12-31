import React from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

function HomePage({ products, addToCart }) {
  return (
    <>
      <Hero
        title="Welcome to Component Corner"
        subtitle="Your one-stop shop for electronics"
        ctaText="Shop Now"
      />

      <main className="app">
        <section className="intro">
          <h2>Why Shop With Us?</h2>
          <p>
            At Component Corner, we offer high-quality electronics at
            competitive prices. From everyday essentials to premium tech, we're
            here to help you stay connected, productive, and entertained.
          </p>
        </section>

        <h2 className="section-title">Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
              onAddToCart={() => addToCart(product)}
            />
          ))}
        </div>

        <hr className="section-divider" />
      </main>
    </>
  );
}

export default HomePage;
