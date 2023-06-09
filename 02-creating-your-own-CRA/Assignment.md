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

7. What is Hot Module Replacement?

   Hot Module Replacement (HMR) is a technique in programming that lets developers change their code while the program is running. It's like having a magical coloring book where you can modify one part of the picture without erasing the rest. With HMR, programmers can add features, fix bugs, or improve their program without stopping and restarting it. It saves time and makes development smoother by only updating the specific parts that have changed. HMR is a handy tool that allows programmers to see the effects of their changes immediately, just like modifying a picture without starting over each time.

8.List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.

a. Dev server
Parcel’s builtin dev server is automatically started when you run the default parcel command, which is a shortcut for parcel serve. By default, it starts a server at http://localhost:1234. If port 1234 is already in use, then a fallback port will be used. After Parcel starts, the location where the dev server is listening will be printed to the terminal.

b.Hot module replacement

c.Image optimization
Parcel makes your images smaller without losing their quality by using special tricks that remove unnecessary details. It does this by removing unnecessary information from the picture, like hidden details that our eyes can't really see. This makes your website load faster and provides a better experience for the people who visit it.

d.Makes your code compatible for older versions of browsers.
Parcel does this by using special tools and techniques called transpiling and polyfilling. Transpiling converts your modern code into an older version that browsers can understand. Polyfilling provides extra bits of code that older browsers may be missing, so they can still work with your application.

e.Supports to use HTTPS during development.

9.What is .gitignore? What should we add and not add into it?

It tells Git which files and folders to ignore, meaning they won't be tracked or included in your project's history.

These typically includes things like temporary files, compiled code, or sensitive information like passwords. Adding these files to .gitignore prevents them from cluttering your project's history or accidentally being shared with others. You should include the "node_modules" folder in the .gitignore file prevents Git from tracking and including all those dependencies in your repository. This is important because the dependencies can be easily installed again based on the package.json or yarn.lock file.

10.What is the difference between package.json and package-lock.json.

The package.json file lists all the necessary ingredients (or dependencies) your project needs to work. It includes the names of the dependencies and their versions. It's like a shopping list that tells you what items you need to buy.

Now, imagine you go to the store and buy all the ingredients on your shopping list. When you bring them home, you put them in your kitchen cabinet. The package-lock.json file is like a detailed record of exactly what ingredients you bought and put in your cabinet.

The package-lock.json file ensures that every time someone works on your project, they use the exact same versions of the dependencies you initially installed. It's like having a precise inventory of the ingredients you purchased so that others can follow the recipe exactly as you did.

In simpler terms, package.json is like a recipe that lists the dependencies your project needs, while package-lock.json is like a record of the exact versions of those dependencies that you bought and put in your cabinet. Both files are important for keeping everything consistent and making sure your project works the same way for everyone.

Why do we need 2 package-lock.json files ??

The "package-lock.json" file is generated by the package manager when you install or update dependencies in your project. Its purpose is to keep track of the exact versions of the packages and their dependencies that are installed.

The first "package-lock.json" file is located in the root directory of your project. It is the main file that records the top-level dependencies required by your React application. This file ensures that all developers working on the project use the same versions of these dependencies.

The second "package-lock.json" file is located inside the "node_modules" folder. This folder contains all the installed packages and their nested dependencies. The "package-lock.json" file within the "node_modules" folder specifies the exact versions and dependency tree for each installed package. It helps ensure that the correct versions and dependencies are installed consistently across different machines.

In summary, the "package-lock.json" file in the root directory keeps track of the top-level dependencies, while the one inside the "node_modules" folder provides detailed information about the installed packages and their dependencies. Both files are important for maintaining consistency and ensuring that everyone working on the project has the same versions of the dependencies.

So what will happen if any dependency our app updates in the future ??

When a dependency in your app updates in the future, the package.json file will be updated, not the package-lock.json file.

Think of the package.json file as the "recipe book" for your project. It lists all the dependencies your app needs and their required versions. When you want to update a specific dependency to a newer version, you manually change the version number in the package.json file.

On the other hand, the package-lock.json file acts like a "shopping receipt" that keeps track of the exact versions of the dependencies that were installed based on the package.json file. It ensures that every time you or someone else runs the package manager's installation command (e.g., npm install or yarn install), the same versions of the dependencies are installed consistently.

So, to update a dependency, you would edit the package.json file by changing the version number of that specific dependency to the desired newer version. Then, when you or others run the package manager's installation command, it will use the updated information in the package.json file to install the newer version of the dependency.

In summary, the package.json file is where you specify the desired versions of your dependencies and update them when needed. The package-lock.json file is automatically generated and updated by the package manager based on the package.json file, ensuring consistent installations but not directly involved in updating dependencies.

11.Why should I not modify package-lock.json?

You should not modify the package-lock.json file directly because it is automatically generated and maintained by the package manager (e.g., npm or Yarn) based on the dependencies listed in the package.json file.

Instead of modifying the package-lock.json file directly, you should update your dependencies by editing the package.json file and running the appropriate package manager commands. This way, the package-lock.json file will be automatically updated to reflect the changes accurately, maintaining consistency and reproducibility in your project.

12.What is node_modules ? Is it a good idea to push that on git?

The "node_modules" directory is a folder that contains all the dependencies (third-party libraries and modules) when you use a package manager like npm or Yarn to install dependencies, they are stored in the "node_modules" folder.

No. It is foolish if you push node_modules on git. It is because by including the "package.json" file, others can easily set up the project with the necessary dependencies.

13.What is the dist folder?

The "dist" folder is created as part of the build process, where tools like bundlers or compilers take your source code and transform it into a version that is optimized for production. This optimized version typically has smaller file sizes, removes unnecessary code, combines files, and may perform other optimizations to improve performance.

The "dist" folder usually contains files like HTML, CSS, JavaScript, images, and any other assets needed to run your application. It represents the final deliverable version that can be deployed to a web server or distributed to users.

14.What is browserlists?

Browserlist is a configuration file or entry in the package.json file that specifies the target browsers or environments for which your web application should be compatible. It helps tools like bundlers, compilers, and autoprefixers understand which features and syntaxes need to be supported to ensure proper functionality and appearance in specific browsers or environments.
