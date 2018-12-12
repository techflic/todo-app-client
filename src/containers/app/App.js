import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { history } from "./../../commons/helpers/history";
import { PrivateRoute } from "./../privateRoute/PrivateRoute";
import Dashboard from "./../dashboard/Dashboard";
import Login from "./../login/Login";
import Register from "./../register/Register";

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <React.Fragment>
                    <PrivateRoute exact path="/" component={Dashboard} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </React.Fragment>
            </Router>
        );
    }
}

export default App;
