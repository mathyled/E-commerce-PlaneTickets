import { useAuth} from "./context/AuthContext"
import { Navigate,Outlet } from "react-router-dom";

function ProtectedRoute(props) {
    const { currentUser } = useAuth()
    const { path } = props
  
    return currentUser ? (
      < Outlet />
    ) : (
      <Navigate
        to="/"
      />
    )
  };

  export default ProtectedRoute;