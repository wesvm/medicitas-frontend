import { Menu } from "lucide-react";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import { useMovilSidebarSheetStore } from "@/store/utils-store";
import { Sidebar } from "./sidebar";

export const MobileSidebar = () => {

    const { open, setOpen } = useMovilSidebarSheetStore();

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetClose className="hidden text-blue-200" />
            <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
                <Menu className="text-white" />
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
                <div className="hidden">
                    <SheetTitle />
                    <SheetDescription />
                </div>
                <Sidebar />
            </SheetContent>
        </Sheet>
    )
}