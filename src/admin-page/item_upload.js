import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/style.css'
import '../css/product.css'

import title from "../image/title.png";
import { getNotSoldItems } from "../function/function";

function Product() {
    let [coins, setData] = useState();

    useEffect(() => {
        const getData = async () => {
            const a = getNotSoldItems();
            setData(await a);
        }
        getData();
    }, []);

    let output = "";
    if (coins === undefined) {
        return (
            <div className='load'>
                <Row>
                    <Col sm={7}></Col>
                    <Col sm={3}>
                        <Button className='button_blue' >
                            upload
                        </Button>
                    </Col>
                </Row>
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
            </div>
        )
        // coins = [
        //     {
        //         "item_id"      : "???",
        //         "name"         : "???",
        //         "price"        : "???",
        //         "category"     : "???",
        //         "grade"        : "???",
        //         "year"         : "???",
        //         "size"         : "???",
        //         "weight"       : "???",
        //         "front_image"  : "???",
        //         "back_image"   : "???",
        //         "link"         : "???",
        //         "like"         : "???",
        //         "sold"         : "???"
        //     }
        // ];
    }
    return (
        <div className='product_page'>
            <Container className='product_bg'>
                <h1 className='blue_word'>
                    PRODUCT
                </h1>
                <div>
                    <Row>
                        {
                            coins.map(
                                (coin) => (
                                    <Col sm={12} md={5} className='each center'>
                                        <Row>
                                            <Col sm={6} >
                                                <div className='center'>
                                                    <img src={coin["front_image"]} width='90%' />
                                                </div>
                                            </Col>
                                            <Col sm={6} className='center'>
                                                <div>
                                                    <h4>
                                                        {coin["name"]}
                                                    </h4>
                                                    <hr></hr>
                                                    {coin["price"]} NTD
                                                    <br></br><br></br>
                                                    <div className='center'>
                                                        <a href={"/coin/" + coin["item_id"]}>
                                                            <Button className='button_blue' >
                                                                modify
                                                            </Button>
                                                            <Button className='button_blue' >
                                                                delete
                                                            </Button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                )
                            )
                        }
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Product;