import { CalendarPlus, CalendarSearch } from "lucide-react";
import { useAuth } from "../AuthContext";
import { USER_ROLE } from "@/lib/const";

const adminRoutes = [
    {
        icon: CalendarSearch,
        label: "Mis Citas",
        href: "admin-1",
        element: (<div className="p-4">estas son mis citas</div>)
    },
    {
        icon: CalendarPlus,
        label: "Crear Cita",
        href: "admin-2",
        element: (<div className="p-4">crear una nueva cita</div>)
    }
];

const pacienteRoutes = [
    {
        icon: CalendarSearch,
        label: "Mis Citas",
        href: "paciente-1",
        element: (<div className="p-4">estas son mis citas</div>)
    },
    {
        icon: CalendarPlus,
        label: "Crear Cita",
        href: "paciente-2",
        element: (<div className="p-4">crear una nueva cita</div>)
    }
];

const especialistaRoutes = [
    {
        icon: CalendarSearch,
        label: "Mis Citas",
        href: "especialista-1",
        element: (<div className="p-4">estas son mis citas</div>)
    },
    {
        icon: CalendarPlus,
        label: "Crear Cita",
        href: "especialista-2",
        element: (<div className="p-4">crear una nueva cita</div>)
    }
];

const appRoutes = () => {
    const { profile } = useAuth();

    const getRoutesForRole = () => {
        switch (profile?.account.rol) {
            case USER_ROLE.ADMIN:
                return adminRoutes;
            case USER_ROLE.PACIENTE:
                return pacienteRoutes;
            case USER_ROLE.ESPECIALISTA:
                return especialistaRoutes;
            default:
                return [];
        }
    };

    return getRoutesForRole();
};

export default appRoutes;