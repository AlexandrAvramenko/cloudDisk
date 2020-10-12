import React from "react";
import logo from "../../assets/img/logo.svg";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redusers/userReducer";
import { Styled } from "./Navbar.styles";
import "../../utils/buttons.scss";

const Navbar = (props) => {
  const { themeToggler } = props;
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  return (
    <Styled.Navbar>
      <Styled.Container>
        <Styled.Logo>
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </Styled.Logo>
        <Styled.Brand>Cloud</Styled.Brand>
        <Styled.ListItem>
          {!isAuth && (
            <NavLink to="/login" className="link">
              Войти
            </NavLink>
          )}
          {!isAuth && (
            <NavLink to="/registration" className="link">
              Регистрация
            </NavLink>
          )}
          {isAuth && (
            <div className="link" onClick={() => dispatch(logout())}>
              Выход
            </div>
          )}
          <button className="button" onClick={themeToggler}>Switch Theme</button>
        </Styled.ListItem>
      </Styled.Container>
    </Styled.Navbar>
  );
};

export default Navbar;
