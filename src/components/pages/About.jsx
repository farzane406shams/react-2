import { Link } from "react-router-dom";

   
const About = () => {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Our Shop</h1>

        <p>
          More Than Just Shopping
        </p>

        <p className="hero-description">
          Discover quality products, great prices,
          and a better shopping experience.
        </p>
      </section>

      {/* Our Story */}
      <section className="about-story">
        <h2>Our Story</h2>

        <p>
          Welcome to Online Shop! We believe shopping
          should be simple, enjoyable, and convenient.
          Our goal is to bring a variety of products
          together in one place and help you find
          what you need.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="about-features">
        <h2>Why Choose Us?</h2>

        <div className="features-container">

          <div className="feature-card">
            <span className="feature-icon">✦</span>
            <h3>Quality Products</h3>
            <p>
              Explore a variety of products
              for your everyday needs.
            </p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">♡</span>
            <h3>Customer First</h3>
            <p>
              Your satisfaction is important
              to us.
            </p>
          </div>

          <div className="feature-card">
            <span className="feature-icon">✓</span>
            <h3>Easy Shopping</h3>
            <p>
              Enjoy a simple and convenient
              shopping experience.
            </p>
          </div>

        </div>
      </section>

      {/* Shop Now */}
      <section className="about-cta">
        <h2>Ready to Explore?</h2>

        <p>
          Find your favorite products and start shopping!
        </p>

        <Link to="/" className="shop-now-btn">
          Shop Now →
        </Link>
      </section>
  <img src="./assets/photo6.jpg" style={{width: "100%", height: "500px"}} alt="" />
    </div>
  );
};

   
export default About;
