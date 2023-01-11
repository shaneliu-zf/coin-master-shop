import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap'

import md1885 from "../image/1885md.jpg";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/style.css'
import '../css/like.css'

function Like() {
    return (
        <div className='like_page'>
            <div className='like_bg'>
                <h1 className='blue_word'>
                    Like
                </h1>
                <Row>
                    <Col sm={12} md={5} className='each_like center'>
                        <Row>
                            <Col sm={6} >
                                <div className='center'>
                                    <img src={md1885} width='90%' />
                                </div>
                            </Col>
                            <Col sm={6} className='center'>
                                <div>
                                    <h4>
                                        1885md
                                    </h4>
                                    <hr></hr>
                                    NT 5000
                                    <br></br><br></br>
                                    <div className='center'>
                                        {/* <a href={"/coin/" + coin["item_id"]}> */}
                                        <Button className='button_blue' >
                                            remove
                                        </Button>
                                        {/* </a> */}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                </Row>
            </div >

            <Row>
                <Col sm={7}></Col>
                <Col sm={4} className='center'>
                    <Col>
                        <div className="d-grid gap-2">
                            <Button className='button_blue' size="lg">
                                submit
                            </Button>
                        </div>
                    </Col>
                </Col>
                <Col sm={1}></Col>
                <Col sm={12}>
                    <br></br>
                </Col>
            </Row>
        </div >
    );

}
export default Like;