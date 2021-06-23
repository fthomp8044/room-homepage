import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


function HomeScreen() {
    return (
        <div>
            <Container >
                <Row>
                    <Col sm={12} md={8} lg={8} className='desktopImage'>
                        <div clasName='desktopImage'>
                            <Image src='../images/desktop-image-hero-1.jpg' fluid />
                        </div>
                    </Col>
                    <Col className='roomDescprition' md={4} lg={4} >
                        <div >
                            <div>
                                <h1>Discover innovative ways to decorate</h1>
                            </div>
                            <div>
                                <p>We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.</p>
                            </div>
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomeScreen
