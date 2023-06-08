1. What is NPM?

   NPM is a popular package manager for JavaScript and Node.js applications. It allows developers to easily discover, install, and manage third-party libraries and tools that are published as packages.

   "NPM" is widely recognized and referred to as an abbreviation for "Node Package Manager," even though it doesn't have an official expansion.

   The abbreviation "NPM" has become widely accepted and used within the JavaScript and Node.js community to refer to the package manager. It has been widely adopted due to its association with Node.js and its primary purpose of managing packages for Node.js applications. This is because NPM was the first package manager for Node.js, and it quickly gained popularity within the JavaScript community. As a result, the term "NPM" is now commonly used to refer to package managers in general, regardless of the programming language or platform.

   To get access to NPM, you first need to have Node.js installed on your system. Node.js is a JavaScript runtime that allows you to run JavaScript code outside of a web browser. When you install Node.js, NPM is automatically included as part of the installation.

   Once Node.js is installed, you can access NPM through the command line. NPM provides a command-line interface (CLI) that allows you to interact with the package manager and perform various tasks, such as installing packages, updating packages, and managing dependencies for your projects.

2. What is Parcel/Webpack? Why do we need it?

   Parcel and Webpack are both popular tools used in web development to help bundle and manage code for websites or web applications.

   Imagine you're building a big puzzle made up of many small puzzle pieces. Each puzzle piece represents a different part of your website or web application, like the header, the navigation menu, or the main content. Parcel and Webpack help you put all these puzzle pieces together in the right order so that your website or application works properly.

   Here's how they work:

   Bundling: When you write code for your website, you often divide it into many separate files to keep things organized. Parcel and Webpack take all these files and bundle them together into a single file. It's like collecting all the puzzle pieces and putting them in one big box.

   Dependencies: Sometimes your code relies on other code or libraries to work correctly. For example, you might use a library to handle date and time or to create fancy animations. Parcel and Webpack help manage these dependencies. They make sure that all the puzzle pieces you need are included in the bundle, so your code can use them.

   Optimization: Parcel and Webpack can also help optimize your code. They can remove any unnecessary parts, compress the code to make it smaller, and even split the bundle into smaller pieces to load only what's needed at a given time. This makes your website or application faster and more efficient.

   In simple words, think of Parcel and Webpack as tools that gather all the different pieces of your code puzzle, make sure you have everything you need, and organize them in a way that makes your website or application work smoothly and quickly.

   You need Parcel or Webpack because they make it easier to manage and organize your code. Without them, you would have to manually handle all the puzzle pieces, their dependencies, and optimizations, which can be very time-consuming and error-prone. Parcel and Webpack automate these tasks, saving you a lot of effort and helping your website or application run smoothly.

3. What is .parcel-cache?

   When Parcel builds your project, it analyzes and processes all the files in your project to generate the bundled output. This analysis and processing can take some time, especially for large projects. To speed up subsequent builds, Parcel stores information about your project in the .parcel-cache folder.

   The information stored in .parcel-cache includes things like dependency relationships, metadata, and transformation results. This cache allows Parcel to skip the time-consuming steps of re-parsing and re-analyzing everything from scratch during subsequent builds. Instead, it can use the cached information to determine what has changed and only rebuild the necessary parts.

   By leveraging the cached data, Parcel can significantly reduce the build time, making the development process faster and more efficient. It's one of the reasons why Parcel is known for its fast development mode.

4. What is 'npx' ?

   NPX is a command-line tool that comes bundled with NPM. While NPM is primarily used for installing and managing packages, NPX serves as a tool runner.

   NPX is a tool that is used to execute the packages registered on the npm registry without installing them.

   When you use NPX to run a command or tool, it checks if the required package is installed in your local project's node_modules folder. If the package is not found locally, NPX automatically downloads and installs it temporarily in a temporary directory. It then runs the command using the downloaded package.

   This temporary installation is done on the fly, only for the duration of the command execution. It doesn't clutter your project with permanent installations or dependencies. NPX takes care of handling the installation and execution seamlessly behind the scenes.

   For example, let's say you want to use a tool called "example-tool" for a specific task. If you were to use NPM, you would need to install "example-tool" globally or as a project dependency using npm install -g example-tool or npm install --save example-tool.

   With NPX, you can simply run the command npx example-tool without the need for a prior installation. NPX will check if "example-tool" is available locally, and if not, it will download and run it temporarily. This allows you to use the tool without worrying about permanent installations or managing dependencies.

   NPX provides a convenient way to use packages without the need for explicit installations, making it handy for quick command-line tasks or using tools sporadically.

   So, when you use NPX, it will download the required package if it's not already available locally, and it will be stored temporarily in the NPX cache directory for future usage.

5. What is difference between dependencies vs devDependencies ?

   In simple terms:

   -Dependencies are the essential parts or components needed to build something.
   -DevDependencies are additional parts or components that are not necessary for building something, but they enhance its features or capabilities.

   In the world of software development, when we build computer programs or websites, we need certain "dependencies" or essential pieces of code to make them work. These dependencies could be things like libraries or frameworks that provide specific functions and features.

   On the other hand, "devDependencies" are extra pieces of code or tools that help developers during the development process. They are not necessary for the program to run in its final form, but they make the development easier and more efficient. These devDependencies could be things like testing frameworks or code linters.

6. What is Tree Shaking?

   It means removing unused code from a project to make the final program faster and smaller.

7.
