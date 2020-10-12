import React from "react";
import {Styled} from './Input.styles';

export const Input = (props) => {

  return (
    <Styled.Input
      type={props.type}
      value={props.value}
      onChange={(event) => props.setValue(event.target.value)}
      placeholder={props.placeholder}
      className={props.className}
    />
  );
};

