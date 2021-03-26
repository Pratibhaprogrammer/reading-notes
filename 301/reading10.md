# Java script call stack
- At the most basic level, a call stack is a data structure that uses the Last In, First Out (LIFO) principle to temporarily store and manage function invocation (call).
```
function firstFunction(){
  throw new Error('Stack Trace Error');
}

function secondFunction(){
  firstFunction();
}

function thirdFunction(){
  secondFunction();
}

thirdFunction();

```
![](https://cdn-media-1.freecodecamp.org/images/zOINLHPC8E56ac8yyINYOFWeImsjM2Wk2rdU)

![](https://cdn-media-1.freecodecamp.org/images/QgR2uIk7tW0YNz0Xm8g0jAPeRFI0e4sCejsv)


# Errors
- reference errors
  - This is as simple as when you try to use a variable that is not yet declared you get this type os errors.
```
console.log(foo) // Uncaught ReferenceError: foo is not defined
```
```
foo = 'Hello' // Uncaught ReferenceError: foo is not defined
```
```
let foo
let foo;
foo = 'Hello'
```

- syntax errors
  - this occurs when you have something that cannot be parsed in terms of syntax, like when you try to parse an invalid object using JSON.parse.
```
JSON.parse( {'foo': 'bar'} ) // Uncaught SyntaxError: Unexpected token o in JSON at position 1
```
```
JSON.parse('{"foo":"bar"}')
```
- range errors
  - Try to manipulate an object with some kind of length and give it an invalid length and this kind of errors will show up.
```
  var foo= []
foo.length = foo.length -1 // Uncaught RangeError: Invalid array length
```
- type errors 
  - Like the name indicates, this types of errors show up when the types (number, string and so on) you are trying to use or access are incompatible, like accessing a property in an undefined type of variable.
```
var foo = {}
foo.bar // undefined
foo.bar.baz // Uncaught TypeError: Cannot read property 'baz' of undefined
```
## refer to:
- [Understanding the JavaScript Call Stack](https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/)
- [JavaScript error messages](https://codeburst.io/javascript-error-messages-debugging-d23f84f0ae7c)
- [JavaScript errors reference on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)

