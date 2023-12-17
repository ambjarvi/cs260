GitHub
-git pull
-git commit
COMMIT regularly, like every hour if possible

# Midterm Review

1. **In the following code, what does the link element do?**
   - In HTML, the `<link>` element is used to define relationships between the current document and external resources. Commonly, it is used to link to external stylesheets, allowing you to control the presentation (styling) of a web page by specifying the CSS file to be applied to the current HTML document.
   - Has rel and href subcategories
   - Rel: specifies relationship between current document and linked resource. (ex: stylesheet, icon, alternate)
   - Href: specifies URL of the external resource to be linked. For stylesheets, typically points to a .css file


2. **In the following code, what does a div tag do?**
   - The `<div>` element is a non-semantic container in HTML. It does not carry any specific meaning or define content structure. Instead, it is used for layout and organization purposes. Web developers use `<div>` elements to group, style, and structure content within a web page. It's often used to create divisions or sections in the layout of a page, making it easier to apply CSS styles or JavaScript functionality.

3. **In the following code, what is the difference between the #title and .grid selector?**
   - `#title` and `.grid` are both CSS selectors used to target HTML elements, but they select elements based on different criteria.
     - `#title` is an ID selector. It selects an HTML element with a specific `id` attribute value. IDs must be unique within a page, so it selects a single element with the specified ID.
     - `.grid` is a class selector. It selects all HTML elements with a specific `class` attribute value. Multiple elements can share the same class, so it can select multiple elements.

4. **In the following code, what is the difference between padding and margin?**
   - In CSS, both padding and margin are properties that define spacing around an element, but they serve different purposes:
     - **Padding:** Padding is the space between an element's content and its border. It affects the area inside the element. Padding is used to create space around the content.
     - **Margin:** Margin is the space outside an element, which affects its positioning relative to other elements. It defines the space between the element's border and the adjacent elements. Margins are used to control the layout and spacing between elements.

5. **Given this HTML and this CSS how will the images be displayed using flex?**
   - Display: flex; is used to establish a flex container, which in turn enables the use of the Flexbox layout model for the elements within that contianer
   - Transforms that element into a container for Flexbox layout, which means that direct children of the container (flex items) will be controlled using Flexbox rules
   - (by default) arranges child elements horizontally within flex container, making them flow from left to right in the order they appear in the HTML source
   - Child elements within container are automatically distributed along main axis with equal space between them
   - Flex items can grow and shrink dynamically based on available space, making them expand or contract to fill the container’s width
   - Provides powerful alignment and distribution control for both the main axis (horizontal) and cross-axis (vertical). Can use properties like ‘justify-content’ and ‘align-items’ to control alignment
   - Elements within flex can be given different levels of flexibility, can you ‘flex’ property to assign a specific weight to each item, which determines how they share available space. 


6. **What does the following padding CSS do?**
   - Used to define space between content of an element and its border.
   - Padding property can be set in various ways
   - **Shorthand property: you can set padding for all four sides using a single value or series of values**
   - Padding: 10px; //sets 10 px padding on all sides
   - Padding: 10px 20px; //sets 10px on top and bottom, 20 px of left and right
   - Padding: 10px 20px 15px 5px //sets padding (in order) top, right, bottom, left.
   - **Individual properties: set padding for each side separately using individual properties**
   - Padding-top: 10px;
   - Padding-right: 20px
   - Padding-bottom: 15px;
   - Padding-left: 5px;


7. **What does the following code using arrow syntax function declaration do?**
   A concise way to declare functions in JavaScript. 
Const functionName = (parameters) => {
	//function body
//return statement (if needed)
};


8. **What does the following code using map with an array output?**
   - In javascript, you can use the map() method to transform the elements of an array and produce a new array with the modified values. Here’s how to use map() to create an array output


// Sample input array
const numbers = [1, 2, 3, 4, 5];


// Using the map() method to square each element and create a new array
const squaredNumbers = numbers.map((number) => number * number);


