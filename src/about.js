import React from 'react';
import { Container, Row, Col, Nav, Navbar, Accordion } from 'react-bootstrap'
import { MDBCol } from "mdbreact";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './css/style.css'
import './css/about.css'

import title from './image/title.png'
import nonorze from './image/nonorze.png'
import shane from './image/shane.png'
import tyk from './image/tyk.png'
import star from './image/star.png'

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='whole_bg'>
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

                {/* About section */}
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

                {/* Member section */}
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

                {/* Reference */}
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

export default About;