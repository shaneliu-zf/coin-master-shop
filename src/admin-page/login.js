import React from 'react';
import { Container, Row, Col, Nav, Navbar, Button, Form } from 'react-bootstrap'
import { MDBCol } from "mdbreact";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/style.css'
import '../css/client.css'

let curr_opacity = 1;
function fadeOut() {
    if (curr_opacity > 0.3) {
        setTimeout(function () {
            curr_opacity = curr_opacity - 0.1;
            document.getElementById("bad").style.opacity = curr_opacity;
            fadeOut()
        }, 23)
    }
    else {
        document.getElementById("bad").style.display = "none";
        document.getElementById("bad").style.opacity = curr_opacity = 1;
    }
};

function check() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username === "admin" && password === "admin") {
        window.location.href = "/admin/item_list";
    }
    document.getElementById("bad").style.display = "";
    setTimeout(() => {
        fadeOut()
    }, 1000);
    return false;
}



function Login() {
    return (
        <div>
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
                                    <Form.Control id="username" type="text" placeholder="Enter account" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>
                                        <h5>
                                            Password
                                        </h5>
                                    </Form.Label>
                                    <Form.Control id="password" type="password" placeholder="Password" />
                                </Form.Group>
                                <br />
                                <div className='center'>
                                    <Button type="button" onClick={check} className='button_blue'>
                                        Login
                                    </Button>
                                </div>

                                <div style={{ height: "50px" }}>
                                    <br />
                                    <div id="bad" style={{ display: "none" }} className='center'>
                                        <span className='wrong'>Invalid username or password.</span>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Login;