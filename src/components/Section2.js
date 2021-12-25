import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';

import dino from '../img/dino.jpg';

const Section2 = () => {
    const imageStyle = {border: "none", padding: "0", maxHeight: "300px"};

    return (
        <section id="tell-me-more">
            <Row className="g-0" >
                <Col className="my-auto" md={{ span: 6, offset: 1 }}>
                    <h2 className="special-font">A bit more detail</h2><br />
                    <p>Keep those tidbits coming. Tell the people about all the potential attributes you have.
                        Maybe something about how some are super-rare. 
                    </p>
                    <p>I used this next paragraph to mention all the social media we used. Like Twitter, Tiktok, and Discord.
                        How can the people reach you? Is there anything else they should know before they ape in?
                    </p>
                </Col>
                <Col className="my-auto" md={5}>
                    <Image src={dino} style={imageStyle} thumbnail></Image>
                </Col>
            </Row>
        </section>
    )
}

export default Section2
