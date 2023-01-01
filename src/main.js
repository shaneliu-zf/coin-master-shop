import { Carousel, CarouselItem, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import title from "./image/title.png";
import { MDBCol } from "mdbreact";
import carousel01 from "./image/carousel01.png";
import carousel02 from "./image/carousel02.png";
import carousel03 from "./image/carousel03.png";
import coin from "./image/coin.png";
import React from "react";

import './css/style.css'
import './css/main.css'
function Main() {
    return (
        <div>
            <Carousel className='carousel_background'>
                <CarouselItem >
                    <Row>
                        <Col sm={12} md={4}>
                            <div className='carousel_item'>
                                <h1 className='carousel_title'>
                                    MASTER OF COINS
                                </h1>
                                <br></br>
                                <p>
                                    A website for selling ancient coins for people is
                                    A website for selling ancient coins for people is
                                    A website for selling ancient coins for people is
                                </p>
                            </div>
                        </Col>
                        <Col sm={12} md={8}>
                            <img src={carousel01} width='100%' />
                        </Col>
                    </Row>

                </CarouselItem>
                <CarouselItem>
                    <Row>
                        <Col sm={12} md={4}>
                            <div className='carousel_item'>
                                <h1 className='carousel_title'>
                                    ANCIENT COINS
                                </h1>
                                <br></br>
                                <p>
                                    A website for selling ancient coins for people is
                                    A website for selling ancient coins for people is
                                    A website for selling ancient coins for people is
                                </p>
                            </div>
                        </Col>
                        <Col sm={12} md={8}>
                            <img src={carousel02} width='100%' />
                        </Col>
                    </Row>

                </CarouselItem>
                <CarouselItem>
                    <Row>
                        <Col sm={12} md={4}>
                            <div className='carousel_item'>
                                <h1 className='carousel_title'>
                                    VALUABLE COINS
                                </h1>
                                <br></br>
                                <p>
                                    A website for selling ancient coins for people is
                                    A website for selling ancient coins for people is
                                    A website for selling ancient coins for people is
                                </p>
                            </div>
                        </Col>
                        <Col sm={12} md={8}>
                            <img src={carousel03} width='100%' />
                        </Col>
                    </Row>
                </CarouselItem>
            </Carousel>
            {/* New Arrival---------------------------- */}
            <Container className='arrival'>
                <h1 className='center arrival_title'>New Arrival</h1>
                <Row className='item_inner'>
                    <Col sm={12} md={4}>
                        <div className='arrival_item'>
                            <Row>
                                <Col sm={12}>
                                    <img src={coin} width='100%' />
                                </Col>

                                <Col>
                                    <hr className='hr_blue'></hr>
                                </Col>

                                <Col sm={12}>
                                    <h3 className='center arrival_content'>
                                        morgan dollars
                                    </h3>
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    <Col sm={12} md={4}>
                        <div className='arrival_item'>
                            <Row>
                                <Col sm={12}>
                                    <img src={coin} width='100%' />
                                </Col>

                                <Col>
                                    <hr className='hr_blue'></hr>
                                </Col>

                                <Col sm={12}>
                                    <h3 className='center arrival_content'>
                                        morgan dollars
                                    </h3>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div className='arrival_item'>
                            <Row>
                                <Col sm={12}>
                                    <img src={coin} width='100%' />
                                </Col>

                                <Col>
                                    <hr className='hr_blue'></hr>
                                </Col>

                                <Col sm={12}>
                                    <h3 className='center arrival_content'>
                                        morgan dollars
                                    </h3>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    );



}

export default Main;