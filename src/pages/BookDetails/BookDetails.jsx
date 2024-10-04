import { useContext, useEffect, useState } from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { BookContext } from '../../components/context/BookContext'
import { DarkModeContext } from '../../components/context/DarkModeContext'
import NavbarCustom from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { APIKEY } from '../../constants'

const BookDetails = () => {
    const { bookId } = useParams()
    const { books } = useContext(BookContext)
    const bookSelect = books.find((book) => book.asin === bookId)
    const [comments, setComments] = useState([])
    const { isDark } = useContext(DarkModeContext)

    const ENDPOINT = `https://striveschool-api.herokuapp.com/api/books/${bookId}/comments/`

    const getCommentsRatings = async () => {
        if (!bookId) return
        try {
            const response = await fetch(ENDPOINT, {
                headers: {
                    Authorization: `Bearer ${APIKEY}`,
                },
            })
            if (response.ok) {
                const result = await response.json()
                setComments(result)
            } else {
                console.log('Error fetching comments:', response.status)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCommentsRatings()
    }, [bookId])

    return (
        <>
            <NavbarCustom />
            <Container
                fluid
                className={isDark ? 'bg-dark text-white' : 'bg-light text-dark'}
            >
                <Row>
                    {bookSelect ? (
                        <>
                            <Col sm={6} md={6} lg={6}>
                                <Card className="h-100">
                                    <Card.Img
                                        variant="top"
                                        src={bookSelect.img}
                                        className="h-75 w-100 object-fit-cover"
                                    />
                                    <Card.Body>
                                        <Card.Title>
                                            {bookSelect.title}
                                        </Card.Title>
                                        <Card.Text>
                                            {bookSelect.category}
                                        </Card.Text>
                                        <Card.Text>
                                            {bookSelect.price}£
                                        </Card.Text>
                                        <Card.Text>
                                            {bookSelect.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col sm={6} md={6} lg={6}>
                                <div>
                                    <h1>Comments</h1>
                                    <div className="mt-1">
                                        {comments.length > 0 ? (
                                            comments.map((comment) => (
                                                <p key={comment._id}>
                                                    {comment.comment} - Rating:{' '}
                                                    {comment.rate}
                                                </p>
                                            ))
                                        ) : (
                                            <p>No comments available</p>
                                        )}
                                    </div>
                                </div>
                            </Col>
                        </>
                    ) : (
                        <p>Nessun libro selezionato.</p>
                    )}
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default BookDetails
