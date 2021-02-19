import React from "react";
import { Route, Redirect } from "react-router-dom";
// import { AuthenticationService } from "../jwt/_services";

export const PrivateRoute = ({ component: Component,auth:auth, ...rest }) => (
  <Route
    {...rest}

    render={(props) => {
      const currentUser = auth.isLoggedIn;
      if (!currentUser) {
        // not logged in so redirect to login page with the return url
        return (
          <Redirect
            to={{
              pathname: "/auth/login",
              state: { from: props.location },
            }}
          />
        );
      }

      // authorised so return component
      return <Component {...props} />;
    }}
  />
);

export default PrivateRoute;
