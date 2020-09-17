import React, { useState } from "react";
import Input from "../../../utils/input";
import "../../../utils/buttons.scss";
import "./style.scss";
import { registration } from "../../../actions/user";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="registration">
      <div className="registration__header">Регистрация</div>
      <Input
        type="email"
        value={email}
        setValue={setEmail}
        placeholder="Введите email..."
        className="input input--border-bottom"
      />
      <Input
        type="password"
        value={password}
        setValue={setPassword}
        placeholder="Введите пароль..."
        className="input input--border-bottom"
      />
      <button className="button" onClick={() => registration(email, password)}>
        Зарегистрироваться
      </button>
    </div>
  );
};

export default Registration;
