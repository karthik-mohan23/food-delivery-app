import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <header>
    <nav>
      <a href="/" className="logo">
        <h2>BiteWise</h2>
      </a>
      <div>
        <input
          className="search-bar"
          placeholder="Restaurant name"
          type="text"
        />
      </div>
      <ul className="nav-list">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </nav>
  </header>
);

const Body = () => (
  <section className="section">
    <h1>Section</h1>
  </section>
);

const AppLayout = () => (
  <>
    <Header />
    <Body />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
