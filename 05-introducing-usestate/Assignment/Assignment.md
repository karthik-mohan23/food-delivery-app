1. What is the difference between Named export, Default export and \* as export ?

   Named Export: You can export multiple items from a module by assigning each item a name using the export keyword. These exported items can then be imported individually in other files using their specific names.

   Default Export: A default export allows you to export a single value from a module as the default export. This value is often the main feature or functionality of the module. When importing a default export, you can choose any name for the imported item.

   - as Export: The \* as export syntax allows you to export all items from a module as properties of an object. It creates a namespace object that contains all the exports from the module. This way, you can access the exported items by using dot notation on the imported object.

2. What is the importance of config.js file ?

   A config.js file provides a convenient and organized way to manage your application's configuration settings, promotes code maintainability, and enhances security by keeping sensitive information separate from your main codebase.

3. What are React Hooks ?

   React Hooks are functions that enable you to add state and lifecycle functionality to functional components.

   By using React Hooks, you can write more reusable and modular code, as functional components are typically simpler and easier to understand than class components. Hooks eliminate the need for using class-specific syntax and provide a more functional programming approach to building React applications.

4. Why do we need a useState Hook ?

   The useState Hook in React is used to add and manage state in functional components. It allows you to store and update values that can change over time.

   When the state value changes using the setState function (returned by useState), React knows that the component needs to be re-rendered to reflect the updated state. This helps ensure that your UI is always up to date with the latest state values.

   It simplifies state management, helps keep your UI in sync with changing values, and promotes a more modular and understandable code structure.
