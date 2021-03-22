# What is Node and when should I use it?
- Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google’s V8 JavaScript engine and libuv library.
  - Node is built on google Chrome's v8 JavaScript engine.  
    - The V8 engine is the open-source JS engine that runs in google chrome and other chromium based wev vrowsers, including Brave, Opera, and Vivaldi. It was designed with performance in mind and is responsibe for compiling JS directly to native machine code that your computer can execute.  
  - Node programs aren't executed in the browser.  Its a JS runtime. 

  # Hello world the Node.js way
  - create a file ``` hello.js ``` and copy in the following code. 
  ```
  console.log("Hello, World!");
  ```
  - This uses Node’s built-in console module to display a message in a terminal window. To run the example, enter the following command:
  ```
  node hello.js
  ```
  ## Node has excellent support for Modern JS
  - with node you can write your JavaScript using the latest and most modern syntax. It also means that you don’t generally have to worry about compatibility issues — as you would if you were writing JavaScript that would run in different browsers.

## npm the JS package manager
- Node comes bundled with a package manager called npm. To check which version you have installed on your system, type npm -v.
- In addition to being the package manager for JavaScript, npm is also the world’s largest software registry.
### installing a package globaly
- Open the terminal and type the following:
```
npm install -g jshint
```
- This will install the jshint package globally on your system. We can use it to lint the index.js file from the previous example:
```
jshint index.js
```
- You should now see a number of ES6-related errors. If you want to fix them up, add /* jshint esversion: 6 */ to the top of the index.js file, re-run the command and linting should pass.

### Installing Locally

- Create a test folder and open a terminal in that directory. Next type this:
```
npm init -y

```
- This will create and auto-populate a package.json file in the same folder. Next, use npm to install the lodash package and save it as a project dependency:
```
npm install lodash --save
```
- Create a file named test.js and add the following:
```
const _ = require('lodash');

const arr = [0, 1, false, 2, '', 3];
console.log(_.compact(arr));
```
- Finally, run the script using node test.js. You should see [ 1, 2, 3 ] output to the terminal.

![Nodes execution model](https://uploads.sitepoint.com/wp-content/uploads/2012/10/1516152673node_event_loop.png)

# 6 reasons for pair programming
- 1: Greater efficiency
- 2: Engaged collaboration
- 3: Learning from fellow students
- 4: Social skills
- 5: Job interview readiness
- 6: Work environment readiness




# Axios docs

## installing
- Using npm:
```
$ npm install axios
```
- Using bower:
```
$ bower install axios
```
- Using yarn:
```
$ yarn add axios
```
- Using jsDelivr CDN:
```
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```
- Using unpkg CDN:
```
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

# Making asynchronous programming easier with async and await
- More recent additions to the JavaScript language are async functions and the await keyword, part of the so-called ECMAScript 2017 JavaScript edition (see ECMAScript Next support in Mozilla). These features basically act as syntactic sugar on top of promises, making asynchronous code easier to write and to read afterwards. They make async code look more like old-school synchronous code, so they're well worth learning. This article gives you what you need to know.
- There are two parts to using asyn/await
  - The async keyword 
  ```
  async
  ```
  - the await keyworde
  ```
  await
  ```
  