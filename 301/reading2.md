# This page introduces the concept of state and lifecycle in a React component.  
- Here is a ticking clock example
<js fucntion tick () {
  const element = (
    <div>
      <h1>Hello world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  reactDom.render(
    element,
    document.getElementById('root')
  );
}
setInterval(tick, 1000);
>

- here we will make the clock component reusable and encapsulated. It will set up it's own timer and update it'self every secton.  
- We can start by encapsulating how the clock looks

<js fucntion Clock (props) {
  return (
    <div>
      <h1>Hello world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  function tick() {
    react.DOM.render(
      <Clock date = {new Date()} />,
      document.getElementById('root')
    );
  }
    
setInterval(tick, 1000);
>

-    The fact that the clock sets a timer and updates the UI every secont should be a detail of the Clock
- Ideally we want to only have to write this piece of code once.



<jsreact.DOM.render(
  <Clock date = {new Date()} />,
  document.getElementById('root')
);  
>
- in order to make this work, we need to add 'state' to the Clock component
//State is like props, but it is private and fully controlled by the component.  


  - Convertint a function to a class
  -  Create an ES6 class, with the same name, that extends React.Component.
  -  Add a single empty method to it called render().
  -  Move the body of the function into the render() method.
  -  Replace props with this.props in the render() body.
  - Delete the remaining empty function declaration.

<js class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}>



# Handling Events
- it is very similar to handling events on DOM element. There are some syntax differences. 
- react events are named using camelCase, rather than lowercase
- with JSX you pass a function as the event handler, rather than a string. 

  - example
  - HTML
<js <button onclick="activateLasers()">
  Activate Lasers
</button>>

  - different in React
<js <button onClick={activateLasers}>
  Activate Lasers
</button>>

- Another difference is you can't return False to prevent default behavior.  You need to call 'preventDefault'.  
  - HTML example 
  <a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>
  - React example 
  <js function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
>
[bootstrap](https://react-bootstrap.github.io/)
[Netify](https://www.netlify.com/)