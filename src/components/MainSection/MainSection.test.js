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
    it('should not select a book  ', () => {
        const selectContextValue = {
            selectAsin: null,
            setSelectAsin: mockSetSelectAsin,
        }

        expect(selectContextValue.selectAsin).toBeNull()
    })

    it('should call setSelectAsin when clicking on a book', () => {
        const selectContextValue = {
            selectAsin: null,
            setSelectAsin: mockSetSelectAsin,
        }

        selectContextValue.setSelectAsin('123')

        expect(mockSetSelectAsin).toHaveBeenCalledWith('123')
    })

    it('should make null selectAsin initially', () => {
        const selectContextValue = {
            selectAsin: null,
            setSelectAsin: mockSetSelectAsin,
        }

        expect(selectContextValue.selectAsin).toBeNull()
    })

    it('should load reviews at the click of a book', () => {
        const selectContextValue = {
            selectAsin: null,
            setSelectAsin: mockSetSelectAsin,
        }

        selectContextValue.setSelectAsin('123')

        expect(mockSetSelectAsin).toHaveBeenCalledWith('123')
    })
})
