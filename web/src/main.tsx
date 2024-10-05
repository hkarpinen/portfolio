import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/sass/custom.scss'
import {AuthProvider} from "./context/authContext.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";

createRoot(document.getElementById('root')!).render(
    <AuthProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </AuthProvider>
)
