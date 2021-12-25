import React from 'react'
import GalleryRow from './GalleryRow';
import { Container, Row, Col } from 'react-bootstrap';

const Gallery = () => {
    return (      
      <Container style={{paddingTop: "100px"}}>
          <h2 className="special-font">Check out these masterpeices</h2>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <p className="gallery-description">I made these gorgeous specimens as a test run for another generative NFT collection. They're just 
                so beautiful I couldn't resist using them to demonstrate this gallery feature. Words to Live (,Laugh, and Love) by.
              </p>
            </Col>
          </Row>
          <div >
          {[...Array(6)].map((x, i) => // Change the number '6' to reflect the number of rows you want
            <GalleryRow iteration={i} />
          )}
          </div>
        </Container>
    )
}

export default Gallery
