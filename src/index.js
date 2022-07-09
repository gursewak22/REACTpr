import React from "react";
import ReactDOM from "react-dom";
const custom = {
  color: "blue",
  border: "1px solid black",
  fontSize: "100px",
  textAlign: "center"
};
ReactDOM.render(
  <h1 style={custom}>Hello World!</h1>,
  document.getElementById("root")
);
