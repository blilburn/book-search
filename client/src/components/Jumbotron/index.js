import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{textAlign: "center", backgroundColor:'lightseagreen', color:'ghostwhite'}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
