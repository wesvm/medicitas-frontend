import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

import { Toaster } from 'sonner'

import AuthProvider from '@/setup/AuthContext.tsx'
import App from '@/setup/App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const container = document.getElementById("root");
const root = createRoot(container!);
const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <Toaster richColors />
    </AuthProvider>
  </QueryClientProvider>
)
