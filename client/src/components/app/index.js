import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../actions/user";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../globalstyle";
import { light, dark } from "../themes";
import "./style.scss";
import { Registration } from "../authorization/registration";
import { Login } from "../authorization/login";

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const [theme, setTheme] = useState("light");
  const dispatch = useDispatch();

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    dispatch(auth());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <GlobalStyles />
      <BrowserRouter>
        <div className="App">
          <Navbar themeToggler={themeToggler} />
          {!isAuth && (
            <Switch>
              <Route path="/registration" component={Registration} />
              <Route path="/login" component={Login} />
            </Switch>
          )}
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
