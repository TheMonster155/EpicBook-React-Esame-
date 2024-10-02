import { Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import './BookCard.css'
import { useContext } from 'react'
import Swal from 'sweetalert2'
import { SelectContext } from '../context/SelectContext'

const BookCard = ({ price, category, title, img, asin }) => {
    const { selectAsin, toggleAsin } = useContext(SelectContext)
    const isSelected = selectAsin === asin

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
                className={`h-100 custom ${selectedCardStyle}`} // Corretta la sintassi della classe
                onClick={toggleIsSelect} // Chiama la funzione corretta qui
            >
                <Card.Img
                    variant="top"
                    className="h-100 w-100 object-fit-cover"
                    src={img}
                />
                <Card.Body>
                    <Card.Title>{category}</Card.Title>
                    <Card.Text className="text-truncate">{title}</Card.Text>
                    <Card.Text>{price}£</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default BookCard
