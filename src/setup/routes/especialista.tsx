import { CalendarSearch, Contact, User } from "lucide-react";
import { RouteProps } from ".";
import { lazy } from "react";

export const especialistaNavRoutes = [
    {
        icon: User,
        label: "Pacientes",
        path: "pacientes",
    },
    {
        icon: CalendarSearch,
        label: "Citas",
        path: "citas",
    },
    {
        icon: Contact,
        label: "Mi perfil",
        path: "perfil"
    }
]

export const especialistaRoutes: RouteProps = {
    children: [
        {
            path: "pacientes",
            element: lazy(async () => await import("@/pages/admin/ListPacientesPage")),
        },
        {
            path: "citas",
            element: lazy(async () => await import("@/pages/especialista/EspecialistaCitasPage")),
        },
        {
            path: "perfil",
            element: lazy(async () => await import("@/pages/PerfilPage")),
        }
    ]
};
