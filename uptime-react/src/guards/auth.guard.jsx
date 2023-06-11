import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ auth, children }) => {
    //console.log('authentication logged ',auth);
    if (auth==null) {
      return <Navigate to="/login" replace />;
    }
    return children;
};