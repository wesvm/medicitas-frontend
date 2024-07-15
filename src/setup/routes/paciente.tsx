import { CalendarSearch, Contact } from "lucide-react";
import { RouteProps } from ".";
import { lazy } from "react";

export const pacientesNavRoutes = [
    {
        icon: CalendarSearch,
        label: "Mis Citas",
        path: "citas",
    },
    {
        icon: Contact,
        label: "Mi perfil",
        path: "perfil"
    }
]

export const pacienteRoutes: RouteProps = {
    children: [
        {
            path: "citas",
            element: lazy(async () => await import("@/pages/paciente/PacienteCitasPage")),
        },
        {
            path: "perfil",
            element: lazy(async () => await import("@/pages/PerfilPage")),
        }
    ]
};
