

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
    