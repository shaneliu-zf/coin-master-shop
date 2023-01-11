import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import title from "../image/title.png";
import { MDBCol } from "mdbreact";
import React, {useState} from "react";
import { Routes, Route, Outlet, Link, useParams, useSearchParams } from "react-router-dom";

import '../css/style.css'
import { newVisit } from "../function/function.js"
import search_icon from '../image/search-icon.webp'


function Layout(){
    const [search_post,setSearch] = useState("");
    function handleInput(event){
        setSearch(event.target.value);
    }
    newVisit();
    return (
        <div>
            <Navbar id='n_coin' expand='lg' variant="dark">
                <Navbar.Brand href="/">
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
                        <Nav.Link href="/" className='nav_title'>home</Nav.Link>
                        <Nav.Link href="/about" className='nav_title'>about</Nav.Link>
                        <Nav.Link href="/grade" className='nav_title'>grade</Nav.Link>
                        <Nav.Link href="/product" className='nav_title'>product</Nav.Link>
                        <Nav.Link href="/like" className='nav_title'>like</Nav.Link>
                        <Nav.Link></Nav.Link>

                        <MDBCol md="6" className='center t'>
                            <input onChange={handleInput} id='search_input' className="form-control" type="text" placeholder="Search" aria-label="Search" />
                        </MDBCol>
                        <Nav.Link href={"/search/"+search_post} className='nav_title'>
                            <div style={{borderRadius:"10px",backgroundColor:"#b88e50",padding:"3px"}}>
                                <img src={search_icon} width={"25px"}/>
                            </div>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Container>
                </Container>
            </Navbar>
            <Outlet />
            <footer >
                <Row>
                    <Col sm={12} md={6} className='footer_item center x' id='f_inner'>
                        <div>
                            <img src={title} height='100%' width='100%' />
                        </div>
                    </Col>

                    <Col sm={12} md={6} className='footer_item' id='f_inner'>
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
    );
}

export default Layout;