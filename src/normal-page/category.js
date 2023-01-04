import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap'

import each from "../image/each.png";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/style.css'
import '../css/category.css'

function Category() {
    return (
        <div>
            <div className='category_bg'>
                <div class="category_coin">
                    <Row>
                        <Col sm={12} md={7}>
                            <Row>
                                <Col sm={6}>
                                    <img src={each} width='100%' />
                                </Col>
                                <Col sm={6}>
                                    <img src={each} width='100%' />
                                </Col>
                            </Row>
                        </Col>

                        <Col sm={12} md={5} className='center'>
                            <h1 className='white_word category_title'>
                                Morgan Dollars
                            </h1>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col sm={12} md={12} className='center'>
                        <h3 className='category_content'>
                            History of Morgan Dollars
                        </h3>
                    </Col>
                    <Col sm={12} md={12} className='category_content'>
                        <p>
                            Political pressure, not public demand,
                            brought the Morgan dollar into being.
                            There was no real need for a new silver dollar in the
                            late 1870s; the last previous “cartwheel,”
                            the Liberty Seated dollar, had been legislated
                            out of existence in 1873, and hardly anyone missed it.
                            <br></br>
                            Silver-mining interests did miss the dollar, though,
                            and lobbied Congress forcefully for its return.
                            The Comstock Lode in Nevada was yielding huge
                            quantities of silver, with ore worth $36 million
                            being extracted annually. After several futile attempts,
                            the silver forces in Congress—led by Representative Richard
                            (“Silver Dick”) Bland of Missouri—finally succeeded in
                            winning authorization for a new silver dollar when Congress
                            passed the Bland-Allison Act on February 28, 1878.
                            <br></br>
                            This Act required the Treasury to purchase at market
                            levels between two million and four million troy
                            ounces of silver bullion every month to be coined
                            into dollars. This amounted to a massive subsidy,
                            coming at a time when the dollar’s face value
                            exceeded its intrinsic worth by nearly 10%.
                        </p>
                    </Col>
                </Row>
            </div>
        </div>
    );

}
export default Category;