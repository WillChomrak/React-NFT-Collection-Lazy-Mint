import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';

import harold from '../img/hide-the-pain-harold.jpg';
import gf from '../img/gf.png';
import doge from '../img/doge.jpg';
import cat from '../img/cat.jpg';

const Section4 = () => {
    const imageStyle = {border: "none", padding: "0", marginTop: "25px", maxHeight: "200px"};

    return (   
        <section id="team">
            <Row className="g-0" >
                <h2 className="special-font">The Team</h2>
                <Row className="g-0">
                <Col sm={6} md={3}>
                    <Image src={harold} style={imageStyle} thumbnail></Image>
                    <p className="team-role special-font">Artist</p>
                    <p className="team-blurb">An artist with 1 Million years of experience 
                    from cave drawings to glass blowing to digital monke.</p>
                </Col>
                
                <Col sm={6} md={3}>
                    <Image src={gf} style={imageStyle} thumbnail></Image>
                    <p className="team-role special-font">Another artist?</p>
                    <p className="team-blurb">Do you really need two artists? Maybe? I guess this
                    artist is the one who sculpts your NFTs from marble before you upload that chunk of rock to the blockchain.</p>
                </Col>
                <Col sm={6} md={3}>
                    <Image src={doge} style={imageStyle} thumbnail></Image>
                    <p className="team-role special-font">Programmer</p>
                    <p className="team-blurb">This person takes all the ingredients and 
                    mixes 'em up into a delicious NFT collection soup. They also write the smart contract to make sure your
                    art lives forever.</p>
                </Col>
                <Col sm={6} md={3}>
                    <Image src={cat} style={imageStyle} thumbnail></Image>
                    <p className="team-role special-font">Web Designer</p>
                    <p className="team-blurb">Hopefully you don't lift this code from 
                    my Github and not put me here. Just link me - keep the pic.. unless someone owns it.. then don't</p>
                </Col>
                </Row> 
            </Row>
        </section>
    )
}

export default Section4
