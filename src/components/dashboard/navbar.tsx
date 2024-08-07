import { useNavigate } from "react-router-dom";

import { LogOut } from "lucide-react";

import { MobileSidebar } from "@/components/dashboard/movil-sidebar";
import { Button } from "@/components/ui/button";

import unam_logo from "@/assets/logo-unam-white.png"
import { useAuth } from "@/setup/AuthContext";
import { useQueryClient } from "@tanstack/react-query";

export const Navbar = () => {
    const navigate = useNavigate();
    const { logOut, profile } = useAuth();
    const queryClient = useQueryClient();

    const handleLogout = () => {
        queryClient.clear();
        logOut();
        navigate('/');
    }

    const handleGoHome = () => {
        navigate('/dashboard');
    }

    return (
        <nav className="p-4 border-b h-full flex items-center shadow-sm bg-blue-900">
            <MobileSidebar />
            <div className="flex justify-between items-center w-full">
                <img src={unam_logo} alt="Logo de la UNAM" className="size-16 md:ml-8 cursor-pointer"
                    onClick={handleGoHome}
                />
                <span className="font-bold text-xl txt-shadow capitalize pl-10">
                    {profile?.account.rol}
                </span>
                <div className="flex items-center jus gap-x-4 ml-auto">
                    <span className="md:block hidden text-white font-semibold text-lg">
                        {profile?.account.dni} - {profile?.user.nombres} {profile?.user.apellidos}
                    </span>
                    <Button onClick={handleLogout} variant="outline" size="icon" >
                        <LogOut className="size-5" />
                    </Button>
                </div>
            </div>
        </nav>
    )
}