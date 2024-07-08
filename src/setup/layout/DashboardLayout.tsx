import { Navbar } from "@/components/dashboard/navbar";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {

    return (
        <div className="h-full">
            <div className="h-[80px] w-full fixed z-50">
                <Navbar />
            </div>
            <div className="hidden md:flex h-full w-56 flex-col fixed mt-[80px]">
                <Sidebar />
            </div>
            <main className="md:pl-36 min-h-dvh pt-[80px] bg-gray-100">
                <Outlet />
            </main>
        </div>

    )
}

export default DashboardLayout;