
import { useSelector } from "react-redux";
import { Navigate,Outlet } from "react-router-dom";

function ProtectedRoute(props) {

    const currentUser = useSelector(state=> state.user)
    // const { path } = props
  
    return currentUser.confirmationCode ? (
      < Outlet />
    ) : (
      <Navigate
        to="/"
      />
    )
  };

  export default ProtectedRoute;