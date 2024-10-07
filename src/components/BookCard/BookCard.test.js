/*


import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { SelectContext } from '../context/SelectContext'
import { DarkModeContext } from '../context/DarkModeContext'
import BookCard from '../BookCard/BookCard'
import Swal from 'sweetalert2'

const mockToggleAsin = jest.fn()
const mockSelectAsin = '12345'

const renderBookCard = (props, contextValues = {}) => {
    return render(
        <SelectContext.Provider
            value={{ selectAsin: mockSelectAsin, toggleAsin: mockToggleAsin }}
        >
            <DarkModeContext.Provider value={contextValues}>
                <MemoryRouter>
                    <BookCard {...props} />
                </MemoryRouter>
            </DarkModeContext.Provider>
        </SelectContext.Provider>
    )
}

describe('BookCard Component', () => {
    const props = {
        price: '10.00',
        category: 'Fiction',
        title: 'Test Book',
        img: 'http://example.com/test-book.jpg',
        asin: '12345',
    }

    test('renders book card with correct information', () => {
        renderBookCard(props)
        expect(screen.getByText('Fiction')).toBeInTheDocument()
        expect(screen.getByText('Test Book')).toBeInTheDocument()
        expect(screen.getByText('10.00$')).toBeInTheDocument()
        expect(screen.getByRole('img')).toHaveAttribute('src', props.img)
    })

    test('calls toggleAsin and shows alert when clicked', () => {
        const swalSpy = jest
            .spyOn(Swal, 'fire')
            .mockImplementation(() => Promise.resolve())
        renderBookCard(props)

        fireEvent.click(screen.getByRole('img'))
        expect(mockToggleAsin).toHaveBeenCalledWith(props.asin)
        expect(swalSpy).toHaveBeenCalledWith({
            title: `${props.title}`,
            text: `Hai selezionato "${props.title}"`,
            icon: 'info',
            confirmButtonText: 'Ok',
        })
    })

    // Altri test...
})

   it('red border ', () => {
            const { getByText, getByRole, queryByText } = render(
                <MemoryRouter>
                    <CommentSelectedCardProvider>
                        <ThemeContextProvider>
                            <BookCard
                                img="124"
                                category="test"
                                title="title2"
                                asin="asin2"
                                price="15"
                            />
                            <BookCard
                                img="125"
                                category="test5"
                                title="title7"
                                asin="asin2"
                                price="14"
                            />
                        </ThemeContextProvider>
                    </CommentSelectedCardProvider>
                </MemoryRouter>
            )
        })

*/
import '@testing-library/jest-dom'
import BookCard from '../BookCard/BookCard'
import { render, fireEvent, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { SelectContextProvider } from '../context/SelectContext'
import { DarkModeContextProvider } from '../context/DarkModeContext'
import { BookContextProvider } from '../context/BookContext'

// Dati di test fittizi
const mockBooks = [
    {
        asin: '12345',
        img: 'image1.jpg',
        category: 'Fiction',
        title: 'Book One',
        price: 19.99,
    },
    {
        asin: '67890',
        img: 'image2.jpg',
        category: 'Non-Fiction',
        title: 'Book Two',
        price: 29.99,
    },
]

describe('BookCard Tests', () => {
    it('renders the correct number of BookCards', () => {
        render(
            <MemoryRouter>
                <SelectContextProvider>
                    <DarkModeContextProvider>
                        <BookContextProvider value={{ books: mockBooks }}>
                            {mockBooks.map((book) => (
                                <BookCard
                                    key={book.asin}
                                    img={book.img}
                                    category={book.category}
                                    title={book.title}
                                    asin={book.asin}
                                    price={book.price}
                                />
                            ))}
                        </BookContextProvider>
                    </DarkModeContextProvider>
                </SelectContextProvider>
            </MemoryRouter>
        )

        // Verifica che il numero di card renderizzate corrisponda al numero di libri
        const cards = screen.getAllByRole('img') // Trova tutte le immagini (o puoi usare un altro selettore)
        expect(cards.length).toBe(mockBooks.length) // Confronta con il mock
    })

    it('toggles selected-border on click', () => {
        render(
            <MemoryRouter>
                <SelectContextProvider>
                    <DarkModeContextProvider>
                        <BookContextProvider value={{ books: mockBooks }}>
                            {mockBooks.map((book) => (
                                <BookCard
                                    key={book.asin}
                                    img={book.img}
                                    category={book.category}
                                    title={book.title}
                                    asin={book.asin}
                                    price={book.price}
                                />
                            ))}
                        </BookContextProvider>
                    </DarkModeContextProvider>
                </SelectContextProvider>
            </MemoryRouter>
        )

        const firstCard = screen.getAllByRole('img')[0].closest('.card') // Ottieni la prima card
        const secondCard = screen.getAllByRole('img')[1].closest('.card') // Ottieni la seconda card

        // Verifica che la prima card non abbia la classe 'selected-border'
        expect(firstCard).not.toHaveClass('selected-border')

        // Simula un click sulla prima card
        fireEvent.click(firstCard)

        // Dopo il click, la prima card dovrebbe avere la classe 'selected-border'
        expect(firstCard).toHaveClass('selected-border')

        // Simula un click sulla seconda card
        fireEvent.click(secondCard)

        // La prima card non dovrebbe più avere la classe 'selected-border'
        expect(firstCard).not.toHaveClass('selected-border')

        // La seconda card dovrebbe avere la classe 'selected-border'
        expect(secondCard).toHaveClass('selected-border')
    })
})
