## Code Review
  - getting a random number to represesnt cookies sold at each hour
    - THat number is within some range of values. 
      - min customers per hour and a 
      - max number of customers per hour
        - randomly generate a number of customers between these values
      - average number of cookies each customer buys. 
        - multiply the number abouve by this number (avg customer)
  - we need to do this same thing for every hour that a store is open


  - get some values to append to a list. 


  # Object Oriented Programming
  - we are using objects as a design pattern.
  - we use objects as the starting point for programming opperations
  - all the functions and operations that you could perform, belong to an object\ 
    - before we can call out to properties and methods, we have to create an object. 
  - It all beggins with defining functions that produce objects.
  - constructors: a function that creates an object. 


  ```javascript
  var seattle - {
    //properties and methoes go here

  }
  // by convention, when we define constructors we capitalize them
 
  function store(name, hours, minCust){
    this.name = name;
    this.hours = hours;
    this.minCust = minCust;
    //this.speak = function(){
      //console.log('hey Im Seattle')
    }
  }
  //prototype is the set of properties and methods that all objects that are associated with the constuctor recieve 
  Store.prototype.speak = function(){
    console.log('hey im' + this.name);
  }
  var seattle = new Store();//creating an object using the store constructor funcion

  console.log(seattle) //{name: 'seattle, hours: ['6am', '7am']}
  
  function store(name, hours);
  var seattle = new Store('seattle', ['6am', '7am',] 5 );

  // Store.name => this doesn't exist
  seattle.name //=> 'Seattle'
  seattle.speak(); //
```markdown
  ## HTML tavle 
  - creating rows and columns.
  - this requeires a very specific composition/ hierarchy of elements.
  - each row is made up of data cells, and if one row appears abouve the o

  ```html

   <table>
    <tr>
      
    </tr>
   
   </table>
