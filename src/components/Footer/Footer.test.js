import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { DarkModeContext } from '../context/DarkModeContext' // Modifica il percorso se necessario
import Footer from './Footer' // Modifica il percorso se necessario

const renderFooterWithContext = (value) => {
    return render(
        <DarkModeContext.Provider value={value}>
            <Footer />
        </DarkModeContext.Provider>
    )
}

describe('Componente Footer', () => {
    test('renderizza il footer con il titolo corretto e le icone social', () => {
        const contextValue = { isDark: false, handleDarkMode: jest.fn() }
        renderFooterWithContext(contextValue)

        // Controlla se il titolo è presente
        expect(screen.getByText(/book store/i)).toBeInTheDocument()

        // Controlla se le icone social sono presenti
        expect(screen.getByTitle('A')).toBeInTheDocument() // Twitter
        expect(screen.getByTitle('B')).toBeInTheDocument() // Tiktok
        expect(screen.getByTitle('C')).toBeInTheDocument() // Instagram
    })

    test('cambia modalità scura', () => {
        const handleDarkMode = jest.fn()
        const contextValue = { isDark: false, handleDarkMode }

        const { rerender } = renderFooterWithContext(contextValue)

        // Controlla il testo del pulsante iniziale
        expect(
            screen.getByRole('button', { name: /light mode/i })
        ).toBeInTheDocument()

        // Simula il click sul pulsante
        fireEvent.click(screen.getByRole('button', { name: /light mode/i }))

        // Controlla se la funzione per cambiare modalità è stata chiamata
        expect(handleDarkMode).toHaveBeenCalledTimes(1)

        // Rendi di nuovo il componente con la modalità scura attivata
        rerender(
            <DarkModeContext.Provider value={{ isDark: true, handleDarkMode }}>
                <Footer />
            </DarkModeContext.Provider>
        )

        // Controlla il testo aggiornato del pulsante
        expect(
            screen.getByRole('button', { name: /dark mode/i })
        ).toBeInTheDocument()
    })

    test('applica gli stili corretti in base alla modalità scura', () => {
        const contextValueDark = { isDark: true, handleDarkMode: jest.fn() }
        const { container: containerDark } =
            renderFooterWithContext(contextValueDark)

        // Controlla se il footer ha le classi della modalità scura
        expect(containerDark.firstChild).toHaveClass('bg-dark', 'text-light')

        // Rendi di nuovo il componente con la modalità chiara attivata
        const contextValueLight = { isDark: false, handleDarkMode: jest.fn() }
        const { container: containerLight } =
            renderFooterWithContext(contextValueLight)

        // Controlla se il footer ha le classi della modalità chiara
        expect(containerLight.firstChild).toHaveClass('bg-light', 'text-dark')
    })
})
