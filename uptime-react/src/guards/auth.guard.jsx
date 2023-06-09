import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ auth, children }) => {
    if (!auth) {
      return <Navigate to="/login" replace />;
    }
    return children;
};