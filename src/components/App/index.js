import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { history } from "../../commons";
import { Dashboard, Login, Register } from "../../containers";
import PrivateRoute from "../PrivateRoute";

class App extends Component {
    render() {
        return (
            // <Router history={history}>
            <Router basename="/app">
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
