# functional programming. 
```
Functional programming is a programming paradigm — a style of building the structure and elements of computer programs — that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data — Wikipedia
```
## pure functions
- a pure function returns the same result if given the same arguments. (also referred to as 'deterministic')

- this function isn't pure. 
  - It uses a global object that wasnt passed as a parameter of the function. 

```
let PI = 3.14;

const calculateArea = (radius) => radius * radius * PI;

calculateArea(10); // returns 314.0
```

- This function is 'pure'
```
let PI = 3.14;

const calculateArea = (radius, pi) => radius * radius * pi;

calculateArea(10, PI); // returns 314.0
```
- It passed the PI value as a parameter so that now we are just accessing parameters passed to the function rather than an external object.  
  - in other words, the value of PI can change and the function will still return a correct result.

### If a function reads external files, it's not a 'pure' function - the file's contents can change. 
### any function that relies on a random number generator cannot be pure

## pure function benefits
- The code's easier to test. We don't need to mock anything. So we can unit test pure functions with different contexts
  ```
  Given a parameter A → expect the function to return value B
Given a parameter C → expect the function to return value D
```

## immutabitlity - unchanging over time or unable to be changed. 
- When data is immutable, its state cannot change after it’s created. If you want to change an immutable object, you can’t. Instead, you create a new object with the new value.

[functional programming concepts](https://medium.com/the-renaissance-developer/concepts-of-functional-programming-in-javascript-6bc84220d2aa)
[refactoring Js for Readability](https://dev.to/healeycodes/refactoring-javascript-for-performance-and-readability-with-examples-1hec)