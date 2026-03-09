import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // Check if user is logged in (has token in localStorage)
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;