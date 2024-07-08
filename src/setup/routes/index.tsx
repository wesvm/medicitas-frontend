import { USER_ROLE } from "@/lib/const";
import { Fragment, LazyExoticComponent, Suspense } from "react";
import { Route, Outlet } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { adminNavRoutes } from "./admin";
import { pacientesNavRoutes } from "./paciente";
import { especialistaNavRoutes } from "./especialista";

export interface RouteProps {
    path?: string;
    element?: LazyExoticComponent<() => JSX.Element> | null;
    layout?: LazyExoticComponent<(props: { children: React.ReactNode }) => JSX.Element> | null;
    guard?: LazyExoticComponent<(props: { children: React.ReactNode }) => JSX.Element> | null;
    children?: RouteProps[];
}

export const renderRoutes = (routes: RouteProps[]) => {
    return routes.map((route, index) => {
        const Component = route.element || Fragment;
        const Layout = route.layout || Fragment;
        const Guard = route.guard || Fragment;
        return (
            <Route
                key={index}
                path={route.path}
                element={
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Guard>
                            <Layout>{route.children ? <Outlet /> : <Component />}</Layout>
                        </Guard>
                    </Suspense>
                }
            >
                {route.children && renderRoutes(route.children)}
            </Route>
        );
    });
}

const appNavRoutes = () => {
    const { profile } = useAuth();

    switch (profile?.account.rol) {
        case USER_ROLE.ADMIN:
            return adminNavRoutes;
        case USER_ROLE.PACIENTE:
            return pacientesNavRoutes;
        case USER_ROLE.ESPECIALISTA:
            return especialistaNavRoutes;
        default:
            return [];
    }
};

export default appNavRoutes;