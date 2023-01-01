import React from 'react';
import { Container, Row, Col, Nav, Navbar, Button } from 'react-bootstrap'
import { MDBCol } from "mdbreact";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './css/style.css'
import './css/coin.css'

import title from './image/title.png'
import md1885 from './image/1885md.jpg'
import md1885_2 from './image/1885md2.jpg'

class Coin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
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

                <div className='coin_bg coin_page'>
                    <Row>
                        <Col sm={12} md={3}>
                            <Row className='center blue_word'>
                                <Col sm={12}>
                                    <div className='center'>
                                        <img src={md1885} width='90%' />
                                    </div>
                                    <p className='center'>obverse</p>
                                </Col>
                                <Col sm={12}>
                                    <div className='center'>
                                        <img src={md1885_2} width='90%' />
                                    </div>
                                    <p className='center'>reverse</p>
                                </Col>
                            </Row>

                        </Col>
                        <Col sm={12} md={1}></Col>
                        <Col sm={12} md={8}>
                            <h1 className='yellow_word'>
                                1885-O Morgan Dollar MS67 NGC
                            </h1>
                            <br></br><br></br>
                            <Row className='blue_word'>
                                <Col sm={4} md={4}>
                                    <h5>Price</h5>
                                </Col>
                                <Col sm={8} md={8}>
                                    ???
                                </Col>
                                <Col sm={12}><br></br></Col>

                                <Col sm={4}>
                                    <h5>Grade</h5>
                                </Col>
                                <Col sm={8}>
                                    ???
                                </Col>
                                <Col sm={12}><br></br></Col>

                                <Col sm={4}>
                                    <h5>Year</h5>
                                </Col>
                                <Col sm={8}>
                                    ???
                                </Col>
                                <Col sm={12}><br></br></Col>

                                <Col sm={4}>
                                    <h5>Size</h5>
                                </Col>
                                <Col sm={8}>
                                    ???
                                </Col>
                                <Col sm={12}><br></br></Col>

                                <Col sm={4}>
                                    <h5>Weight</h5>
                                </Col>
                                <Col sm={8}>
                                    ???
                                </Col>
                                <Col sm={12}><br></br></Col>

                                <Col sm={4}>
                                    <h5>Link</h5>
                                </Col>
                                <Col sm={8}>
                                    ???
                                </Col>
                                <Col sm={12}><br></br></Col>

                                <Col sm={4}>
                                    <h5>Like</h5>
                                </Col>
                                <Col sm={8}>
                                    ???
                                </Col>
                            </Row>

                            <br></br>
                            <div className='center'>
                                <Button className='button_blue' >
                                    add to cart
                                </Button>
                            </div>

                        </Col>
                    </Row>
                </div>

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
            </div>
        )
    }
}

export default Coin;