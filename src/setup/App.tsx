import { Route, Routes } from 'react-router-dom';

import DashboardLayout from '@/setup/DashboardLayout';

import { LoginPage } from '@/pages/LoginPage';
import { CalendarSearch } from 'lucide-react';
import { WelcomePage } from '@/pages/WelcomePage';

const pacienteRoutes = [
  {
    icon: CalendarSearch,
    label: "Mis Citas",
    href: "mis-citas",
    element: (<div>estas son mis citas</div>)
  }
];

export const guestRoutes = pacienteRoutes.map(route => ({
  ...route,
  href: `/paciente/${route.href}`
}));

function App() {

  const proutes = pacienteRoutes;

  return (
    <Routes>
      <Route path='*' element={<div>404 not found</div>} />
      <Route path='/' element={<LoginPage />} />

      <Route path='/paciente' element={<DashboardLayout />}>
        <Route index element={<WelcomePage />} />
        {proutes.map((route) => (
          <Route
            key={route.href}
            path={route.href}
            element={route.element}
          />
        ))}
      </Route>

    </Routes>
  )
}

export default App