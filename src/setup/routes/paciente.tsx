import { CalendarSearch } from "lucide-react";
import { RouteProps } from ".";
import { lazy } from "react";

export const pacientesNavRoutes = [
    {
        icon: CalendarSearch,
        label: "Mis Citas",
        path: "citas",
    },
]

export const pacienteRoutes: RouteProps = {
    children: [
        {
            path: "citas",
            element: lazy(async () => await import("@/pages/paciente/PacienteCitasPage")),
        }
    ]
};
