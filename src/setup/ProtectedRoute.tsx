import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = () => {

    const { isUserAuthenticated, logOut } = useAuth();
    const location = useLocation();

    if (!isUserAuthenticated()) {
        logOut();
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return <Outlet />;
}

export default ProtectedRoute;