// Logging the squared numbers
console.log(squaredNumbers);


9. **What does the following code output using getElementByID and addEventListener?**
   - getElementByID: used to select HTML element with ID 
document.getElementById(“idFromHTML”);
addEventListener: use to attach a click event listener to the button. When button is clicked, the function inside ‘addEventListener’ is executed
Const button = document.getElementById(“myButton”);
button.addEventListener(“click”, function() {
	alert(“Button clicked!”);
			});

10. **What does the following line of JavaScript do using a # selector?**
    - Imagine this line of JavaScript:
 javascript const heading = document.querySelector("#mainHeading");
This code selects the HTML element with the ID "mainHeading." 
It retrieves the element, allowing you to manipulate or access its properties in your JavaScript code.


11. **Which of the following are true? (mark all that are true about the DOM)**
    - true statements about the Document Object Model (DOM):


 **The DOM is a Programming Interface for HTML and XML Documents:**
   - The DOM represents a structured way to access and manipulate the content and structure of HTML and XML documents. It provides a programmatic interface for web developers to interact with web pages.

**The DOM Represents the Document as a Tree Structure:**
   - The DOM represents an HTML or XML document as a tree structure, where each element, attribute, and piece of text is a node in the tree. This hierarchical structure allows developers to navigate and manipulate the content.

**The DOM Provides a Way to Access and Manipulate Elements:**
   - With the DOM, you can select and modify elements within an HTML document. This includes accessing elements by their IDs, classes, tags, or other attributes, and changing their content, attributes, or styles.

**The DOM Can Be Manipulated Using JavaScript:**
   - JavaScript is commonly used to interact with the DOM. You can use JavaScript to select elements, add, delete, or modify content, and respond to user interactions on a web page.

**The DOM Allows Event Handling:**
   - The DOM enables event handling, allowing you to respond to user actions like clicks, mouse movements, and keyboard inputs. Event listeners can be attached to elements to trigger specific actions when events occur.

**The DOM Is Affected by HTML and CSS Changes:**
   - The structure and content of the DOM are dynamically updated when the HTML or CSS of a web page is modified. Changes to the source code, such as adding or removing elements, are reflected in the DOM.

**The DOM Is Used for Creating Dynamic Web Applications:**
   - The DOM is a crucial component for building dynamic and interactive web applications. JavaScript libraries and frameworks like React, Angular, and Vue.js heavily rely on the DOM to update the user interface in real-time.

**The DOM Is Cross-Browser Compatible:**
   - The DOM is designed to be cross-browser compatible, meaning it can be used in various web browsers. Web developers can write code that works consistently across different browser environments.

**The DOM Can Be Inspected and Modified Using Browser Developer Tools:**
   - Modern web browsers provide developer tools that allow you to inspect and manipulate the DOM of a web page in real-time. This is extremely helpful for debugging and testing web applications.

**The DOM Facilitates Separation of Structure and Presentation:**
    - The DOM enforces a separation of content (structure) from presentation (styles). HTML defines the content and structure, while CSS is responsible for the presentation. This separation allows for more flexible and maintainable web development.

**The DOM Can Be Used with Both HTML and XML Documents:**
    - While the primary use case is with HTML documents, the DOM can also be used with XML documents. It provides a consistent way to work with structured data in XML.

**The DOM Can Be Generated and Manipulated Server-Side:**
    - In addition to client-side JavaScript, server-side technologies like Node.js and various server-side scripting languages provide the ability to generate and manipulate the DOM on the server before delivering web pages to clients.

12. **By default, the HTML span element has a default CSS display property value of:**
    - By default, the HTML `<span>` element has a default CSS display property value of `inline`. This means that it is displayed inline with the surrounding content, allowing other elements to appear on the same line.

13. **How would you use CSS to change all the div elements to have a background color of red?**
    - To change the background color of all `<div>` elements to red using CSS, you can apply the following style rule:
      ```css
      div {
          background-color: red;
      }
      ```
      This rule selects all `<div>` elements and sets their background color to red.

