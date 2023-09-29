import React from "react";
import ReactDOM from "react-dom/client";

/* using javascript
 const root = document.getElementById("root");
 const heading = document.createElement("h1");
 heading.innerHTML = "Hello Javascript";
 root.appendChild(heading);*/
// const heading = React.createElement(
//   "h1",
//   {
//     id: "header",
//     style: {
//       color: "red",
//       backgroundColor: "black",
//     },
//   },
//   "NamasteReact"
// );

/* heading is not an html element.
React.createElement is an object and that  heading object also react Element is passed to root.render and that creates the html tag the browser understands and it puts inside the root id.
{
    id: "header",
    style: {
      color: "red",
      backgroundColor: "black",
    }
    This is props which consists of attributes and children("Namaste React")
so ReactElement(object)=>HTML(Browser understands)

HOW  to create this 
    <div id="root"></div>
    <div id="parent">
      <div id="child">
        <h1 id="grandchild"></h1>
        <h2 id="grandchild"></h2>
      </div>
    </div>

*/
const parent = React.createElement("div", { id: "parent" }, [
  "Mom",
  React.createElement("div", { id: "child1" }, "son", [
    React.createElement("p", { className: "grandchild" }, "grandChild"),
    React.createElement("p", { className: "grandchild" }, "grandChild"),
  ]),
  React.createElement("div", { id: "child2" }, "Child", [
    React.createElement("p", { className: "grandchild" }, "grandChild"),
    React.createElement("p", { className: "grandchild" }, "grandChild"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
