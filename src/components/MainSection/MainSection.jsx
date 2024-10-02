import { Col, Container, Row } from 'react-bootstrap'
import BookCard from '../BookCard/BookCard'
import { useContext } from 'react'
import { BookContext } from '../context/BookContext'
import { DarkModeContext } from '../context/DarkModeContext'
import { SelectContext } from '../context/SelectContext'
import AllComments from '../AllCommets/AllComments'

const MainSection = () => {
    const { books } = useContext(BookContext)
    const { isDark } = useContext(DarkModeContext)
    const { selectAsin } = useContext(SelectContext)

    return (
        <main className={isDark ? 'bg-dark text-white' : 'bg-light text-dark'}>
            <Container fluid>
                <Row className="gy-2">
                    <Col sm={6} md={6}>
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
                    </Col>

                    <Col sm={6} md={6}>
                        {selectAsin && <AllComments asin={selectAsin} />}
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default MainSection
