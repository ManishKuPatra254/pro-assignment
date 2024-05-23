import React, { Fragment } from 'react'
import image_logo from '../images/MediCare+.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function CustomNav() {
    return (
        <Fragment>
            <>
                <Navbar expand="lg" className="navbar-custom mb-3">
                    <Container fluid>
                        <Navbar.Brand href="#">
                            <img
                                src={image_logo}
                                alt="MediCare+ logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
                        <Navbar.Offcanvas
                            id="offcanvasNavbar-expand-lg"
                            aria-labelledby="offcanvasNavbarLabel-expand-lg"
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Navbar.Brand href="#">
                                    <img
                                        src={image_logo}
                                        className="d-inline-block align-top"
                                        alt="MediCare+ logo"
                                    />
                                </Navbar.Brand>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3 items-center">
                                    <Nav.Link className='nav-links' href="#action1">Home</Nav.Link>
                                    <Nav.Link className='nav-links' href="#action2">About</Nav.Link>
                                    <Nav.Link className='nav-links' href="#action3">Services</Nav.Link>
                                    <Nav.Link className='nav-links' href="#action4">News</Nav.Link>
                                    <Button className='nav-button'>Contact</Button>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </>
        </Fragment>
    )
}
