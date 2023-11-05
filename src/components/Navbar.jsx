import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">
          <img
            className="logo-img"
            src={logo}
            alt="logo"
            height="90px"
            width="120px"
          />
        </div>
        <div className="search">
          <div className="search-bar">
            <input type="text" placeholder="Search place" />
          </div>
          <div className="search-submit">
            <button type="submit">Submit</button>
          </div>
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
