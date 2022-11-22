import React from "react";
import "./Button.css";

const Button = ({ click, active = true }) => {
  return (
    <button disabled={active} className="button" onClick={click}>
      submit
    </button>
  );
};

export default Button;
