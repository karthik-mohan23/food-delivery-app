import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  { title: "heading1" },
  "React Heading 1"
);
const heading2 = React.createElement(
  "h1",
  { title: "heading1" },
  "React Heading 2"
);
const container = React.createElement("div", { title: "container" }, [
  heading1,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
