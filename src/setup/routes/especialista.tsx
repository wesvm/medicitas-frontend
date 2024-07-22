import { CalendarSearch, Contact, Stethoscope, User } from "lucide-react";
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
        icon: Stethoscope,
        label: "Consultas",
        path: "consultas",
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
            element: lazy(async () => await import("@/pages/especialista/HistorialConsultasPage")),
        },
        {
            path: "pacientes/:id/historial-consultas",
            element: lazy(async () => await import("@/pages/paciente/HistorialConsultasPage")),
        },
        {
            path: "pacientes/:id/citas",
            element: lazy(async () => await import("@/pages/paciente/HistorialCitasPage")),
        },
        {
            path: "pacientes/nuevo",
            element: lazy(async () => await import("@/pages/admin/parts/agregar-paciente/agregar-part")),
        },
        {
            path: "citas",
            element: lazy(async () => await import("@/pages/especialista/EspecialistaCitasPage")),
        },
        {
            path: "consultas",
            element: lazy(async () => await import("@/pages/especialista/ConsultasPage")),
        },
        {
            path: "perfil",
            element: lazy(async () => await import("@/pages/PerfilPage")),
        }
    ]
};
