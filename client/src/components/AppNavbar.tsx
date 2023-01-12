import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { PropsWithChildren } from 'react'

const AppNavbar = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Navbar expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">NOTES</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link href="/">Register</Nav.Link>
                            <Nav.Link href="/">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {children}
        </>
    )
}

export default AppNavbar
