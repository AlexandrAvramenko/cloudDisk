import React from "react";
import "./style.scss";

const Input = (props) => {
  return (
    <input
      type={props.type}
      value={props.value}
      onChange={(event) => props.setValue(event.target.value)}
      placeholder={props.placeholder}
      className={props.className}
    />
  );
};

export default Input;
