// JAVASCRIPT
const jsEntry = document.getElementById("js-root");
const heading = document.createElement("h1");
heading.textContent = "Hello from Javascript";
jsEntry.appendChild(heading);

// REACT
const reactHeading1 = React.createElement("h1", {}, "Hello, this is React");
const reactHeading2 = React.createElement(
  "h1",
  {},
  "Hello, I am a Javascript library"
);
const container = React.createElement("div", { title: "container" }, [
  reactHeading1,
  reactHeading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
// IMP
/* In the code you provided, the reason there is no need for <container /> tags is because the container variable is not a custom React component but a React element created using React.createElement.

In React, there is a distinction between components and elements. Components are the building blocks for creating reusable UI, while elements are the instances of those components or other basic HTML elements.

In your code, the container variable is created as a React element using React.createElement. It represents a <div> element with a title attribute and contains an array of reactHeading1 and reactHeading2 elements.

Since container is not a custom component but an element, it doesn't require opening and closing tags like <container></container>. Instead, it is treated as a single React element that can be rendered and included as part of the larger UI structure.

So, in this case, the container variable represents the React element itself, and there is no need for additional opening and closing tags.*/
