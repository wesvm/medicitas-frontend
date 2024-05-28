import { createRoot } from 'react-dom/client'
import App from './setup/App.tsx'
import './index.css'
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/theme-provider.tsx'
import { BrowserRouter } from 'react-router-dom'

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <ThemeProvider defaultTheme="system" storageKey="ui-theme">
    <BrowserRouter>
      <App />
      <Toaster richColors />
    </BrowserRouter>
  </ThemeProvider>
)
