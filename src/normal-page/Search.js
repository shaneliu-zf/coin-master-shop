import { Link, useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import React, {useState} from "react";

import '../css/style.css'
import '../css/search.css'

import search_icon from '../image/search-icon.webp'

export default function Search_page() {
    let { search_post } = useParams();
    const [a,setA] = useState(search_post);
    function handleChange(event){
        setA(event.target.value);
    }
    return (
        <div className="search_bg">
            <Row>
                <Col sm={4}>
                    <div>
                        <input id='search_input' className="form-control" type="text" value={a} onChange={handleChange} aria-label="Search" />
                    </div>
                </Col>
                <div style={{ borderRadius: "10px", padding: "3px", width: "32px", cursor: "pointer " }}>
                    <a href={"/Search/"+a}><img src={search_icon} width={"25px"} /></a>
                </div>

                <Col sm={12}>
                    <br></br>
                    maybe you want to search : <a href="https://coin-shoppingweb.web.app/coin/0">1921 Argent Morgan Dollar Classé Par PCGS Comme MS64</a>

                </Col>

                <Col sm={12}>
                    <hr></hr>
                    <br></br><br></br><br></br>
                </Col>
                <Col sm={12} >
                    <Container className='center'>
                        <h3>
                            Search not found
                        </h3>
                    </Container>
                </Col>
            </Row>
        </div>
    );
}