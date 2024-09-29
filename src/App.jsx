import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavbarCustom from '../src/components/Navbar/Navbar'
import Footer from '../src/components/Footer/Footer'
import WelcomeSection from '../src/components/WelcomeSection/WelcomeSection'
import MainSection from '../src/components/MainSection/MainSection'
import { BookContextProvider } from './components/context/BookContext'
import Swal from 'sweetalert2'

const App = () => {
    const sweetAlert = () => {
        Swal.fire({
            title: 'Welcome To My Page!',
            text: 'Enjoy browsing our book collection!',
            icon: 'success',
            confirmButtonText: 'Cool',
        })
    }

    return (
        <BookContextProvider>
            <NavbarCustom />
            <WelcomeSection sweetAlert={sweetAlert} />
            <MainSection />
            <Footer />
        </BookContextProvider>
    )
}

export default App
