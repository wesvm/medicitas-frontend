import { CalendarSearch, User, Users } from "lucide-react";
import { useAuth } from "../AuthContext";
import { USER_ROLE } from "@/lib/const";
import { ListPacientesPage } from "@/pages/admin/ListPacientesPage";
import { ListEspecialistasPage } from "@/pages/admin/ListEspecialistasPage";
import { PacienteCitasPage } from "@/pages/paciente/PacienteCitasPage";
import { EspecialistaCitasPage } from "@/pages/especialista/EspecialistaCitasPage";

const adminRoutes = [
    {
        icon: User,
        label: "Pacientes",
        href: "pacientes",
        element: (<ListPacientesPage />)
    },
    {
        icon: Users,
        label: "Especialistas",
        href: "especialistas",
        element: (<ListEspecialistasPage />)
    },
];

const pacienteRoutes = [
    {
        icon: CalendarSearch,
        label: "Mis Citas",
        href: "citas",
        element: (<PacienteCitasPage />)
    },
];

const especialistaRoutes = [
    {
        icon: User,
        label: "Pacientes",
        href: "pacientes",
        element: (<ListPacientesPage />)
    },
    {
        icon: CalendarSearch,
        label: "Citas",
        href: "citas",
        element: (<EspecialistaCitasPage />)
    },
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