14. **How would you display an image with a hyperlink in HTML?**
    - To display an image with a hyperlink in HTML, you can use the `<a>` (anchor) element to create the hyperlink and include an `<img>` element within it. Here's an example:
      ```html
      <a href="https://example.com">
          <img src="image.jpg" alt="Description of the image">
      </a>
      ```
      This code creates a clickable image that, when clicked, navigates to the specified URL.

15. **In the CSS box model, what is the ordering of the box layers starting at the inside and working out?**
    - In the CSS box model, the ordering of the box layers, starting from the inside and working out, is as follows:
      - Content
      - Padding
      - Border
      - Margin
      This sequence represents the layers of an HTML element from the inside (content) to the outside (margin).

16. **Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?**
    - You can use CSS to select specific text within an element using the ::first-line pseudo-element. For example:
p::first-line {
  color: green;
}

17. **What will the following code output when executed using a for loop and console.log?**
    -

18. **How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?**
    - To select an element with the ID "byu" and change the text color to green using JavaScript, you can use the following code:
      ```javascript
      const byuElement = document.getElementById("byu");
      if (byuElement) {
          byuElement.style.color = "green";
      }
      ```
      This code first selects the element with the ID "byu" using `getElementById` and then changes its text color to green by setting the `style.color` property.

19. **What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?**
    - The opening HTML tags for the elements you mentioned are:
      - Paragraph: `<p>`
      - Ordered List: `<ol>`
      - Unordered List: `<ul>`
      - Second Level Heading: `<h2>`
      - First Level Heading: `<h1>`
      - Third Level Heading: `<h3>`

20. **How do you declare the document type to be html?**
    - To declare the document type as HTML in an HTML document, you include the following document type declaration at the very beginning of your HTML file:
      ```html
      <!DOCTYPE html>
      ```
      This declaration informs the browser that the document is an HTML5 document.

21. **What is valid JavaScript syntax for if, else, for, while, switch statements?**
    - Valid JavaScript syntax for control structures is as follows:
      - `if` statement:
        ```javascript
        if (condition) {
            // Code to execute if the condition is true
        }
        ```
      - `else` statement (used with `if`):
        ```javascript
        if (condition) {
            // Code to execute if the condition is true
        } else {
            // Code to execute if the condition is false
        }
        ```
      - `for` loop:
        ```javascript
        for (initialization; condition; increment) {
            // Code to execute in each iteration
        }
        ```
      - `while` loop:
        ```javascript
        while (condition) {
            // Code to execute as long as the condition is true
        }
        ```
      - `switch` statement:
        ```javascript
        switch (expression) {
            case value1:
                // Code to execute if expression equals value1
                break;
            case value2:
                // Code to execute if expression equals value2
                break;
            default:
                // Code to execute if no case matches
        }
        ```

22. **What is the correct syntax for creating a JavaScript object?**
    - The correct syntax for creating a JavaScript object is to use object literal notation. Here's an example:
      ```javascript
      const person = {
          name: "John",
          age: 30,
          city: "New York"
      };
      ```
      This code creates an object named `person` with properties `name`, `age`, and `city`.

      Object Literal: const obj = {}
Constructor Function: const obj = new Object()

23. **Is it possible to add new properties to JavaScript objects?**
    - Yes, it is possible to add new properties to JavaScript objects dynamically. You can add new properties by simply assigning values to them. For example:
      ```javascript (object.newProperty = "new value";)
      person.gender = "Male";
      ```
      This adds a new property named `gender` to the `person` object.

24. **If you want to include JavaScript on an HTML page, which tag do you use?**
    - To include JavaScript on an HTML page, you use the `<script>` tag. You can place it in the `<head>` or `<body>` section of the HTML document. Here's an example:
      ```html
      <script>
          // JavaScript code goes here
      </script>
      ```

