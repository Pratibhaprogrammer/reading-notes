
# React
  - react is a declarative, efficient, and flexible JaS library for building user interfaces.  It lets you compose complex UI's from small, isolated pieces of code called "components"

    - components are used to tell react what we want to see on the screen.  When our data changes, react will efficiently update and re-render our components. 
    
    ## passing data through props
    - 
   <js class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
}
class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}>
## Making an interactive component
- 
<js>

# Hello World
<jsReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);>
intro to learning react

# intro to JSX

- <jsconst element = <h1>Hello, world!</h1>;
> this funny tag sytax is neither a tring nor HTML. It's called JSX, and it is a sytax extension to JS. This is recomended to be used with React to describe what the UI should look like.  
- why JSX?
React doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.
# Rendering elements
- an element describes what you want to see on the screen.  unlike DOM elements, react elements are plain objects, and are cheap to create.  React DOM takes care of updating the DOM to match the React elements.  
<js
<div id="root"></div>
>
 This is called a 'root' DOM node.  everything inside it will be managed by React DOM

## updating the Rendered Element
- react elements are 'immutable'. Once you create it, you can't change its children or attributes.  
With what we know thus-far, the only way to updated the UI is to create a new element, and pass it to ReactDOM.render()
# Components and Props
- Components let you split the UI ihto independent, reusavle pieces. 
## functions and class componenets
- The simplest way to define a component is to write a JS function.  This function is a valid react component because it accepts a single 'props' (which stands for properties) object argument with data and returns a react element.  
<jsfunction Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
} >

## rendering a component
<jsconst element = <Welcome name="Sara" />;>

<jsfunction Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
); >

## composing components
- <jsfunction Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);>



