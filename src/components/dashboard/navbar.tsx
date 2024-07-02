import { useNavigate } from "react-router-dom";

import { LogOut } from "lucide-react";

import { MobileSidebar } from "@/components/dashboard/movil-sidebar";
import { Button } from "@/components/ui/button";

import unam_logo from "@/assets/logo-unam-white.png"
import { useAuth } from "@/setup/AuthContext";

export const Navbar = () => {
    const navigate = useNavigate();
    const { logOut, profile } = useAuth();

    const handleLogout = () => {
        logOut();
        navigate('/');
    }

    const handleGoHome = () => {
        navigate('/dashboard');
    }

    return (
        <nav className="p-4 border-b h-full flex items-center shadow-sm bg-blue-900">
            <MobileSidebar />
            <div className="flex justify-between w-full">
                <img src={unam_logo} alt="Logo de la UNAM" className="size-16 md:ml-8 cursor-pointer"
                    onClick={handleGoHome}
                />
                <div className="flex items-center jus gap-x-4 ml-auto">
                    <span className="font-bold text-xl txt-shadow capitalize">
                        {profile?.account.rol}
                    </span>
                    <Button onClick={handleLogout} variant="outline" size="icon" >
                        <LogOut className="size-5" />
                    </Button>
                </div>
            </div>
        </nav>
    )
}