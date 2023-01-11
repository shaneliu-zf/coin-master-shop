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

function About() {
    return (
        <div className='whole_bg'>
            <div>
                <div className='about_background'></div>
                <div className='about'>
                    <h2>ABOUT</h2>
                    <br></br>
                    <p>
                        Coins is truly a professional coin sales website, with rich coin knowledge and professional teams. Our founding members ZF, nonorze, TYK, and Corexin. have many years of coin collection experience and a deep understanding of coins. Our team carefully selects a variety of top-quality coins and provides professional purchase advice for users. Coins website also regularly organizes various coin exhibitions and events, allowing users to directly understand the coins and interact with other coin enthusiasts.
                    </p>
                    <p>Shopping for coins on Coins website not only allows you to get quality coins, but also enjoy the comprehensive services we provide, including shopping guarantees, privacy protection, and professional customer service, among others. Welcome to Coins website, enjoy the wonderful coin journey.
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
                            <h5 className='blue_word'>unsplash</h5>
                            https://unsplash.com/
                            <br></br> <br></br>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>information about coins</Accordion.Header>
                        <Accordion.Body>
                            <h5 className='blue_word'>what is grade</h5>
                            https://river1219.pixnet.net/blog/post/270257018
                            <br></br><br></br>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>other</Accordion.Header>
                        <Accordion.Body>
                            <h5 className='blue_word'>ebay</h5>
                            https://www.ebay.com/
                            <br></br><br></br>

                            <h5 className='blue_word'>shopee</h5>
                            https://shopee.tw/
                            <br></br><br></br>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
}

export default About;