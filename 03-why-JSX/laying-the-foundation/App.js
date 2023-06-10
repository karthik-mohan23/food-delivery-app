import React from "react";
import ReactDOM from "react-dom/client";

// using React.createElement
// const elementHeading1 = React.createElement("h1", {}, "Element heading 1");
// console.log(elementHeading1);
// const elementHeading2 = React.createElement("h1", {}, "Element heading 2");
// const elementHeader = React.createElement("div", { title: "header" }, [
//   elementHeading1,
//   elementHeading2,
// ]);

// Using JSX
// const jsxHeading1 = <h1>JSX Heading 1</h1>;
// console.log(jsxHeading1);
// const jsxHeading2 = <h1>JSX Heading 2</h1>;
// const jsxHeader = (
//   <div>
//     {jsxHeading1}
//     {jsxHeading2}
//   </div>
// );

// React.createElement and JSX (<h1>JSX</h1>) returns the same object.

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeader);

// Using Functional Components
// const HeadingComponent1 = () => <h1>Heading 1</h1>;
// const HeadingComponent2 = () => <h1>Heading 2</h1>;
// const HeaderComponent = () => (
//   <div>
//     {HeadingComponent1()}
//     <HeadingComponent2 />
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeaderComponent />);

const Navbar = () => (
  <nav className="navbar">
    <h2>Logo</h2>
    <div className="search-bar">
      <input type="text" />
    </div>
    <h3>user</h3>
  </nav>
);

const Header = () => (
  <header>
    <Navbar />
  </header>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
