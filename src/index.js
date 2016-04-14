import React from 'react';
import ReactDOM from 'react-dom';
// Create a component. This component should produce HTML
const App = () => {
  return <div>Calm down Batman</div>;
}

ReactDOM.render(<App />, document.querySelector(".container"));
// Take this component's generated HTML and put it in the DOM
