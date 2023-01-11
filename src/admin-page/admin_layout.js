import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import title from "../image/title.png";
import { MDBCol } from "mdbreact";
import React from "react";
import { Routes, Route, Outlet, Link, useParams, useSearchParams } from "react-router-dom";

import '../css/style.css'

export default function Admin_layout(){
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
                        <Nav.Link href="/" className='nav_title'>home</Nav.Link>
                        <Nav.Link href="/admin/item_list" className='nav_title'>items</Nav.Link>
                        <Nav.Link href="/admin/trade" className='nav_title'>trade</Nav.Link>
                        <Nav.Link href="/admin/logout" className='nav_title'>logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Container>
                </Container>
            </Navbar>
            <Outlet />
        </div>
    );
};