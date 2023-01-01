import React from 'react';
import { Container, Row, Col, Nav, Navbar, Button, Form } from 'react-bootstrap'
import { MDBCol } from "mdbreact";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './css/style.css'
import './css/client.css'

import title from './image/title.png'

class Login extends React.Component {
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

                <Row className='member'>
                    <Col sm={12} md={6}></Col>
                    <Col sm={12} md={6}>
                        <div className='information'>
                            <div className='information_bg '>
                                <h1>LOGIN</h1>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>
                                            <h5>Account</h5>
                                        </Form.Label>
                                        <Form.Control type="email" placeholder="Enter account" />
                                        <p>
                                            Please enter your account to login
                                        </p>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>
                                            <h5>
                                                Password
                                            </h5>
                                        </Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                    <div className='center'>
                                        <Button type="submit" className='button_blue'>
                                            Login
                                        </Button>
                                    </div>
                                </Form>
                                <br></br>
                                <hr className='hr_white'></hr>
                                <p>
                                    not have a account yet?<br></br>
                                    <span className='register_word'><u>register</u></span> to a new user.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>

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

export default Login;