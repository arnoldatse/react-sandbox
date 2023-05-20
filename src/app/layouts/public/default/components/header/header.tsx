import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <nav className="public-top-bar">
    <div className="logo"></div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/auth">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
