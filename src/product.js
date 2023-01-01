import React from 'react';
import { Container, Row, Col, Nav, Navbar, Button } from 'react-bootstrap'
import { MDBCol } from "mdbreact";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './css/style.css'
import './css/product.css'

import title from './image/title.png'
import md1885 from './image/1885md.jpg'
import msd1896 from './image/1896msd.jpg'
import bhd1897 from './image/1897bhd.jpg'
import md1904 from './image/1904md.jpg'
import lwhd1918 from './image/1918lwhd.jpg'
import md1921 from './image/1921md.jpg'
import wlhd1938 from './image/1938wlhd.jpg'
import wlhd1941 from './image/1941wlhd.jpg'
import dkd1974 from './image/1974dkd.jpg'
import ed1978 from './image/1978ed.jpg'
import khd1979 from './image/1979khd.jpg'
import ke2019 from './image/2019ke.jpg'
import lwhd1945 from './image/1945lwhd.jpg'
import USAusds from './image/USAusds.jpg'




class Product extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='product_page'>
                {/* Navbar on the top ----------------------------*/}
                <Navbar className='navbar' bg='dark' expand='lg' collapseOnSelect variant="dark">
                    <Navbar.Brand href="#home">
                        <div className='logo'>
                            <div>
                                <img src={title} height='100%' width='100%' />
                            </div>
                        </div>
                    </Navbar.Brand>

                    <Navbar.Toggle className='' />

                    <Navbar.Collapse className='hamburger' >
                        <Nav className="ms-auto" >
                            <Nav.Link></Nav.Link>
                            <Nav.Link href="#home" className='nav_title'>home</Nav.Link>
                            <Nav.Link href="#about" className='nav_title'>about</Nav.Link>
                            <Nav.Link href="#grade" className='nav_title'>grade</Nav.Link>
                            <Nav.Link href="#product" className='nav_title'>product</Nav.Link>
                            <Nav.Link href="#cart" className='nav_title'>cart</Nav.Link>
                            <Nav.Link></Nav.Link>
                            <MDBCol md="6" className='center t'>
                                <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                            </MDBCol>
                            <Nav.Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Container>
                    </Container>
                </Navbar>
                <Container className='product_bg'>
                    <h1 className='blue_word'>
                        PRODUCT
                    </h1>
                    <div>
                        <Row>
                            <Col sm={12} md={5} className='each center'>
                                <Row>
                                    <Col sm={6}>
                                        <div className='center'>
                                            <img src={md1885} width='90%' />
                                        </div>
                                    </Col>

                                    <Col sm={6} className='center'>
                                        <div>
                                            <h4>
                                                1885-O Morgan Dollar MS67 NGC
                                            </h4>
                                            <hr></hr>
                                            EUR 1,160.80
                                            <br></br><br></br>
                                            <div className='center'>
                                                <Button className='button_blue' >
                                                    more
                                                </Button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col sm={12} md={1} className='center'></Col>

                            <Col sm={12} md={5} className='each center'>
                                <Row>
                                    <Col sm={6} >
                                        <div className='center'>
                                            <img src={msd1896} width='90%' />
                                        </div>
                                    </Col>

                                    <Col sm={6} className='center'>
                                        <div>
                                            <h4>
                                                1896-O Morgan Silver Dollar NGC AU53
                                            </h4>
                                            <hr></hr>
                                            EUR 257.84
                                            <br></br><br></br>
                                            <div className='center'>
                                                <Button className='button_blue' >
                                                    more
                                                </Button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col sm={12} md={5} className='each center'>
                                <Row>
                                    <Col sm={6}>
                                        <div className='center'>
                                            <img src={bhd1897} width='90%' />
                                        </div>
                                    </Col>

                                    <Col sm={6} className='center'>
                                        <div>
                                            <h4>
                                                1885-O Morgan Dollar MS67 NGC
                                            </h4>
                                            <hr></hr>
                                            EUR 1,160.80
                                            <br></br><br></br>
                                            <div className='center'>
                                                <Button className='button_blue' >
                                                    more
                                                </Button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col sm={12} md={1} className='center'></Col>

                            <Col sm={12} md={5} className='each center'>
                                <Row>
                                    <Col sm={6} >
                                        <div className='center'>
                                            <img src={md1904} width='90%' />
                                        </div>
                                    </Col>

                                    <Col sm={6} className='center'>
                                        <div>
                                            <h4>
                                                1896-O Morgan Silver Dollar NGC AU53
                                            </h4>
                                            <hr></hr>
                                            EUR 257.84
                                            <br></br><br></br>
                                            <div className='center'>
                                                <Button className='button_blue' >
                                                    more
                                                </Button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col sm={12} md={5} className='each center'>
                                <Row>
                                    <Col sm={6}>
                                        <div className='center'>
                                            <img src={lwhd1918} width='90%' />
                                        </div>
                                    </Col>

                                    <Col sm={6} className='center'>
                                        <div>
                                            <h4>
                                                1885-O Morgan Dollar MS67 NGC
                                            </h4>
                                            <hr></hr>
                                            EUR 1,160.80
                                            <br></br><br></br>
                                            <div className='center'>
                                                <Button className='button_blue' >
                                                    more
                                                </Button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col sm={12} md={1} className='center'></Col>

                            <Col sm={12} md={5} className='each center'>
                                <Row>
                                    <Col sm={6} >
                                        <div className='center'>
                                            <img src={md1921} width='90%' />
                                        </div>
                                    </Col>

                                    <Col sm={6} className='center'>
                                        <div>
                                            <h4>
                                                1896-O Morgan Silver Dollar NGC AU53
                                            </h4>
                                            <hr></hr>
                                            EUR 257.84
                                            <br></br><br></br>
                                            <div className='center'>
                                                <Button className='button_blue' >
                                                    more
                                                </Button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col sm={12} md={5} className='each center'>
                                <Row>
                                    <Col sm={6}>
                                        <div className='center'>
                                            <img src={wlhd1938} width='90%' />
                                        </div>
                                    </Col>

                                    <Col sm={6} className='center'>
                                        <div>
                                            <h4>
                                                1885-O Morgan Dollar MS67 NGC
                                            </h4>
                                            <hr></hr>
                                            EUR 1,160.80
                                            <br></br><br></br>
                                            <div className='center'>
                                                <Button className='button_blue' >
                                                    more
                                                </Button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col sm={12} md={1} className='center'></Col>

                            <Col sm={12} md={5} className='each center'>
                                <Row>
                                    <Col sm={6} >
                                        <div className='center'>
                                            <img src={wlhd1941} width='90%' />
                                        </div>
                                    </Col>

                                    <Col sm={6} className='center'>
                                        <div>
                                            <h4>
                                                1896-O Morgan Silver Dollar NGC AU53
                                            </h4>
                                            <hr></hr>
                                            EUR 257.84
                                            <br></br><br></br>
                                            <div className='center'>
                                                <Button className='button_blue' >
                                                    more
                                                </Button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col sm={12} md={5} className='each center'>
                                <Row>
                                    <Col sm={6}>
                                        <div className='center'>
                                            <img src={dkd1974} width='90%' />
                                        </div>
                                    </Col>

                                    <Col sm={6} className='center'>
                                        <div>
                                            <h4>
                                                1885-O Morgan Dollar MS67 NGC
                                            </h4>
                                            <hr></hr>
                                            EUR 1,160.80
                                            <br></br><br></br>
                                            <div className='center'>
                                                <Button className='button_blue' >
                                                    more
                                                </Button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col sm={12} md={1} className='center'></Col>

                            <Col sm={12} md={5} className='each center'>
                                <Row>
                                    <Col sm={6} >
                                        <div className='center'>
                                            <img src={ed1978} width='90%' />
                                        </div>
                                    </Col>

                                    <Col sm={6} className='center'>
                                        <div>
                                            <h4>
                                                1896-O Morgan Silver Dollar NGC AU53
                                            </h4>
                                            <hr></hr>
                                            EUR 257.84
                                            <br></br><br></br>
                                            <div className='center'>
                                                <Button className='button_blue' >
                                                    more
                                                </Button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col sm={12} md={5} className='each center'>
                                <Row>
                                    <Col sm={6}>
                                        <div className='center'>
                                            <img src={khd1979} width='90%' />
                                        </div>
                                    </Col>

                                    <Col sm={6} className='center'>
                                        <div>
                                            <h4>
                                                1885-O Morgan Dollar MS67 NGC
                                            </h4>
                                            <hr></hr>
                                            EUR 1,160.80
                                            <br></br><br></br>
                                            <div className='center'>
                                                <Button className='button_blue' >
                                                    more
                                                </Button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col sm={12} md={1} className='center'></Col>

                            <Col sm={12} md={5} className='each center'>
                                <Row>
                                    <Col sm={6} >
                                        <div className='center'>
                                            <img src={ke2019} width='90%' />
                                        </div>
                                    </Col>

                                    <Col sm={6} className='center'>
                                        <div>
                                            <h4>
                                                1896-O Morgan Silver Dollar NGC AU53
                                            </h4>
                                            <hr></hr>
                                            EUR 257.84
                                            <br></br><br></br>
                                            <div className='center'>
                                                <Button className='button_blue' >
                                                    more
                                                </Button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col sm={12} md={5} className='each center'>
                                <Row>
                                    <Col sm={6}>
                                        <div className='center'>
                                            <img src={lwhd1945} width='90%' />
                                        </div>
                                    </Col>

                                    <Col sm={6} className='center'>
                                        <div>
                                            <h4>
                                                1885-O Morgan Dollar MS67 NGC
                                            </h4>
                                            <hr></hr>
                                            EUR 1,160.80
                                            <br></br><br></br>
                                            <div className='center'>
                                                <Button className='button_blue' >
                                                    more
                                                </Button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>

                            <Col sm={12} md={1} className='center'></Col>

                            <Col sm={12} md={5} className='each center'>
                                <Row>
                                    <Col sm={6} >
                                        <div className='center'>
                                            <img src={USAusds} width='90%' />
                                        </div>
                                    </Col>

                                    <Col sm={6} className='center'>
                                        <div>
                                            <h4>
                                                1896-O Morgan Silver Dollar NGC AU53
                                            </h4>
                                            <hr></hr>
                                            EUR 257.84
                                            <br></br><br></br>
                                            <div className='center'>
                                                <Button className='button_blue' >
                                                    more
                                                </Button>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>

                </Container>



                <footer>
                    <Row>
                        <Col sm={12} md={6} className='footer_item center'>
                            <div>
                                <img src={title} height='100%' width='100%' />
                            </div>
                        </Col>

                        <Col sm={12} md={6} className='footer_item'>
                            <h4>e-mail</h4>
                            <p>
                                t110590002@ntut.org.tw<br></br>
                                t110590011@ntut.org.tw<br></br>
                                t110590015@ntut.org.tw<br></br>
                                t110590056@ntut.org.tw<br></br>
                            </p>
                            <br></br>
                            <h4>NTUT</h4>
                            <p>
                                computer science and information engineering
                            </p>
                            <hr className='hr_white'></hr>
                            <p>© 2022</p>
                        </Col>

                    </Row>
                </footer>
            </div>
        )
    }
}

export default Product;