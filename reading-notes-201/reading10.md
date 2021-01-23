# debugging
- console errors are your friend!
- syntax: super comon they are things like typos
- the reference error: you are trying to reference something that is undefined or mis- spelled 
```javascript
var object ={
  number:0,
}
console.log(objec) //since this is spelled differently it will throw a reference error
```
- typeError: trying to perform an opperation on the wrong type

```javascript
var object = {
  number: 0,
}
object.push(); //this will throw a type error(object.push is not a function)push is for arrays
```
- RangeError: youre trying to do something with a numneric value that is unacceptable in javascript's mind. 
```javascript
var array = new Array(-1)//this tries to create an array with length of -1
```
