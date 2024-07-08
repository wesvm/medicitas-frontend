import { CalendarSearch, User } from "lucide-react";
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
        }
    ]
};
