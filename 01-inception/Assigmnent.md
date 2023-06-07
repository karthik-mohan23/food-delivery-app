1.  What is Emmet ?

        Emmet is a time-saving tool that helps developers write HTML and CSS code more efficiently by providing shortcuts and abbreviations that expand into full code blocks.

        It's widely used in various text editors and IDEs to boost productivity and streamline web development workflows.

        So, while Emmet can be a valuable tool for rapidly generating HTML and CSS code, it's not specifically designed for generating or assisting with JavaScript code.

2.  Difference between library and Framework?

                                                Library

        Well consider this example of building a house. You can think of library as a pre-made blocks that you can use to build your house.

        Each block has a specific purpose and you can pick and choose which blocks you need and use them to create your house.

        The block are like pieces of code that perform specific tasks, and the library collects them all in one place for you to use them.

        It takes minimum effort to use a library in our app.

                                                Framework

        On the other hand, a framework is like a blueprint or a set of instructions for building the house. It provides you with a structure and a plan to follow.

        The framework tells you where to put each block and how to connect them together.

        A framework guides you to organize and build your project.

3.  What is CDN? Why do we use it?

         A CDN(Content Delivery Network) is like a magical transporters spread out all over the world.

        When you have a website or an app with lots of pictures, videos, or other things that people need to see, the CDN helps deliver them quickly and easily to people who want to see them.

        And how does CDN achieve this?

        So, instead of storing all the pictures and videos on just one computer or server, the CDn makes copies of them and puts them on many different computers/servers in different places around the world.

        These computers are the magical transporters that can quickly send the pictures and videos to people who want them to see them.

        So, when someone wants to look at your website or your app, the CDN helps find the closest computer/server to them that has a copy of the pictures and videos.

        This way, the pictures and videos can be sent to them really fast because they don't have to travel long distances.

        The CDN also helps when there are lots of people trying to look at the same website or use the same app at once. It can handle all the requests and make sure everyone gets the pictures and videos quickly without the website or app getting slow or crashing.

        While pictures and videos are common types of content that CDNs handle, they can deliver many other types of content as well. CDNs are designed to efficiently deliver any kind of digital content, such as web pages, HTML files, CSS stylesheets, JavaScript code, audio files, software updates, and more.

        CDNs are especially useful for delivering large files or content that is accessed by many people across different locations. By storing copies of the content on servers distributed around the world, CDNs can reduce the time it takes for users to access the content, regardless of their geographical location.

4.  Why is React known as React ?

        React is known as React because it "reacts" to changes in data and updates the user interface accordingly.

        React is really good at figuring out what parts of the UI need to be changed when the data changes.

        It only updates the specific parts that need to be updated. This makes React really efficient and fast.

5.  What is cross-origin in the script tag?

        CORS stands for Cross-Origin Resource Sharing.

    Web pages can only request information or resources from other pages that are in the same "room" or server. They can't freely access or communicate with pages from different domains or origins without explicit permission. This helps keep the web a safer place for users.

        But sometimes, you want to share resources between domains. That's where CORS comes in.

        CORS is a way for web pages on one domain to ask for permission to access resources on another domain. It's a security mechanism that allows servers to control who can access their resources. The server can specify which other domains are allowed to access its resources and what kind of interactions are allowed.

        So, in simple words, CORS is like a permission system that lets web pages ask for and get approval to interact with resources on different domains. It allows servers to decide who can access their resources and makes sure everything is done safely and securely.

        CORS is a mechanism that enables web pages on one domain to request access to resources on another domain, with the server controlling and granting permission for such cross-origin interactions.

6.  What is the difference between React and ReactDOM ?

        React and ReactDOM are both libraries written in JavaScript, and they are implemented as objects that provide specific functionality for building user interfaces.

        React is an object that provides a set of tools and functions for managing the structure, behavior, and state of user interfaces. It allows you to define reusable components, handle events, and update the UI efficiently.

        ReactDOM, on the other hand, is an object specifically designed to interact with the Document Object Model (DOM), which represents the structure of a web page. ReactDOM provides methods that allow you to render React components into the DOM, update them, and handle events.

        So, while React and ReactDOM are objects with their own unique functionality, they work together to enable the creation and rendering of dynamic user interfaces in web applications.

7.  What is the difference between react.development.js and react.production.js files via CDN ?

        The react.development.js file is designed to help developers during the development process. This file contains extra information, helpful error messages, and additional features that assist in debugging and identifying potential issues in the code. It's larger in size because it includes these development-specific features.

        On the other hand, the react.production.js file is optimized for performance and efficiency when the website or app is running in a production environment. This file is smaller in size because it doesn't include the extra development-related features and messages. It's meant to be used when the code is ready to be deployed and used by users.

        During development, the development version helps with troubleshooting and identifying issues, while in production, the smaller and optimized production version is used to ensure a faster and more efficient experience for the users of the website or app.

8.  What are async and defer?

        async allows the script to be downloaded and executed immediately, independently of the HTML parsing process. It can lead to scripts executing out of order.

        defer allows the script to be downloaded while parsing the HTML, but it waits to execute the script until the HTML parsing is complete, preserving the intended order of execution.

        Both async and defer are attributes used when including external JavaScript files in HTML, and they affect how and when the scripts are executed by the browser.
