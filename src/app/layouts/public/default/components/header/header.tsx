import { Link } from "react-router-dom";
import logo from "assets/pictures/logo.png";
import "./header.css";

const Header = () => {
  return (
    <nav className="public-top-bar">
    <div className="logo">
      <img src={logo} width="20px" alt="" />
    </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/auth">Logging in</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
