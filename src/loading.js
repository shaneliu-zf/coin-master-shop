import {Col, Row, Spinner} from "react-bootstrap";
import title from "./image/title.png";
import React from "react";

export default function loading(){
    return (<div className='load'>
        <Row>
            <Col sm={12} className='center'>
                <img src={title} width='80%'></img>
            </Col>
            <Col sm={12} className='center'>
                <br></br><br></br><br></br><br></br>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Col>
            <Col sm={12} className='center'>
                <br></br><br></br>
                <h2 className='blue_word'>Loading</h2>
            </Col>
        </Row>
    </div>);
}