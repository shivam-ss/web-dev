import React from "react";
import ReactDOM from "react-dom";

const name = "Shivam";

const currdate = new Date();
const year = currdate.getFullYear();
ReactDOM.render(
  <div>
    <p>Created by {name} </p>
    <p>Copyright {year} </p>
  </div>,
  document.getElementById("root")
);
