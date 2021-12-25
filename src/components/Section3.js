import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';
import dogeBrogan from '../img/doge-brogan.jpg';

const Section3 = () => {
    const imageStyle = {border: "none", padding: "0", maxHeight: "300px"};

    return (   
        <section id="charity">
            <Row className="g-0" >
            <Col className="my-auto" md={5}>
                    <Image src={dogeBrogan} style={imageStyle}thumbnail></Image>
            </Col>
            <Col className="my-auto" md={6}>
                <h2 className="special-font">Another section!</h2>
                <br />
                <p>For this section we decided to play the charity card that is currently so popular with
                    NFT collections.
                </p>
                <p>Use it for whatever you think will make your art fly off the shelves. 
                    Your cool universe being built around NFT characters? The DAO that your 
                    neat tokens give your community members access to? Whatever works, amigo.
                </p>
            </Col>
            </Row>
        </section>
    )
}

export default Section3
