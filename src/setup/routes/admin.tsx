import { Contact, FileBarChart, User, Users } from "lucide-react";
import { RouteProps } from ".";
import { lazy } from "react";

export const adminNavRoutes = [
    {
        icon: FileBarChart,
        label: "Reportes",
        path: "reportes",
    },
    {
        icon: User,
        label: "Pacientes",
        path: "pacientes",
    },
    {
        icon: Users,
        label: "Especialistas",
        path: "especialistas",
    },
    {
        icon: Contact,
        label: "Mi perfil",
        path: "perfil"
    }
]

export const adminRoutes: RouteProps = {
    children: [
        {
            path: "pacientes",
            element: lazy(async () => await import("@/pages/admin/ListPacientesPage")),
        },
        {
            path: "especialistas",
            element: lazy(async () => await import("@/pages/admin/ListEspecialistasPage")),
        },
        {
            path: "reportes",
            element: lazy(async () => await import("@/pages/admin/ReportesPage")),
        },
        {
            path: "perfil",
            element: lazy(async () => await import("@/pages/PerfilPage")),
        }
    ]
};
