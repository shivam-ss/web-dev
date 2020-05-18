import React from "react";
import ReactDOM from "react-dom";

const name = "Shivam";

const currdate = new Date();
const year = currdate.getFullYear();

const imag = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <p>Created by {name} </p>
    <p>Copyright {year} </p>
    <img src={imag} />
  </div>,
  document.getElementById("root")
);
