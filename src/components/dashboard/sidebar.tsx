import { SidebarItem } from "@/components/dashboard/sidebar-item";
import appNavRoutes from "@/setup/routes";

export const Sidebar = () => {

    const routes = appNavRoutes();

    return (
        <div className="h-full border-r flex flex-col overflow-y-auto shadow-sm md:max-w-36 bg-white">
            {routes.map((route) => (
                <SidebarItem
                    key={route.path}
                    icon={route.icon}
                    label={route.label}
                    href={route.path}
                />
            ))}
        </div>
    )
}