import React from "react";
import ProductCard from "../components/ProductCard";

function ProductsPage({ products, addToCart }) {
  return (
    <main className="app">
      <h2 className="section-title">All Products</h2>

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
  );
}

export default ProductsPage;
