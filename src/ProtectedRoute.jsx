import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const isAuth = useSelector((state) => state).isAuth;
  const rememberAuth = localStorage.getItem("isAuth");

  const navigate = useNavigate();

  if (rememberAuth || isAuth) {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
};
