import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
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
console.log(jsxHeading);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
/*
root.render(jsxHeading);
this statement i.e root.render doesn't understand jsx but before it reaches this line jsx is converted into react element using babel package*/

root.render(jsxHeading);
