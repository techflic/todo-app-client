import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const authenticateRoute = () => {
        const authUser = localStorage.getItem("auth")
        if(authUser)
            return true
        return false
    }
    
    return (
        <Route
            {...rest}
            render={props =>
                authenticateRoute() ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: {
                                from: props.location
                            }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
