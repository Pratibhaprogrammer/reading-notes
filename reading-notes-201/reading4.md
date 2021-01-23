

  ## js logic
  - what goes inside of those parentheses of a contitional statment
  -truthy vs falsy these are things that are not specificly true or false that js thinks are true or false
    booleans, true and false
    - js is wierd and hasthis idea of things that evaluate to true / falsewithout being exactly true or false 
      - truthy
        - true-numbers 1 or more or negative numbers
        - string that are not empty
        - '0'
        - -1 negative numbers
      - falsey
        - 0
        - ''
        - '5'/2
        - null 
        - undefined
        - NaN: not a number
    - logical operatort
      - ! not something
      - && both sides of a statement need to be true / truthy
      - ||only one side of a statement needs to be true
# loops
- a way to get our code to run more than once, without having to  write it more than once
- 3 types of loops
  - while loop: while a condition is truthy, run the following code over and  over again.  
  '''javascript
  var condition =true;
  while (condition) {
    // this will run as long as condition is true
    console.log('truthy')
    condition= false;
  }

  //we'll only get to c ode below the loop, if the condition above becomes falsey at some point.  
  console.log('loop is done')

  var ansewer = prompt('what is your name?);

  while (!answer) {
    console.log('you have nor given me a name')
    prompr('you have not given me a name, please name me!');
  }
  console.log('thank you')

  - for loop: initializer/ condition for the loop/ incrementer, the thing we want to occur after every loop
    - for(var i = 0; i < 10; i++){
      console.log('loop is running ' + i);

    }
    console.log('loop is done')

  var arrayOfQuestions = ['what is your name?' , 'what is your favorite color?']
  var arrayOfAnswers = [];
  for (var i = 0; i < arrayOfQuestions.length; i++) {
    prompt(arrayOfQuestions[i]);

    arrayOfAnswers.push(answer);
  }
  console.log('loop is done' , arrayOfAnswers);

- do while loop
  - just like a while loop, but it runs at least once before entering the loop
  - condition = false 
    do{
    console.log('conditionis truthy');

  } while (condition);

  # links
  - links are the defining feature of the web because they allow you to move from one web page to another - enabling the very idea of browsing or surfing. 
    - links are created using the <!---<a> element
    - <!---> <a href="whatever the url is> will link you to another site
    - <!--- <a href="index.html or some other page will link you to a page>>
    - email links would use mailto:
    -if you want a link to open in a new window, you can use the 'target' attribute on the opening <!--- <a> tag>


    ## css layout
    - css position properties, these elements dictate the flow of a number of elements
    - position property
      - absolute: positions the element outside of the normal flow of elements around it, and anchors it insteat to it's parent.  
      - fixed: I want to remove the element from the normal flow, the elements will be positioned with the viewport.
      - relative: keeps the element within the normal flow, but allows positioning with left and right, also allowing the element to be an anchor point for absolute positioned elements.
      - static: they follow a consistent flow that is preserved with the elements around it, will not be usable as absolute element anchor points.  
      - sticky: combination of fixed and absolute.  

  ## js Functions
  - function: a variable that includes not just data types, but actual blocks of js code
  - function declaration: creating a function, defining function logic
  - arguments: the data you provide a function when you call or exectue the function. 
  - parameters: the data that the functions defines, which come from it's execution.  
    - think of this as avariable that only that specific function can use
  - scope: the logic withing the curly braces of the function
    - function parameters are only usavle within the function scope. 
  - global vs local scope:
    - functions are able to acces global scope (variables that are defined outside the curlies)
    - functions only have acces to local scope that is withing their own curlies
  - function hoistin: functions that are declred with ther function
  - return
  <!---var array = [123];
  array.push(4)
  with functions we can store these operations to run when we chose>
  <!--- function pushArray() {
    var array = [1,2,3,];
    array.push(4) this is calling or executing the function. 4 is an argument.  we need to make sure our function is defined with the proper perameters
  }>

## pair programming
- what? 2 people dedicated to the same outcome, there is a driver (who writes all the code) and the navigator (keeps the driver in check) 
  - both share the responsibility for producing a working thing.  
- why? separating the responsibilities of each programmer makes us more efficient. 
- how? the driver, will fork the navigators project reo on github, and clone it down and do the work.
- a fork is an exact copy of someone else's repository but under your github account.
- after work is completed you make a pull request to merge the code that you worked on together back into the original persons (navigator) repo.  
- 