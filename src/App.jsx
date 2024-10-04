import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import About from './pages/About/About'
import BookDay from './pages/BookDay/BookDay'
import PageError from './pages/PageError/PageError'
import BookDetails from './pages/BookDetails/BookDetails'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/bookDay" element={<BookDay />} />
                <Route path="/book/:bookId" element={<BookDetails />} />
                <Route path="*" element={<PageError />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
