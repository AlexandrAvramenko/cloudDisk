import React, { useState } from "react";
import Input from "../../../utils/input";
import { useDispatch } from "react-redux";
import { login } from "../../../actions/user";
import "../../../utils/buttons.scss";
import "./style.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="authorization">
      <div className="authorization__header">Авторизиция</div>
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
      <button
        className="button"
        onClick={() => dispatch(login(email, password))}
      >
        Войти
      </button>
    </div>
  );
};

export default Login;
