import { Col, Container, Row } from 'react-bootstrap'
import { navLinks } from '../../components/dataSource/navData'
import {
    AccessibilityOutline,
    AtOutline,
    LogoInstagram,
    LogoTiktok,
    LogoTwitter,
} from 'react-ionicons'
import { useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeContext'

const Footer = () => {
    const { isDark } = useContext(DarkModeContext)
    return (
        <footer
            className={`text-center py-3 ${isDark ? 'bg-dark text-light' : 'bg-light text-dark'}`}
        >
            <Container>
                <Row>
                    <Col>
                        <div className="d-flex flex-column gap-2 justify-content-center align-items-center">
                            <div>
                                <h2>Book Store</h2>
                            </div>

                            <div className="d-flex gap-3">
                                {navLinks.map((link) => (
                                    <a
                                        className={` text-decoration-none ${isDark ? 'text-white' : 'text-dark'}`}
                                        href={link.href}
                                    >
                                        {link.text}
                                    </a>
                                ))}
                            </div>

                            <div className="d-flex gap-3 align-items-center justify-content-center">
                                <LogoTwitter
                                    color={isDark ? 'white' : 'dark'}
                                    title="A"
                                    height="40px"
                                    width="40px"
                                />

                                <LogoTiktok
                                    color={isDark ? 'white' : 'dark'}
                                    title="B"
                                    height="40px"
                                    width="40px"
                                />

                                <LogoInstagram
                                    color={isDark ? 'white' : 'dark'}
                                    title="C"
                                    height="40px"
                                    width="40px"
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
