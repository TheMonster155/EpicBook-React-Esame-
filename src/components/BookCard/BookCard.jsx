import { Button, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import './BookCard.css'
import { useContext } from 'react'
import Swal from 'sweetalert2'
import { SelectContext } from '../context/SelectContext'
import { useNavigate } from 'react-router-dom'
import { DarkModeContext } from '../context/DarkModeContext'

const BookCard = ({ price, category, title, img, asin }) => {
    const { selectAsin, toggleAsin } = useContext(SelectContext)
    const { isDark } = useContext(DarkModeContext)
    const isSelected = selectAsin === asin
    const navigate = useNavigate()

    const redirectDetails = () => {
        navigate(`/book/${asin}`)
    }

    const toggleIsSelect = () => {
        toggleAsin(asin) // Chiama la funzione di contesto per cambiare l'asin selezionato
        Swal.fire({
            title: `${title}`,
            text: `Hai selezionato "${title}"`, // Corretta la sintassi con le virgolette
            icon: 'info',
            confirmButtonText: 'Ok',
        })
    }

    const selectedCardStyle = isSelected ? 'border-5 border-danger' : ''

    return (
        <Col sm={12} md={6} lg={3}>
            <Card
                className={`h-100 custom ${isDark ? 'border-3 white' : ''} ${selectedCardStyle}`} // Applica la classe selezionata
                onClick={() => toggleIsSelect(asin)}
            >
                <Card.Img
                    variant="top"
                    className="h-100 w-100 object-fit-cover"
                    src={img}
                />
                <Card.Body
                    className={` custom-body ${
                        isDark ? 'bg-dark text-light' : 'bg-light text-dark'
                    }`}
                >
                    <Card.Title>{category}</Card.Title>
                    <Card.Text className="text-truncate">{title}</Card.Text>
                    <Card.Text>{price}£</Card.Text>
                    <Button
                        onClick={redirectDetails}
                        className="custom-button btn"
                    >
                        Details
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default BookCard