25. **Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?**
   - To change the text "animal" to "crow" and leave "fish" unaffected in the following HTML:
     ```html
     <p id="myText">animal fish</p>
     ```
     You can use this JavaScript:
     ```javascript
     const textElement = document.getElementById("myText");
     textElement.innerHTML = textElement.innerHTML.replace("animal", "crow");
     ```

26. **Which of the following correctly describes JSON?**
   - JSON (JavaScript Object Notation) is a lightweight data interchange format used for data storage and exchange between a server and a client, or between different systems. It is a text-based, human-readable format and closely resembles JavaScript object literal notation. JSON is used for configuration files, data transmission, and more.

27. **What does the console command `chmod`, `pwd`, `cd`, `ls`, `vim`, `nano`, `mkdir`, `mv`, `rm`, `man`, `ssh`, `ps`, `wget`, `sudo` do?**
   - `chmod`: Changes file permissions.
   - `pwd`: Prints the current working directory.
   - `cd`: Changes the current directory.
   - `ls`: Lists the contents of a directory.
   - `vim` and `nano`: Text editors for creating and editing files in the console.
   - `mkdir`: Creates a new directory.
   - `mv`: Moves or renames files and directories.
   - `rm`: Removes files or directories.
   - `man`: Displays manual pages for commands.
   - `ssh`: Initiates a secure shell session for remote login.
   - `ps`: Lists running processes.
   - `wget`: Downloads files from the web.
   - `sudo`: Executes commands with superuser privileges.

28. **Which of the following console command creates a remote shell session?**
   - `ssh` creates a remote shell session by allowing you to securely connect to a remote server or computer.

29. **Which of the following is true when the `-la` parameter is specified for the `ls` console command?**
   - When you specify the `-la` parameters for the `ls` command, it lists all files, including hidden files (those starting with a dot), with detailed information such as permissions, owner, size, and modification date.

30. **Which of the following is true for the domain name "banana.fruit.bozo.click"?**
   - "click" is the top-level domain.
   - "bozo" is a subdomain.
   - "fruit" is a root domain.

31. **Is a web certificate necessary to use HTTPS?**
    - Yes, a web certificate, often referred to as an SSL/TLS certificate, is necessary to use HTTPS (HyperText Transfer Protocol Secure). It ensures that the data transmitted between the user's browser and the web server is encrypted and secure.

32. **Can a DNS A record point to an IP address or another A record?**
    - A DNS A (Address) record can point to an IPv4 address but not to another A record. For DNS resolution, A records associate domain names with their corresponding IPv4 addresses.

33. **Port 443, 80, 22 is reserved for which protocol?**
    - Port 443 is reserved for HTTPS (HTTP over TLS/SSL).
    - Port 80 is reserved for HTTP (Hypertext Transfer Protocol).
    - Port 22 is reserved for SSH (Secure Shell) for secure remote access.

34. **What will the following code using Promises output when executed?**
    - Promises in JavaScript are a powerful and flexible way to handle asynchronous operations. They provide a cleaner and more structured approach to dealing with callbacks and managing asynchronous code execution. Promises make it easier to work with tasks like fetching data from a server, reading files, or handling timeouts.

Here's an overview of how promises work and their key concepts:
**States:**
   - Promises can be in one of three states:
     - **Pending:** The initial state, representing the promise being unresolved.
     - **Fulfilled (Resolved):** The state when the promise successfully completes with a result value.
     - **Rejected:** The state when the promise encounters an error or fails, providing a reason or an error object.

**Creating Promises:**
   - You can create a promise using the `Promise` constructor. It takes a function with two arguments: `resolve` and `reject`. You should perform asynchronous operations within this function and call `resolve` when the operation succeeds and `reject` when it fails.

   ```javascript
   const myPromise = new Promise((resolve, reject) => {
     // Asynchronous operation
     if (success) {
       resolve(result);
     } else {
       reject(error);
     }
   });
   ```

