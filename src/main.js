import React from 'react';
import { Container, Row, Col, Carousel, CarouselItem, Nav, Navbar } from 'react-bootstrap'
import { MDBCol } from "mdbreact";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './css/style.css'
import './css/main.css'

import carousel01 from './image/carousel01.png'
import carousel02 from './image/carousel02.png'
import carousel03 from './image/carousel03.png'
import title from './image/title.png'
import coin from './image/coin.png'


class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/* Navbar on the top ----------------------------*/}
                <Navbar className='navbar' bg='dark' expand='lg' collapseOnSelect variant="dark">
                    <Navbar.Brand href="#home">
                        <div className='logo'>
                            <div>
                                <img src={title} height='100%' width='100%' />
                            </div>
                        </div>
                    </Navbar.Brand>

                    <Navbar.Toggle className='' />

                    <Navbar.Collapse className='hamburger' >
                        <Nav className="ms-auto" >
                            <Nav.Link></Nav.Link>
                            <Nav.Link href="#home" className='nav_title'>home</Nav.Link>
                            <Nav.Link href="#about" className='nav_title'>about</Nav.Link>
                            <Nav.Link href="#grade" className='nav_title'>grade</Nav.Link>
                            <Nav.Link href="#product" className='nav_title'>product</Nav.Link>
                            <Nav.Link href="#cart" className='nav_title'>cart</Nav.Link>
                            <Nav.Link></Nav.Link>
                            <MDBCol md="6" className='center t'>
                                <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                            </MDBCol>
                            <Nav.Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Container>
                    </Container>
                </Navbar>

                {/* Carousel for main home page ----------------------------*/}
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
                {/* Footer---------------------------- */}
                <footer>
                    <Row>
                        <Col sm={12} md={6} className='footer_item center'>
                            <div>
                                <img src={title} height='100%' width='100%' />
                            </div>
                        </Col>

                        <Col sm={12} md={6} className='footer_item'>
                            <h4>e-mail</h4>
                            <p>
                                t110590002@ntut.org.tw<br></br>
                                t110590011@ntut.org.tw<br></br>
                                t110590015@ntut.org.tw<br></br>
                                t110590056@ntut.org.tw<br></br>
                            </p>
                            <br></br>
                            <h4>NTUT</h4>
                            <p>
                                computer science and information engineering
                            </p>
                            <hr className='hr_white'></hr>
                            <p>© 2022</p>
                        </Col>

                    </Row>
                </footer>
            </div >
        );
    }
}

export default Main;