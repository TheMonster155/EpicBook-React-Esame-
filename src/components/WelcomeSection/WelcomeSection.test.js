import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import WelcomeSection from './WelcomeSection'
import { DarkModeContextProvider } from '../context/DarkModeContext' // Assicurati di importare il contesto
import { MemoryRouter } from 'react-router-dom'

// Mock della funzione sweetAlert
const mockSweetAlert = jest.fn()

describe('Test WelcomeSection ', () => {
    it(' should renders Welcome component', () => {
        render(
            <MemoryRouter>
                <DarkModeContextProvider>
                    <WelcomeSection sweetAlert={mockSweetAlert} />
                </DarkModeContextProvider>
            </MemoryRouter>
        )

        // Verifica che il titolo "Libro Del Giorno" venga renderizzato
        const titleElement = screen.getByText(/libro del giorno/i)
        expect(titleElement).toBeInTheDocument()
    })

    test('renders book details and buttons', () => {
        render(
            <MemoryRouter>
                <DarkModeContextProvider>
                    <WelcomeSection sweetAlert={mockSweetAlert} />
                </DarkModeContextProvider>
            </MemoryRouter>
        )

        // Verifica che il pulsante "Acquista" sia presente
        const purchaseButton = screen.getByText(/acquista/i)
        expect(purchaseButton).toBeInTheDocument()

        // Verifica che il pulsante "Dettagli" sia presente
        const detailsButton = screen.getByText(/dettagli/i)
        expect(detailsButton).toBeInTheDocument()
    })
})

//
