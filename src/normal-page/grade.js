import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../css/style.css'
import '../css/grade.css'

function Grade() {
    return (
        <div className='grade_bg'>
            <div>
                <Row className='grade_content'>
                    <Col sm={12} className='center'>
                        <h1 className='grade_title'>
                            what is grade?
                        </h1>
                    </Col>
                    <Col sm={12}>
                        <p>
                            This scale was adopted by NGC when it began operations
                            in 1987 and is considered to be the industry standard.
                            Below are NGC's grading standards for each numeric grade
                            as well as major strike types and designations.
                        </p>
                    </Col>
                    <Col sm={12}><br></br><br></br></Col>

                    <Col sm={12} md={4}>
                        <h3 className='blue_word'>MS</h3>
                        <p>
                            Mint State. Coins struck in the same format as circulation
                            issues. Applies to grades 60 to 70.
                        </p>
                    </Col>
                    <Col sm={12} md={4}>
                        <h3 className='blue_word'>PH</h3>
                        <p>
                            Proof. Coins struck in a special format for collectors.
                        </p>
                    </Col>
                    <Col sm={12} md={4}>
                        <h3 className='blue_word'>SP</h3>
                        <p>
                            Specimen. A hybrid between Mint State and Proof.
                        </p>
                    </Col>

                    <Col sm={12}><br></br><hr></hr><br></br></Col>
                    <Col sm={12}>
                        <Container>
                            <Row>
                                <Col sm={12} md={3}></Col>
                                <Col sm={12} md={6}>
                                    <h4>70</h4>
                                    <p>
                                        A coin with no post-production imperfections at 5x magnification A coin with no post-production imperfections at 5x magnification..
                                    </p>

                                </Col>
                                <Col sm={12} md={3}></Col>

                                <Col sm={12} md={3}></Col>
                                <Col sm={12} md={6}>
                                    <h4>69</h4>
                                    <p>
                                        A coin with no post-production imperfections at 5x magnification.
                                    </p>
                                </Col>
                                <Col sm={12} md={3}></Col>

                                <Col sm={12} md={3}></Col>
                                <Col sm={12} md={6}>
                                    <h4>68</h4>
                                    <p>
                                        A coin with no post-production imperfections at 5x magnification.
                                    </p>
                                </Col>
                                <Col sm={12} md={3}></Col>

                                <Col sm={12} md={3}></Col>
                                <Col sm={12} md={6}>
                                    <h4>67</h4>
                                    <p>
                                        A coin with no post-production imperfections at 5x magnification.
                                    </p>
                                </Col>
                                <Col sm={12} md={3}></Col>

                                <Col sm={12} md={3}></Col>
                                <Col sm={12} md={6}>
                                    <h4>66</h4>
                                    <p>
                                        A coin with no post-production imperfections at 5x magnification.
                                    </p>
                                </Col>
                                <Col sm={12} md={3}></Col>

                                <Col sm={12} md={3}></Col>
                                <Col sm={12} md={6}>
                                    <h4>...</h4>
                                    <p>
                                        ...
                                    </p>
                                </Col>
                                <Col sm={12} md={3}></Col>

                                <Col sm={12} md={3}></Col>
                                <Col sm={12} md={6}>
                                    <h4>01</h4>
                                    <p>
                                        A coin with no post-production imperfections at 5x magnification.
                                    </p>
                                </Col>
                                <Col sm={12} md={3}></Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </div>
        </div>
    );

}
export default Grade;