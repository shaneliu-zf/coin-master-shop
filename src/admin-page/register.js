import React from 'react';
import { Container, Row, Col, Nav, Navbar, Button, Form } from 'react-bootstrap'
import { MDBCol } from "mdbreact";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/style.css'
import '../css/client.css'

class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Row className='member'>
                    <Col sm={12} md={6}></Col>
                    <Col sm={12} md={6}>
                        <div className='information'>
                            <div className='information_bg '>
                                <h1>REGISTER</h1>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>
                                            <h5>Account</h5>
                                        </Form.Label>
                                        <Form.Control type="email" placeholder="Enter account" />
                                        <p>
                                            Please enter the account name you want
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

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>
                                            <h5>
                                                Confirm Password
                                            </h5>
                                        </Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                    <div className='center'>
                                        <Button type="submit" className='button_blue'>
                                            Register
                                        </Button>
                                    </div>
                                </Form>
                                <br></br>
                                <hr className='hr_white'></hr>
                                <p>
                                    <span className='register_word'><u>login</u></span>
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>


            </div>
        )
    }
}

export default Register;