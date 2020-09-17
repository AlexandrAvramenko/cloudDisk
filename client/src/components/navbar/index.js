import React from "react";
import "./style.scss";
import Logo from "../../assets/img/logo.svg";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redusers/userReducer";

const Navbar = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="navbar__header">Cloud</div>
        {!isAuth && (
          <div className="navbar__login">
            <NavLink to="/login">Войти</NavLink>
          </div>
        )}
        {!isAuth && (
          <div className="navbar__registration">
            <NavLink to="/registration">Регистрация</NavLink>
          </div>
        )}
        {isAuth && (
          <div className="navbar__login" onClick={() => dispatch(logout())}>
            Выход
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
