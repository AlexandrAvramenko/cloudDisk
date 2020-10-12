import React, { useState } from "react";
import { Input } from "../../input";
import { useDispatch } from "react-redux";
import { login } from "../../../actions/user";
// import { Button } from "../../button";
// import "../../../utils/buttons.scss";
import { Styled } from "./Login.styles";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  // const handleClick = () => {
  //   dispatch(login(email, password))
  // }

  return (
    <Styled.Form>
      <Styled.Title>Авторизиция</Styled.Title>

      <Input
        type="email"
        value={email}
        setValue={setEmail}
        placeholder="Введите email..."
        className="input"
      />

      <Input
        type="password"
        value={password}
        setValue={setPassword}
        placeholder="Введите пароль..."
        className="input"
      />

      <button
        className="btn"
        onClick={() => dispatch(login(email, password))}
      >
        Войти
      </button>
    </Styled.Form>
  );
};
