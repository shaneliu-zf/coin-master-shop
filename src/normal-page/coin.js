import React from 'react';
import { Row, Col, Button } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/style.css'
import '../css/coin.css'

import md1885 from '../image/1885md.jpg'
import md1885_2 from '../image/1885md2.jpg'
import {useParams} from "react-router-dom";

function Coin(){
    let { coin_id } = useParams();

    return (
            <div>
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
            </div>
    );
}

export default Coin;