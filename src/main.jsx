import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Importiamo il BookContextProvider
import { BookContextProvider } from './components/context/BookContext'
import { DarkModeContextProvider } from './components/context/DarkModeContext.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <DarkModeContextProvider>
            <BookContextProvider>
                <App />
            </BookContextProvider>
        </DarkModeContextProvider>
    </StrictMode>
)
