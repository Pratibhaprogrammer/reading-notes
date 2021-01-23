# js objects
and the DOM (Document Object Model)

  -fundamental data structure ( something that holds different types of data ie: string, number, booleans, nulls, undifined)
  - objects allow us to place things is a specific place.  
  - 'var array = [1, 2, 3] // how arrays wok
    - wnen we referenctr items withing: array[0]
  - 'var object = { key: value,}
    - 'var person = {name: 'jacob'}
    - now are referencs looks like this: person.name => value;
      - this referencer is known as 'dot notation';
      - we can still use bracket notation if we want
        - person['name']
    - every time we see somthing like array.length;
- things we define on an object, are comma seperated. 
- if we want to placer a funciton on an object, we call this a method
- 'this' => we call this "contextual 'this'"
  - inside of an object, 'this' refers to the object that is being defined.
  - ``` javascript
  'var person ={
    name: 'jacob', 
    speak: function (){
      conle.log('hey there');

    }
    greet: function(){
      console.log('my name is' + this.name);
    }
  }
  person.speak
  person.greet() returns "my name is Jacob"

  ## Document Object Model
  - thins is an object that livers globally within the browser
  - represent the HTML document that we are currently looking at.  
  - it has it's own properties and methods, many of which we will discuss
  - you can use this to select elements that are on the page, create new elements that are not on the page yet, append those new elements to the document object.
    - useful methods:
      - getElementById


## Modeling the problem Domain
- understanding the scope of the problem and providing a working model of how it can ber solved.  
- Femo in README.md



