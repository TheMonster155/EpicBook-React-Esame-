import { render, screen } from '@testing-library/react'
import AllComments from './AllComments'
import { DarkModeContext } from '../context/DarkModeContext'
import { json } from 'react-router-dom'

describe('renders AllComments', () => {
    it(' should renders CommentArea component correctly', async () => {
        // Mock della funzione fetch per simulare il recupero dei commenti
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                json: () =>
                    Promise.resolve([
                        {
                            _id: '1',
                            author: 'John',
                            comment: 'Great book!',
                            rate: 5,
                        },
                        {
                            _id: '2',
                            author: 'Jane',
                            comment: 'Not bad',
                            rate: 3,
                        },
                    ]),
            })
        )
        // Simuliamo il contesto per la modalità scura

        render(
            <DarkModeContext.Provider value={{ isDark: false }}>
                <AllComments asin="123" />
            </DarkModeContext.Provider>
        )

        // Verifica che il componente venga renderizzato e che i commenti siano visualizzati

        expect(await screen.findByText(/Great book!/i)).toBeInTheDocument()
        expect(await screen.findByText(/Not bad/i)).toBeInTheDocument()

        // Verifica che ci sia un elemento form per aggiungere o modificare i commenti

        expect(screen.getByPlaceholderText(/Rate/i)).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/Comment/i)).toBeInTheDocument()
    })

    it('renders fallback message when there are no comments', async () => {
        // Mock per simulare l'assenza di commenti
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve([]),
            })
        )

        render(
            <DarkModeContext.Provider value={{ isDark: false }}>
                <AllComments asin="123" />
            </DarkModeContext.Provider>
        )

        // Verifica che il messaggio di fallback venga visualizzato quando non ci sono commenti
        expect(
            await screen.findByText(/Non ci sono commenti per questo libro/i)
        ).toBeInTheDocument()
    })
})
