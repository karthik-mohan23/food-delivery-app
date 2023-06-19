import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <header>
      <nav>
        <Link to="/" className="logo">
          <h2>BiteWise</h2>
        </Link>

        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
        {isLoggedIn ? (
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setLoggedIn(true)}>Login</button>
        )}
      </nav>
    </header>
  );
};
export default Header;
