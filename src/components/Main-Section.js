import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import background1 from "../img/background1.png";


const MainSection = () => {

    return (
        <section id="main" style={{backgroundImage: "url(" + background1 + ")"}}>
            <Row className="align-items-center, g-0">
                <Col md={{ span: 6, offset: 3 }}>
                    <h1>NFT Collection Name</h1>
                    <div className="main-description">
                        <p>This would be an excellent place for a description of 
                        your project. Maybe something about being a collection of 10,000 cool and unique NFTs?
                        Maybe something about what blockchain they're on? Whatever you think is important.</p>
                        <br />
                    </div>
                    <Container>
                        <Navbar style={{display: "block"}}>
                        <Nav.Link href="/mint" ><button className="mint-btn" >MINT</button></Nav.Link>
                        </Navbar>
                    </Container>
                </Col>
            </Row>
        </section>
    )
}

export default MainSection
