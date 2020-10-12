import React from "react";
import { Styled } from "./Button.styles";

export const Button = (props) => {
  return <Styled.Button onClick={props.handleClick} {...props} />;
};
