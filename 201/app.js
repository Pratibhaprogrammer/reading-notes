'use strict';
var jacob = {
  name: jacob,
  age: 31,

}

function person(name,age){
  this.name = name;
  this.age = age;
}
person.prototype.language = 'javascript';
var personjacob = new person('jacob', 31);
  console.log(jacob, personjacob)

  