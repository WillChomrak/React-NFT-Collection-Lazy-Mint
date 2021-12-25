import React from 'react';
import { Navbar, Nav, Container, Col, Row } from 'react-bootstrap';
import NavLinks from "./NavLinks";

const Footer = () => {
    return (
        // bg="dark" variant="dark" 
        <Row className='g-0'>
        <Col md={{ span: 10, offset: 1 }} className="footer-nav">
            <Navbar collapseOnSelect expand="lg">
                <Container>
                <Navbar.Brand className="justify-content-center" href="/" >
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    
                    </Nav>
                    <NavLinks />
                </Navbar.Collapse>
                </Container>
            </Navbar>
            <p className="footer-copyright">
                Website by &copy;  
                <a href="https://github.com/WillChomrak?tab=repositories" className="footer-link"> Will Chomrak</a>
            </p>
        </Col>
        </Row>
    )
}

export default Footer
