import React from "react";
import {Route, Redirect } from "react-router-dom";

import Auth from '../utils/Auth';

const SecureRoute = (props) => {
    const Component = props.component

    return (
        <Route 
            path={props.path} 
            exact={props.exact}
            render={(routerProps) => 
                Auth.isAuthenticated() 
                    ? <Component {...routerProps} /> 
                    : <Redirect to="/login" />
                
            }
        />
    )   
}

export {
    SecureRoute,
};