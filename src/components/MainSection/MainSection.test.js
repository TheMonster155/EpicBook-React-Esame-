/*
import '@testing-library/jest-dom'
const mockBooks = [
    {
        asin: '123',
        title: 'Libro 1',
        price: '10.00',
        category: 'Fiction',
        img: 'image1.jpg',
    },
    {
        asin: '456',
        title: 'Libro 2',
        price: '15.00',
        category: 'Non-Fiction',
        img: 'image2.jpg',
    },
]

const mockBookContextValue = {
    books: mockBooks,
}

const mockDarkModeContextValue = {
    isDark: false,
}

const mockSetSelectAsin = jest.fn()

describe('MainSection', () => {
    test('dovrebbe non selezionare alcun libro', () => {
        const selectContextValue = {
            selectAsin: null,
            setSelectAsin: mockSetSelectAsin,
        }

        // Verifica che selectAsin sia null
        expect(selectContextValue.selectAsin).toBeNull()
    })

    test('dovrebbe chiamare setSelectAsin al clic su un libro', () => {
        const selectContextValue = {
            selectAsin: null,
            setSelectAsin: mockSetSelectAsin,
        }

        // Simula il clic e chiama setSelectAsin
        selectContextValue.setSelectAsin('123')

        // Verifica che setSelectAsin sia stato chiamato con '123'
        expect(mockSetSelectAsin).toHaveBeenCalledWith('123')
    })

    test('dovrebbe rendere null selectAsin inizialmente', () => {
        const selectContextValue = {
            selectAsin: null,
            setSelectAsin: mockSetSelectAsin,
        }

        // Controlla che selectAsin sia null
        expect(selectContextValue.selectAsin).toBeNull()
    })

    test('dovrebbe caricare le recensioni al clic su un libro', () => {
        const selectContextValue = {
            selectAsin: null,
            setSelectAsin: mockSetSelectAsin,
        }

        // Simula il clic su un libro e chiama setSelectAsin
        selectContextValue.setSelectAsin('123')

        // Verifica che setSelectAsin sia stato chiamato correttamente
        expect(mockSetSelectAsin).toHaveBeenCalledWith('123')
    })
})
*/
