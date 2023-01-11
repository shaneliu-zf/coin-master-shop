import React from 'react';
import { Container, Row, Col, Nav, Navbar, Button, Form } from 'react-bootstrap'
import { MDBCol } from "mdbreact";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/style.css'

function ItemUpload() {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={7}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>
                                    <h5>name</h5>
                                </Form.Label>
                                <Form.Control type="" placeholder="Enter name" />
                                <p>
                                    Please enter the name of the item
                                </p>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>
                                    <h5>price</h5>
                                </Form.Label>
                                <Form.Control type="" placeholder="Enter price" />
                                <p>
                                    Please enter the price of the item
                                </p>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>
                                    <h5>select the category</h5>
                                </Form.Label>

                                <Form.Select aria-label="Default select example">
                                    <option>category</option>
                                    <option value="1">Kennedy half dollar</option>
                                    <option value="2">Walking Liberty half dollar</option>
                                    <option value="3">Barber Half dollar</option>
                                    <option value="4">Morgan dollar</option>
                                    <option value="5">Eisenhower dollar</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>
                                    <h5>grade</h5>
                                </Form.Label>
                                <Form.Control type="" placeholder="Enter grade" />
                                <p>
                                    Please enter the grade of the item
                                </p>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>
                                    <h5>year</h5>
                                </Form.Label>
                                <Form.Control type="" placeholder="Enter year" />
                                <p>
                                    Please enter the year of the item
                                </p>
                            </Form.Group>

                            <Form.Group className="" controlId="formBasicEmail">
                                <Form.Label>
                                    <h5>size</h5>
                                </Form.Label>
                                <Form.Control type="" placeholder="Enter size" />
                                <p>
                                    Please enter the size of the item
                                </p>
                            </Form.Group>

                            <Form.Group className="" controlId="formBasicEmail">
                                <Form.Label>
                                    <h5>weight</h5>
                                </Form.Label>
                                <Form.Control type="" placeholder="Enter weight" />
                                <p>
                                    Please enter the weight of the item
                                </p>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>
                                    <h5>front_image</h5>
                                </Form.Label>
                                <Form.Control type="" placeholder="Enter the link of the front imag" />
                                <p>
                                    Please enter the link of the front image of the item
                                </p>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>
                                    <h5>back_image</h5>
                                </Form.Label>
                                <Form.Control type="" placeholder="Enter the link of the back image" />
                                <p>
                                    Please enter the link of the back image of the item
                                </p>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>
                                    <h5>link</h5>
                                </Form.Label>
                                <Form.Control type="" placeholder="Enter link" />
                                <p>
                                    Please enter the link of the item
                                </p>
                            </Form.Group>
                        </Form>
                    </Col>

                    <Col sm={12}>
                        <div className="d-grid gap-2">
                            <br></br>
                            <Button className='button_blue' size="lg">
                                submit
                            </Button>
                            <br></br>
                            <br></br>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}
export default ItemUpload;