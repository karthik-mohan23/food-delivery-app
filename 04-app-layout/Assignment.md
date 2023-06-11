1.  Is JSX mandatory for React ?

    No, JSX is not a requirement for using React. Using React without JSX is especially convenient when you don’t want to set up compilation in your build environment.

    Each JSX element is just syntactic sugar for calling React.createElement(component, props, ...children).

2.  Is ES6 mandatory for React ?

    While not mandatory, using ES6 with React is recommended as it offers improved syntax and features that can enhance the development experience.

3.  How can I write comments in JSX ?

    {/_ This is a comment in JSX _/}

4.  What is <React.Fragment></React.Fragment>
    and <></> ?

    <React.Fragment> is a component provided by React that allows you to group elements without creating an additional DOM element. It acts as an invisible wrapper.
    <></> is known as shorthand syntax or fragment shorthand.

5.  What is virtual DOM ?

    The virtual DOM is a concept where an ideal or "virtual" representation of a user interface (UI) is kept in memory. It serves as a lightweight and efficient copy of the real DOM.

6.  What is Reconciliation in React ?

    The algorithm React uses to diff one tree with another to determine which parts need to be changed.

    Here, "diff" refers to the process of comparing two tree structures (virtual DOM trees) to determine the differences between them.The algorithm performs a recursive comparison of the old (previous) virtual DOM tree and the new (updated) virtual DOM tree.

7.  What is React Fiber ?

    React Fiber, introduced in React 16, is a new internal architecture that re-imagines how React performs reconciliation.
    React Fiber improves performance by breaking tasks into smaller pieces called fibers, which allows it to work on different parts of the application without getting stuck on one task. It can pause and resume work as needed, prioritizing important tasks to make the user interface more responsive. This approach helps avoid delays and keeps the application running smoothly.

    Before React Fiber, React used a stack-based approach where it would go through all the components in a single pass, from top to bottom, to update the user interface. This synchronous traversal could sometimes lead to delays and make the user interface less responsive during intensive rendering tasks.

8.  Why we need keys in React ? When do we need keys in React ?

    When rendering a list of elements in React, each element needs a unique identifier to help React determine which elements have changed, been added, or been removed. This enables React to update only the necessary parts of the user interface, avoiding unnecessary re-rendering of unchanged elements.

    Keys are needed in React when rendering lists or collections of elements to facilitate efficient updates, correct reordering, and accurate identification of individual elements. They play a crucial role in maintaining component state and ensuring a smooth user interface.

    The key only has to be unique among its siblings, not globally unique.

    Keys should be stable, predictable, and unique. Unstable keys (like those produced by Math.random()) will cause many component instances and DOM nodes to be unnecessarily recreated, which can cause performance degradation and lost state in child components.

9.  Can we use index as keys in React ?

    Yes, you can use the index of an element in an array as a key in React.It turns out, when nothing is passed React uses the index as key because it is the best guess at the moment. Moreover, it will warn you that it is suboptimal (it says that in a bit confusing words, yes). If you provide it by yourself React just thinks that you know what you are doing.

         why we should'nt use index as keys?

    -Lack of uniqueness: If elements are added, removed, or rearranged, the index-based keys can become inconsistent and lead to incorrect rendering or updates.

    -Poor performance: When using the index as keys, React may have to re-render the entire list even if only one element has changed. This can result in decreased performance, as the fine-grained update optimizations based on unique keys are not utilized effectively.

    -State preservation: React may mistakenly associate the state of one component with another if the indexes change, causing incorrect rendering or loss of state.

10. What is props in React ?

    In React, "props" (short for properties) is a way to pass data from a parent component to a child component.

    Props are like arguments passed to a function.

    They enable component composition and allow for flexible and reusable code.

11. What is Config Driven UI ?

    A Config Driven UI approach means using external configuration files or data structures to control the appearance and behavior of the user interface. It allows for easy customization and updating of the UI without modifying the code directly.

12. What is component composition ?

    Component composition in React is the practice of combining smaller, reusable components to create larger and more complex user interfaces. It promotes reusability, modularity, and separation of concerns, allowing for flexible and scalable UI development.
