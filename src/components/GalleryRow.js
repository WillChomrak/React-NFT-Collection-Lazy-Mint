import React from 'react'
import { Image, Col, Row } from 'react-bootstrap';

const GalleryRow = (props) => {
    
    const imageStyle = {border: "none", padding: "0", marginBottom: "25px"};
    return (   
        <>
            <Row>
            <Col xs={12} sm={4} md={2}>
                <Image src={imgUrl(props.iteration, 1)} style={imageStyle} thumbnail />
            </Col>
            <Col xs={12} sm={4} md={2}>
                <Image src={imgUrl(props.iteration, 2)} style={imageStyle} thumbnail />
            </Col>
            <Col xs={12} sm={4} md={2}>
                <Image src={imgUrl(props.iteration, 3)} style={imageStyle} thumbnail />
            </Col>
            <Col xs={12} sm={4} md={2}>
                <Image src={imgUrl(props.iteration, 4)} style={imageStyle} thumbnail />
            </Col>
            <Col xs={12} sm={4} md={2}>
                <Image src={imgUrl(props.iteration, 5)} style={imageStyle} thumbnail />
            </Col>
            <Col xs={12} sm={4} md={2}>
                <Image src={imgUrl(props.iteration, 6)} style={imageStyle} thumbnail />
            </Col>
            </Row>
        </>
    )
    function imgUrl(iteration, position) {
        const number = (iteration * 6) + position;
        return "/img/gallery/TEST" + number + ".png" 
    }
}

export default GalleryRow
