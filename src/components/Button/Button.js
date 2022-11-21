import React from "react";
import "./Button.css";

const Button = ({ click }) => {
  return (
    <button className="button" onClick={click}>
      submit
    </button>
  );
};

export default Button;
