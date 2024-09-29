import { Container, Row } from 'react-bootstrap'
import BookCard from '../BookCard/BookCard'
import { useContext } from 'react'
import { BookContext } from '../context/BookContext'
import { DarkModeContext } from '../context/DarkModeContext'

const MainSection = () => {
    const { books } = useContext(BookContext)
    const { isDark } = useContext(DarkModeContext)
    return (
        <main className={isDark ? 'bg-dark text-white' : 'bg-light text-dark'}>
            <Container>
                <Row className="gy-2">
                    {books &&
                        books
                            .slice(0, 20)
                            .map((book) => (
                                <BookCard
                                    key={book.asin}
                                    title={book.title}
                                    price={book.price}
                                    category={book.category}
                                    img={book.img}
                                    asin={book.asin}
                                />
                            ))}
                </Row>
            </Container>
        </main>
    )
}

export default MainSection
