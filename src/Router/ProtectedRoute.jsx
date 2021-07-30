import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from '../Config/Auth';

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            Auth.isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login"
                    }}
                />
            )
        }
    />
);

export default ProtectedRoute;
