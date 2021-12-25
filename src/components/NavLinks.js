import React from 'react';
import { Image, Nav } from 'react-bootstrap';
import twitter from '../img/social-twitter-white.png';
import tiktok from '../img/social-tiktok-white.png';

const NavLinks = () => {
    const navLinkStyle = {fontWeight: "bold", color: "white", fontSize: "18px" }
    return (
            <>
                <Nav>
                <Nav.Link href="/#tell-me-more" style={navLinkStyle}>Details</Nav.Link>
                <Nav.Link href="/#charity" style={navLinkStyle}>Charity</Nav.Link>
                <Nav.Link href="/#team" style={navLinkStyle}>The Team</Nav.Link>
                <Nav.Link href="/gallery" style={navLinkStyle}>Gallery</Nav.Link>
                <Nav.Link href="/mint" style={navLinkStyle}>Mint</Nav.Link>
                </Nav>
                <Nav style={{marginLeft: "40px"}}>
                <Nav.Link href="https://twitter.com/" ><Image src={twitter} style={{maxHeight: "30px"}}></Image></Nav.Link>
                <Nav.Link href="https://www.tiktok.com/" ><Image src={tiktok} style={{paddingLeft: "5px",maxHeight: "30px"}}></Image></Nav.Link>
                </Nav>
            </>
    )
}

export default NavLinks
