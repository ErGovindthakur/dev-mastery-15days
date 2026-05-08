import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
  const isAuthenticated = document.cookie.includes('token');

  if(!isAuthenticated) <Navigate to={"/login"} replace />

  return children;
}

export default ProtectedRoute