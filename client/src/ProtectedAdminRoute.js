
import { useSelector } from "react-redux";
import { Navigate,Outlet } from "react-router-dom";

function ProtectedAdminRoute({user}) {

    // const currentUser = useSelector(state=> state.user)
    // const { path } = props
  
    return user?.isAdmin === true ? (
      < Outlet />
    ) : (
      <Navigate
        to="/"
      />
    )
  };

  export default ProtectedAdminRoute;