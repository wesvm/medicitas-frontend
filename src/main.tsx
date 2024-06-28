import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

import { Toaster } from 'sonner'

import AuthProvider from '@/setup/AuthContext.tsx'
import App from '@/setup/App.tsx'

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Toaster richColors />
  </AuthProvider>
)
