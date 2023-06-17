import { useState } from "react";

const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <header>
      <nav>
        <a href="/" className="logo">
          <h2>BiteWise</h2>
        </a>

        <ul className="nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
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
