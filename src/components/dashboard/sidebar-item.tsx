import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { useLocation, useNavigate } from "react-router-dom";
import { useMovilSidebarSheetStore } from "@/store/utils-store";

interface SidebarItemProps {
    icon: LucideIcon;
    label: string;
    href: string;
};

export const SidebarItem = ({
    icon: Icon,
    label,
    href,
}: SidebarItemProps) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { setOpen } = useMovilSidebarSheetStore();
    const fullHref = `/dashboard/${href}`;

    const isActive =
        (location.pathname === "/" && href === "/") ||
        location.pathname === fullHref ||
        location.pathname?.startsWith(`${fullHref}/`);

    const onClick = () => {
        navigate(href);
        setOpen(false);
    }

    return (
        <button
            onClick={onClick}
            type="button"
            className={cn(
                "flex items-center gap-x-2 text-slate-500 dark:text-gray-400 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
                isActive && "text-blue-900 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700 dark:text-gray-100"
            )}
        >
            <div className="py-8 flex-1">
                <Icon
                    size={40}
                    className={cn(
                        "text-slate-500 mx-auto",
                        isActive && "text-sky-700"
                    )}
                />
                <span className="text-md">{label}</span>
            </div>
            <div
                className={cn(
                    "ml-auto opacity-0 border-4 border-blue-800 h-full transition-all",
                    isActive && "opacity-100"
                )}
            />
        </button>
    )
}