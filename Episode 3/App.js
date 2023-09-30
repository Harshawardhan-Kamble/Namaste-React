import React from "react";
import ReactDOM from "react-dom/client";
/*const heading = React.createElement(
  "h1",
  {
    style: {
      backgroundColor: "black",
      color: "red",
    },
  },
  "Namaste using React Create Element"
);
const jsxHeading = <h1>Namaste from JSX</h1>;
console.log(jsxHeading); //React element object
console.log(heading); //React element object*/
const root = ReactDOM.createRoot(document.getElementById("root"));
/*
root.render(jsxHeading);
this statement i.e root.render doesn't understand jsx but before it reaches this line jsx is converted into react element using babel package*/

// 1. to use this reactelement ( jsx which is converted to react element) into react component use {} curly braces because it is at the end , a javascript varible of sorts

const Header = () => {
  return (
    <div>
      {/* to write javascript code inside components we use curly braces  */}
      {1000 + 3000}
      {jsx}
      <h1>Namaste using React Component</h1>
    </div>
  );
};
// 1. to use this reactelement in react elemnent same use {} and react component inside react element
const jsx2 = <h2>I'm from JSX2</h2>;
const jsx3 = <h3>I'm from JSX3</h3>;
const jsx = (
  <div>
    <h1>I'm from JSX</h1>
    {jsx2}
    {jsx3}
    {/* <Header></Header> */}
  </div>
);

// This is how you render a react component
// root.render(Header()); see Header is function component which is a javascript function therefore we can call it like a regular function too
// root.render(<Header></Header>);root.render(<Header/>);

root.render(<Header />);
