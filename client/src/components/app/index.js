import React, { useEffect } from "react";
import Navbar from "../navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Registration from "../authorization/registration";
import Login from "../authorization/login";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../actions/user";
import "./style.scss";

function App() {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {!isAuth && (
          <Switch>
            <Route path="/registration" component={Registration} />
            <Route path="/login" component={Login} />
          </Switch>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
