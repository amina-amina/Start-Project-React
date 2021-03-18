import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DashboardPage from "../pages/Dashboard-page";
import Error404page from "../pages/Error404-page";
import LmsPage from "../pages/Lms-page";
import Loginpage from "../pages/login/Login-page";
import RegisterPage from "../pages/registre/Register-page";

export default function AppRouter() {
  return (
    <Router>             
        <Switch>
            <Route exact path="/" component={LmsPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/admin" component={Loginpage} />
            <Route path="/dash" component={DashboardPage} />
            <Route path="*" component={Error404page} />
        </Switch>    
    </Router>
  );
}

