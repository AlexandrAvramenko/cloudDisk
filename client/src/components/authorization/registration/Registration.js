import React, { useState } from "react";
import { Input } from "../../input";
import "../../../utils/buttons.scss";
import { registration } from "../../../actions/user";
import { Styled } from "./Registration.styles";

export const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Styled.Form>
      <Styled.Title>Регистрация</Styled.Title>
      <Input
        type="email"
        value={email}
        setValue={setEmail}
        placeholder="Введите email..."
      />
      <Input
        type="password"
        value={password}
        setValue={setPassword}
        placeholder="Введите пароль..."
      />
      <button className="button" onClick={() => registration(email, password)}>
        Зарегистрироваться
      </button>
    </Styled.Form>
  );
};
