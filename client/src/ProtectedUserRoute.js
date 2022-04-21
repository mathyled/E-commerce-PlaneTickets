
import { useSelector } from "react-redux";
import { Navigate,Outlet } from "react-router-dom";

function ProtectedUserRoute({user}) {

    // const currentUser = useSelector(state=> state.user)
    // const { path } = props
  
    return user?.isAdmin === false || user?.isAdmin === true  ? (
      < Outlet />
    ) : (
      <Navigate
        to="/"
      />
    )
  };

  export default ProtectedUserRoute;