import React from "react";
import ReactDOM from "react-dom";

const name = "Shivam";

const currdate = new Date();
const year = currdate.getFullYear();

const imag = "https://picsum.photos/160";

//creating a JSON object for
const customStyle = {
  color: "green",
  fontSize: "50px",
  Border: "1px solid black"
};

ReactDOM.render(
  <div>
    <h1 style={{ color: "red" }}> Hiiiiiiii </h1>
    <h1 style={customStyle}> Sakshi </h1>
    <p>Created by {name} </p>
    <p>Copyright {year} </p>
    <img src={imag} />
  </div>,
  document.getElementById("root")
);
