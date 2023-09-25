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
  "Parent",
  React.createElement("div", { id: "child1" }, "Child", [
    React.createElement("p", { class: "grandchild" }, "grandChild"),
    React.createElement("p", { class: "grandchild" }, "grandChild"),
  ]),
  React.createElement("div", { id: "child2" }, "Child", [
    React.createElement("p", { class: "grandchild" }, "grandChild"),
    React.createElement("p", { class: "grandchild" }, "grandChild"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
