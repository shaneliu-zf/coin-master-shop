import { Container, Row, Col, Nav, Navbar, Button, Form } from 'react-bootstrap'
import { MDBCol } from "mdbreact";

import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/style.css'
import { getItemOrFalse, GetLen } from '../function/function';
import { ChangeData, ChangeDataWithId } from '../backend/databaseCtl/setData';
import { useParams } from 'react-router-dom';
import loading from '../loading';

export default function ItemUpload() {// extends React.Component {
    let { coin_id } = useParams();
    let [flag, setflag] = useState(false)
    let [newcoin, setnewCoin] = useState({
        back_image: "",
        category: 'Barber Half dollar',
        front_image: '',
        grade: '',
        item_id: '',
        like: 0,
        link: '',
        name: "sus",
        price: '',
        size: '',
        sold: false,
        weight: '',
        year: '',

    });

    useEffect(() => {
        const getData = async () => {
            const a = await getItemOrFalse(coin_id ? coin_id : '8');
            console.log(a);
            setnewCoin(a);
        }
        getData();
    }, [flag]);



    const handleSubmit = (e) => {
        console.log(e)
        let obj = newcoin;
        ChangeDataWithId('/items/', obj, "no")
        e.preventDefault()
    }

    const handleChange = (e) => {
        console.log('a')
        const { name, value } = e.target.value;
        let tmp = { ...newcoin }
        tmp[name] = value;
        setnewCoin(tmp);
    }

    // if (coin_id === undefined) {
    //     return loading()
    // }

    return (
        <div>
            <Container>
                <Row>
                    <Col sm={2}></Col>
                    <Col sm={7}>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h1>COIN</h1>
                        <br></br>
                        <br></br>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail" >
                                <Form.Label>
                                    <h5>name</h5>
                                </Form.Label>
                                <Form.Control value={newcoin['name']} onChange={handleChange} type="" name="name" placeholder="Enter name" />
                                <p>
                                    Please enter the name of the item
                                </p>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>
                                    <h5>price</h5>
                                </Form.Label>
                                <Form.Control value={newcoin['price']} onChange={handleChange} type="" name="price" placeholder="Enter price" />
                                <p>
                                    Please enter the price of the item
                                </p>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>
                                    <h5>select the category</h5>
                                </Form.Label>

                                <Form.Select value={newcoin['category']} onChange={handleChange} name="category" aria-label="Default select example">
                                    <option>category</option>
                                    <option value="Kennedy half dollar">Kennedy half dollar</option>
                                    <option value="Walking Liberty half dollar">Walking Liberty half dollar</option>
                                    <option value="Barber Half dollar">Barber Half dollar</option>
                                    <option value="Morgan dollar">Morgan dollar</option>
                                    <option value="Eisenhower dollar">Eisenhower dollar</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>
                                    <h5>grade</h5>
                                </Form.Label>
                                <Form.Control value={newcoin['grade']} onChange={handleChange} type="" name="grade" placeholder="Enter grade" />
                                <p>
                                    Please enter the grade of the item
                                </p>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>
                                    <h5>year</h5>
                                </Form.Label>
                                <Form.Control value={newcoin['year']} onChange={handleChange} type="" name="year" placeholder="Enter year" />
                                <p>
                                    Please enter the year of the item
                                </p>
                            </Form.Group>

                            <Form.Group className="" controlId="formBasicEmail">
                                <Form.Label>
                                    <h5>size</h5>
                                </Form.Label>
                                <Form.Control value={newcoin['size']} onChange={handleChange} type="" name="size" placeholder="Enter size" />
                                <p>
                                    Please enter the size of the item
                                </p>
                            </Form.Group>

                            <Form.Group className="" controlId="formBasicEmail">
                                <Form.Label>
                                    <h5>weight</h5>
                                </Form.Label>
                                <Form.Control value={newcoin['weight']} onChange={handleChange} type="" name="weight" placeholder="Enter weight" />
                                <p>
                                    Please enter the weight of the item
                                </p>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>
                                    <h5>front_image</h5>
                                </Form.Label>
                                <Form.Control value={newcoin['front_image']} onChange={handleChange} type="" name="front_image" placeholder="Enter the link of the front imag" />
                                <p>
                                    Please enter the link of the front image of the item
                                </p>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>
                                    <h5>back_image</h5>
                                </Form.Label>
                                <Form.Control value={newcoin['back_image']} onChange={handleChange} type="" name="back_image" placeholder="Enter the link of the back image" />
                                <p>
                                    Please enter the link of the back image of the item
                                </p>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>
                                    <h5>link</h5>
                                </Form.Label>
                                <Form.Control value={newcoin['link']} onChange={handleChange} type="" name="link" placeholder="Enter link" />
                                <p>
                                    Please enter the link of the item
                                </p>
                            </Form.Group>
                            <Col sm={12}>
                                <div className="d-grid gap-2">
                                    <br></br>
                                    <Button type="submit" className='button_blue' size="lg">
                                        submit
                                    </Button>
                                    <br></br>
                                    <br></br>
                                </div>
                            </Col>
                        </Form>
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </Container>

        </div>
    );

}