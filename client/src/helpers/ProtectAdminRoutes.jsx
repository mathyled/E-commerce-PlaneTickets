import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ route }) {
  let redirectToHome = true;
  const currentUser = useSelector((state) => state.user);
  // const { path } = props

  const cUser = JSON.parse(localStorage.getItem("User"));
  if (cUser && Object.keys(cUser).length > 0) {
    if (cUser.isAdmin) redirectToHome = false;
  }

  return redirectToHome ? <Navigate to="/home" /> : <Outlet />;
}

export default ProtectedRoute;
