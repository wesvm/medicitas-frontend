import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

interface ProtectedRoute {
    children?: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRoute) => {

    const { isUserAuthenticated, logOut } = useAuth();
    const location = useLocation();

    if (!isUserAuthenticated()) {
        logOut();
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children ? <>{children}</> : <Outlet />;
}

export default ProtectedRoute;