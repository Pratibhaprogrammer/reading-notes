```javascript
var stars = '*';
for(i = 1; i <= 5; i++){
  for (var j = 1; j <= i; j++>){

  }
  var printString = ''


}
// var star = '*';
//     for (i = 0; i<= 4;i++){
//       var printString = '';
//       for (j = 0; j<= i;j++){
//         printString += star;

//       }
//     console.log(printString);
//     }

```
# HTML Events
- When we do things in the browser
  - hovering over an element, pressing a key on a keyboard, 
  - clicking 
    - mouse down + mouseup.
  - The browser is aware that this happens
  - As developers we have the pwer to call funcitons, toggle classes, run any js when these occur
  - Forms are the most prevelant element to get interactions from the user and we need to learn how to handle all the events that occur.  
- This is a combination of HTML and JavaScript.
  - we can tell our js to do something when an event is fired from out HTML.

  ```html
  <div id='box>
  </div> 
  ```
  ```javascript
  var boxElement = document.getElementById('box')

  // new method on HTML elements: addEventListener
  // the commands that you s=assign to the event listener, will run only when that event occurs.

  boxElement.addEventListener('click', function_(){
    console.log('box was clicked')
  });//the arguments are the eventthat I'm listening for, and a function to run when that event occurs
  ```
