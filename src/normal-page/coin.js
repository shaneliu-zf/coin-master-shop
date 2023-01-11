import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Spinner } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/style.css'
import '../css/coin.css'

import title from "../image/title.png";
import md1885 from '../image/1885md.jpg'
import md1885_2 from '../image/1885md2.jpg'
import each from '../image/each.png'
import { useParams } from "react-router-dom";
import { getItemOrFalse } from "../function/function";
import { GetCustomerCount } from "../function/function";
import loading from "../loading";
import ItemUpload from '../admin-page/new_item';

export default function Coin() {
    let { coin_id } = useParams();
    let [coin, setData] = useState();

    useEffect(() => {
        const getData = async () => {
            const a = getItemOrFalse(coin_id);
            setData(await a);
        }
        getData();
    }, []);

    if (coin === undefined) {
        return loading();
    }

    return (
        <div>
            <div className='coin_bg coin_page'>
                <Row>
                    <Col sm={12} md={3}>
                        <Row className='center blue_word'>
                            <Col sm={12}>
                                <div className='center'>
                                    <img src={coin["front_image"]} width='90%' />
                                </div>
                                <p className='center'>obverse</p>
                            </Col>
                            <Col sm={12}>
                                <div className='center'>
                                    <img src={coin["back_image"]} width='90%' />
                                </div>
                                <p className='center'>reverse</p>
                            </Col>
                        </Row>

                    </Col>
                    <Col sm={12} md={1}></Col>
                    <Col sm={12} md={8}>
                        <h1 className='yellow_word'>
                            {coin["name"]}
                        </h1>
                        <br></br><br></br>
                        <Row className='blue_word'>
                            <Col sm={4} md={4}>
                                <h5>Price</h5>
                            </Col>
                            <Col sm={8} md={8}>
                                {coin["price"]} NTD
                            </Col>
                            <Col sm={12}><br></br></Col>
                            <Col sm={4}>
                                <h5>Category</h5>
                            </Col>
                            <Col sm={8}>
                                <a href={"/category/" + coin["category"]}>{coin["category"]}</a>
                            </Col>
                            <Col sm={12}><br></br></Col>
                            <Col sm={4}>
                                <h5>Grade</h5>
                            </Col>
                            <Col sm={8}>
                                <a href="/grade">{coin["grade"]}</a>
                            </Col>
                            <Col sm={12}><br></br></Col>

                            <Col sm={4}>
                                <h5>Year</h5>
                            </Col>
                            <Col sm={8}>
                                {coin["year"]}
                            </Col>
                            <Col sm={12}><br></br></Col>

                            <Col sm={4}>
                                <h5>Size</h5>
                            </Col>
                            <Col sm={8}>
                                {coin["size"]}
                            </Col>
                            <Col sm={12}><br></br></Col>

                            <Col sm={4}>
                                <h5>Weight</h5>
                            </Col>
                            <Col sm={8}>
                                {coin["weight"]}
                            </Col>
                            <Col sm={12}><br></br></Col>

                            <Col sm={4}>
                                <h5>Link</h5>
                            </Col>
                            <Col sm={8}>
                                <a href={coin["link"]}>{coin["link"]}</a>
                            </Col>
                            <Col sm={12}><br></br></Col>

                            <Col sm={4}>
                                <h5>Like</h5>
                            </Col>
                            <Col sm={8}>
                                {coin["like"]}
                            </Col>
                        </Row>
                        <br></br>
                        <div className='center'>
                            <Button className='button_blue' >
                                add to like
                            </Button>
                        </div>

                        <ItemUpload></ItemUpload>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
