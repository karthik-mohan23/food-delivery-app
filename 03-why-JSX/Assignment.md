1. What is JSX ?

   JSX (JavaScript XML) is an extension to JavaScript that allows you to write HTML-like code directly within your JavaScript code.

   When your JSX code is compiled, it gets transformed into plain JavaScript code that the browser can understand.

2. Superpowers of JSX ?

   -Easy Integration of JavaScript: You can write JavaScript code directly inside JSX using curly braces ({}) to dynamically generate content, perform calculations, or apply conditional logic.

   -Familiar HTML-like Syntax: It maintains the familiar tags, attributes, and structure of HTML, making it intuitive and readable.

   -Component-based Development: With JSX, you can create custom components and nest them within each other to create a hierarchy of reusable building blocks.

   -JavaScript Tooling Support: JSX is widely supported by JavaScript tooling and development environments. It benefits from the rich ecosystem of JavaScript libraries, frameworks, and tools. Popular tools like Babel and Webpack can transpile JSX into plain JavaScript code that can be understood by the browser.

   -Improved Performance: JSX allows React to efficiently update and render the user interface by using a virtual DOM.

   -Enhanced Error Checking: JSX code is checked for errors during the compilation process.

   -Protection against Cross-Site Scripting (XSS): React utilizes a technique called "JSX escaping" by default, which helps protect against cross-site scripting attacks. It automatically sanitizes user input and renders it as text, preventing malicious scripts from being executed.

3. Role of type attribute in script tag ? What options can I use there ?

   It helps the browser understand the type of script being used and how to handle and execute it.

   JavaScript: To specify that the content inside the "script" tag is JavaScript, you can use type="text/javascript". This was the default value for the type attribute in older versions of HTML.

   ECMAScript: With the standardization of JavaScript under the ECMAScript specification, you can use type="text/ecmascript" or type="application/ecmascript" to indicate that the content is ECMAScript-compatible.

   Module Scripts: If you are using JavaScript modules, you can use type="module". This tells the browser that the script contains ECMAScript modules and should be treated accordingly. Module scripts have a separate scope and can use features like import and export.

   JSON: If you are embedding JSON data within a "script" tag, you can use type="application/json". This is useful when you want to embed structured data in your HTML and access it using JavaScript.

4.{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>}

    -{TitleComponent}: This represents the TitleComponent as a JavaScript expression or value. The curly braces {} in JSX allow you to embed JavaScript expressions or values within the JSX code. So, {TitleComponent} means you are referencing the TitleComponent variable or value.

    -{<TitleComponent/>} as a way to render the component without any children

    -{<TitleComponent></TitleComponent>} as a way to render the component with additional child elements.
