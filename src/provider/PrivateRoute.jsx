import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!user) {
    // যদি লগইন না করা থাকে, তাহলে login পেজে পাঠাও
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  // লগইন করা থাকলে মূল কনটেন্ট দেখাও
  return children;
};

export default PrivateRoute;
