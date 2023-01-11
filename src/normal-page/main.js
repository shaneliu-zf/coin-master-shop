import { Carousel, CarouselItem, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import carousel01 from "../image/carousel01.png";
import carousel02 from "../image/carousel02.png";
import carousel03 from "../image/carousel03.png";
import each from "../image/each.png";
import kennedy from "../image/kennedy.png";
import walking_liberty from "../image/walking_liberty.png";
import React from "react";

import '../css/style.css'
import '../css/main.css'
function Main() {
    return (
        <div>
            <div className=" whole_bg">
                <Carousel className='carousel_background'>
                    <CarouselItem>
                        <Row>
                            <Col sm={12} md={4}>
                                <div className='carousel_item'>
                                    <h1 className='carousel_title'>
                                        MASTER OF COINS
                                    </h1>
                                    <br></br>
                                    <p>
                                        A website for people who loves coins.
                                        The website lists some ancient coin, has some product here,
                                        to let people buy one if they're interested.
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
                                        Listing some ancient coins, having some different categories.
                                        Various coins here to discover.

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
                                        Valuable coins here to collect.
                                        every coin here are unique.
                                    </p>
                                </div>
                            </Col>
                            <Col sm={12} md={8}>
                                <img src={carousel03} width='100%' />
                            </Col>
                        </Row>
                    </CarouselItem>
                </Carousel>
            </div>

            {/* New Arrival---------------------------- */}
            <div class="bg">
                <Container className='arrival'>
                    <h1 className='center arrival_title'>New Arrival</h1>
                    <Row className='item_inner'>
                        <Col sm={12} md={4}>
                            <div className='arrival_item'>
                                <Row>
                                    <Col sm={12}>
                                        <img src={each} width='100%' />
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
                                        <img src={kennedy} width='100%' />
                                    </Col>

                                    <Col>
                                        <hr className='hr_blue'></hr>
                                    </Col>

                                    <Col sm={12}>
                                        <h3 className='center arrival_content'>
                                            kennedy dollars
                                        </h3>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col sm={12} md={4}>
                            <div className='arrival_item'>
                                <Row>
                                    <Col sm={12}>
                                        <img src={walking_liberty} width='100%' />
                                    </Col>

                                    <Col>
                                        <hr className='hr_blue'></hr>
                                    </Col>

                                    <Col sm={12}>
                                        <h3 className='center arrival_content'>
                                            walking liberty dollars
                                        </h3>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </div>

        </div >
    );
}

export default Main;