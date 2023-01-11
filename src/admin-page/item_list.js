import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/style.css'
import '../css/product.css'

import title from "../image/title.png";
import { getNotSoldItems } from "../function/function";
import loading from "../loading";

function Item_List() {
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
        return loading();
    }
    return (
        <div className='product_page'>
            <Container className='product_bg'>
                <h1 className='blue_word'>
                    PRODUCT
                </h1>
                <hr></hr>
                <Row>
                    <Col sm={10}></Col>
                    <Col sm={2}>
                        <div></div>
                        <Button className='button_blue' size='lg'>
                            upload
                        </Button>
                    </Col>
                    <Col sm={12}>
                        <br></br>
                    </Col>
                </Row>
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
        </div >
    );
}

export default Item_List;