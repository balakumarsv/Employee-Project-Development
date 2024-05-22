import React from "react";
import { Route, Navigate, RouteProps } from "react-router-dom";

function PrivateRoute({ element, ...rest }: RouteProps) {
  // Check if user is logged in
  const isLoggedIn = localStorage.getItem("token");

  return (
    <Route
      {...rest}
      element={isLoggedIn ? "*" : <Navigate to="/login" replace />}
    />
  );
}

export default PrivateRoute;
