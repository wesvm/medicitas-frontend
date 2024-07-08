import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/setup/AuthContext";

interface AuthGuardProps {
    children: React.ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
    const { isUserAuthenticated, logOut } = useAuth();
    const location = useLocation();

    if (!isUserAuthenticated()) {
        logOut();
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children ? <>{children}</> : <Outlet />;
}

export default AuthGuard;