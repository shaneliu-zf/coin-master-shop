import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/style.css'
import '../css/about.css'

import nonorze from '../image/nonorze.png'
import shane from '../image/shane.png'
import tyk from '../image/tyk.png'
import star from '../image/star.png'

function About(){
    return (
            <div className='whole_bg'>
                <div>
                    <div className='about_background'></div>
                    <div className='about'>
                        <h2>ABOUT</h2>
                        <br></br>
                        <p>
                            say anything cool, the text contents
                            say anything cool, the text contents
                            say anything cool, the text contents
                            say anything cool, the text contents
                            say anything cool, the text contents
                            say anything cool, the text contents
                            say anything cool, the text contents
                            say anything cool, the text contents
                            say anything cool, the text contents
                            say anything cool, the text contents
                            say anything cool, the text contents
                        </p>

                        <p>
                            say anything cool, the text contents
                            say anything cool, the text contents
                            say anything cool, the text contents
                            say anything cool, the text contents
                            say anything cool, the text contents
                            say anything cool, the text contents
                            say anything cool, the text contents
                            say anything cool, the text contents
                            say anything cool, the text contents
                            say anything cool, the text contents
                            say anything cool, the text contents
                        </p>
                    </div>
                </div>

                <div className='about'>
                    <h2>MEMBERS</h2>
                    <br></br>
                    <Container>
                        <Row>
                            <Col sm={12} md={3}></Col>
                            <Col sm={12} md={3}>
                                <img src={nonorze} className='rotate up' width='80%'></img>
                            </Col>
                            <Col sm={12} md={1}></Col>
                            <Col sm={12} md={3}>
                                <img src={shane} className='rotate down' width='80%'></img>
                            </Col>
                            <Col sm={12} md={2}></Col>

                            <Col sm={12} md={3}></Col>
                            <Col sm={12} md={2}></Col>
                            <Col sm={12} md={3}>
                                <img src={tyk} className='rotate up' width='80%'></img>
                            </Col>
                            <Col sm={12} md={1}></Col>
                            <Col sm={12} md={3}>
                                <img src={star} className='rotate down' width='80%'></img>
                            </Col>

                            <Col sm={12}><br></br></Col>
                        </Row>
                    </Container>
                </div>

                <div className='about'>
                    <h2>REFERENCE</h2>
                    <br></br>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>images</Accordion.Header>
                            <Accordion.Body>
                                <h5 className='blue_word'>homepage image01</h5>
                                https://unsplash.com/photos/ANZudh6KOwk
                                <br></br> <br></br>

                                <h5 className='blue_word'>homepage image02</h5>
                                https://unsplash.com/photos/sf5vPAzMtkE
                                <br></br><br></br>

                                <h5 className='blue_word'>homepage image03</h5>
                                https://unsplash.com/photos/hBa5lZYp_9g
                                <br></br><br></br>

                                <h5 className='blue_word'>register and login image</h5>
                                https://unsplash.com/photos/yddF8bE4JTc
                                <br></br><br></br>

                                <h5 className='blue_word'>about image</h5>
                                https://unsplash.com/photos/o6PbmgNAFE4
                                <br></br><br></br>

                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>information about coins</Accordion.Header>
                            <Accordion.Body>
                                soon
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>other</Accordion.Header>
                            <Accordion.Body>
                                soon
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        );
}

export default About;