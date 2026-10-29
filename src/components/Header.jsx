
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        Online Shop
      </Link>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/about">About Us</Link>
      </nav>
    </header>
  );
};

export default Header;
