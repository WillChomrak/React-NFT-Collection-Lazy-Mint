import React from 'react';
import { Navbar, Nav, Image, Container, NavDropdown } from 'react-bootstrap';
import f_boi from '../img/f-boy.png';
import NavLinks from "./NavLinks";

const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" style={{backgroundColor: "#fd7d58"}} fixed="top">
                <Container>
                <Navbar.Brand className="justify-content-center" href="/" >
                    <Image src={f_boi} style={{height: "50px", textAlign: "center"}}></Image>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">          
                    </Nav>
                    <NavLinks />
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigation
