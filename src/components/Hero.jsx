import "./Hero.css";

function Hero({ title, subtitle, ctaText }) {
  return (
    <section className="hero">
      <img
        src="https://cdn.vectorstock.com/i/500p/49/03/hexagonal-tech-background-vector-60324903.jpg"
        alt="Store banner"
        className="hero-image"
      />

      <div className="hero-overlay">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button>{ctaText}</button>
      </div>
    </section>
  );
}

export default Hero;