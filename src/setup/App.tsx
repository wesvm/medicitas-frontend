import { Routes } from 'react-router-dom';
import { renderRoutes, RouteProps } from './routes';
import { lazy } from 'react';
import { useAuth } from './AuthContext';
import { USER_ROLE } from '@/lib/const';
import { adminRoutes } from './routes/admin';
import { pacienteRoutes } from './routes/paciente';
import { especialistaRoutes } from './routes/especialista';

const appRoutes = () => {
    const { profile } = useAuth();

    switch (profile?.account.rol) {
        case USER_ROLE.ADMIN:
            return adminRoutes;
        case USER_ROLE.PACIENTE:
            return pacienteRoutes;
        case USER_ROLE.ESPECIALISTA:
            return especialistaRoutes;
        default:
            return { children: [] };
    }
};

function App() {

    const routes: RouteProps[] = [
        {
            path: "/",
            element: lazy(async () => await import("@/pages/LoginPage")),
        },
        {
            path: "/dashboard",
            layout: lazy(async () => await import("@/setup/layout/DashboardLayout")),
            guard: lazy(async () => await import("@/setup/guards/AuthGuard")),
            children: [
                {
                    path: "/dashboard",
                    element: lazy(async () => await import("@/pages/WelcomePage"))
                },
                (appRoutes())
            ],
        },
        {
            path: "*",
            element: lazy(async () => await import("@/pages/NotFoundPage")),
        }
    ];

    return (
        <Routes>
            {renderRoutes(routes)}
        </Routes>
    )
}

export default App