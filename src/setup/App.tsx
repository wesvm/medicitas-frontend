import { Route, Routes } from 'react-router-dom';

import { LoginPage } from '@/pages/LoginPage';
import { WelcomePage } from '@/pages/WelcomePage';
import { ForgotPasswordPage } from '@/pages/ForgotPasswordPage';
import ProtectedRoute from './ProtectedRoute';
import DashboardLayout from './layout/DashboardLayout';
import appRoutes from './routes';

function App() {

    const routes = appRoutes();

    return (
        <Routes>
            <Route path='*' element={<div>404 not found</div>} />
            <Route path='/' element={<LoginPage />} />
            <Route path='/recuperar-contraseña' element={<ForgotPasswordPage />} />

            <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route index element={<WelcomePage />} />
                    {routes.map((route) => (
                        <Route
                            key={route.href}
                            path={route.href}
                            element={route.element}
                        />
                    ))}
                </Route>
            </Route>
        </Routes>
    )
}

export default App