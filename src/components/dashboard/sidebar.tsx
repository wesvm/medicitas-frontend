import { guestRoutes } from "@/setup/App";
import { SidebarItem } from "@/components/dashboard/sidebar-item";

export const Sidebar = () => {

    const routes = guestRoutes;

    return (
        <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm md:max-w-36 bg-white">
            {routes.map((route) => (
                <SidebarItem
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    )
}