import './ProductCard.css';

function ProductCard({ name, price, image, description }) {
  return (
    <div className="product-card">
      <div className="product-header">
        <img src={image} alt={name} className="product-image" />
        <div className="product-info">
          <h3 className="product-name">{name}</h3>
          <span className="product-price">${price}</span>
        </div>
      </div>
      <p className="product-description">{description}</p>
    </div>
  );
}

export default ProductCard;