**Chaining Promises:**
   - Promises can be chained using `.then()` and `.catch()` methods. This allows you to specify what should happen after a promise is resolved or rejected.

   ```javascript
   myPromise
     .then((result) => {
       // Handle the resolved result
     })
     .catch((error) => {
       // Handle the rejected error
     });
   ```

**Promise.all():**
   - You can use `Promise.all()` to combine multiple promises and wait for all of them to resolve. It returns a new promise that resolves with an array of results when all the input promises are resolved.

   ```javascript
   Promise.all([promise1, promise2, promise3])
     .then((results) => {
       // Handle the results array
     })
     .catch((error) => {
       // Handle any error
     });
   ```

**Promise.race():**
   - `Promise.race()` is similar to `Promise.all()`, but it resolves or rejects as soon as the first promise in the input array resolves or rejects.

   ```javascript
   Promise.race([promise1, promise2])
     .then((result) => {
       // Handle the first resolved promise
     })
     .catch((error) => {
       // Handle the first rejected promise
     });
   ```

**Async/Await:**
   - ES2017 introduced the `async` and `await` keywords, which simplify asynchronous code using promises. With `async/await`, you can write asynchronous code in a more synchronous style.

   ```javascript
   async function fetchData() {
     try {
       const result = await myPromise;
       // Handle the resolved result
     } catch (error) {
       // Handle the rejected error
     }
   }
   ```

**Error Handling:**
   - Promises allow you to handle errors more effectively. You can attach `.catch()` to a promise or use `try...catch` with `async/await` to capture and handle errors.

   ```javascript
   myPromise.catch((error) => {
     // Handle the error
   });
   ```

Promises are a fundamental part of modern JavaScript and are widely used for handling asynchronous operations, making code more readable, maintainable, and less prone to callback hell (nested callbacks). They provide a structured way to work with asynchronous tasks, improving the overall developer experience.


# **Final Review**

1. **What ports are used for HTTP, HTTPS, SSH?**
   - HTTP typically uses port 80, HTTPS uses port 443, and SSH uses port 22.

2. **What do HTTP status codes in the 300, 400, 500 range indicate?**
   - 300 Range: Indicates redirection. For example, 301 for permanent redirection, 302 for temporary redirection.
   - 400 Range: Indicates client errors. For example, 404 for "Not Found," 400 for "Bad Request."
   - 500 Range: Indicates server errors. For example, 500 for "Internal Server Error," 503 for "Service Unavailable."

3. **What does the HTTP header content-type allow you to do?**
   - The "Content-Type" HTTP header specifies the media type of the resource, helping the client process the received data correctly.
   Common values include: 
   - application/json for JSON data.
   - text/html for HTML content.
   - application/x-www-form-urlencoded for form data.

4. **What do the following attributes of a cookie do? Domain, Path, SameSite, HTTPOnly?**
   - **Domain**: Specifies which domain the cookie is accessible to.The cookie will be sent only to requests originating from this domain. 
   - **Path**: Restricts the cookie to a specific path within the domain. (Specififes the subset of URLs to which the cookie applies)
   - **SameSite**: Controls the cookie's sending along with cross-origin requests. It can be set to "Strict", "Lax", or "None"
   - **HTTPOnly**: Makes the cookie accessible only through the HTTP protocol. (if set, the cookie cannot be accessed through JavaScript, enhancing security against certain types of attacks.)

5. **Assuming the following Express middleware, what would be the console.log output for an HTTP GET request with a URL path of /foo/bar?**
   Here's the middleware:
   ```javascript
   app.use((req, res, next) => {
     console.log(req.method, req.path);
     next();
   });
   ```
   - The output for a GET request to `/foo/bar` would be: `GET /foo/bar`.

6. **Given the following Express service code: What does the following JavaScript fetch return?**
   - Generally, `fetch()` returns a Promise resolving to the Response of the request.

