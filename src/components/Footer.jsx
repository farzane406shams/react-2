
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        

        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/users">Users</Link>
        </div>

        <div className="footer-section">
         <h3>Customer Service</h3>
          <a href="mailto:support@example.com">Contact Us</a>
          <a href="#shipping">Shipping Information</a>
          <a href="#returns">Returns & Refunds  </a>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <a href="https://www.instagram.com/">Instagram</a>
          <a href="https://www.facebook.com/">Facebook</a>
          <a href="https://www.linkedin.com/">LinkedIn</a>
        </div>

      </div>

      
    </footer>
  );
};

export default Footer;