7. **Given the following MongoDB query { cost: { $gt: 10 }, name: /fran.*/ } select all of the matching documents.**
   - This query selects all documents where `cost` is greater than 10 and `name` field matches the regular expression '/fran.*/' (starts with "fran".)

8. **How should you store user passwords in a database?**
   - User passwords should be stored in hashed form using algorithms like bcrypt, with salts for added security. Common practices include using bcrypt or Argon2 for hashing.

9. **Assuming the following Node.js service code is executing with websockets, what will be logged to the console of the web browser?**
   - Generally, WebSocket interactions can send messages to the client to be logged in the browser. 

10. **What is the WebSocket protocol used for?**
    - The WebSocket protocol is for two-way interactive communication between a user's browser and a server. (WebSocket is a communication protocol that provides full-duplex communication channels over a single TCP connection. It is commonly used for real-time applications, such as chat applications or live updates.)

11. **What is JSX and how are the curly braces rendered?**
    - JSX is a syntax extension for JavaScript, used in React. Curly braces in JSX to embed JavaScript expressions in the markup. (For example, {props.name} in JSX will render the value of 'props.name.')

12. **Assuming a HTML document with a `<div id="root"></div>` element, what content will the following React component generate?**
    The React component provided:
    ```javascript
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }
    function App() {
      return (
        <div>
          <Welcome name="Sara" />
          <Welcome name="Cahal" />
          <Welcome name="Edite" />
        </div>
      );
    }
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);
    ```
    This will generate:
    ```html
    <div>
      <h1>Hello, Sara</h1>
      <h1>Hello, Cahal</h1>
      <h1>Hello, Edite</h1>
    </div>
    ```

13. **Assuming a HTML document with a `<div id="root"></div>` element, what content will the following React component generate?**
    The `Numbers` component:
    ```javascript
    function Numbers() {
      const numbers = [1, 2, 3, 4, 5];
      const listItems = numbers.map((number) =>
        <li>{number}</li>
      );
      return(<ul>{listItems}</ul>)
    }
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Numbers/>);
    ```
    - This generates an unordered list with numbers 1 to 5 as list items. (The provided React component renders an unordered list (<ul>) with list items (<li>) containing numbers from the numbers array.)

14. **What does the following React component do?**
    The `Example` component:
    ```javascript
    function Example() {
      const [count, setCount] = useState(0);
      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
    }
    ```
    It's a counter component that increments the count each time the button is clicked.

15. **What are React Hooks used for?**
    - React Hooks are functions that allow functional components to use React state and lifecycle features. They include 'useState' for state management, 'useEffect' for handling side effects, and others. 

16. **What is the useEffect hook used for?**
    - `useEffect` is for performing side effects in functional components, like data fetching, subscriptions or manual DOM changes.

17. **What does this code do?**
    The provided code:
    ```javascript
    export default function App() {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      );
    }
    ```
    - It sets up a router in a React application, defining routes for different components. (For example, the path "/" renders the 'Layout' component with nested routes for "Home," "Blogs," "Contact," and a wildcard route for non-matching paths.)

18. **What role does npm play in web development?**
    - npm is a package manager for JavaScript and a command-line utility for managing Node.js packages. It is used for installing, sharing, and managing project dependencies.

19. **What does package.json do in an npm project?**
    - `package.json` is a configuration file for npm projects. It holds project metadata and manages project dependencies, scripts for executing tasks, and other project-specific information.

20. **What does the fetch function do?**
    - `fetch` function is used in JavaScript to make network requests. It returns a Promise resolving to the Response of the request, whether it is successful or not.

21. **What does Node.js do?**
    - Node.js is a JavaScript runtime that allows executing JavaScript code on the server side. It enables server-side scripting, making it possible to build scalable network applications.

22. **What does Vite do?**
    - Vite is a fast, modern front-end build tool that pre-configures development setups for building React, Vue, or vanilla JavaScript applications. It focuses on speed and provides a faster server start, instant module reloading, optimized production builds, and efficient bundling.
