import {Link, useParams} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import React from "react";

export default function Search_page(){
    let { search_post } = useParams();
    return (
        <div>
            <Row>
                <Col sm={12}>
                    <Container>

                        <br /><br /><br />
                        <br /><br /><br />
                        <br /><br /><br />
                        <br /><br /><br />
                        <br /><br /><br />
                        <br /><br /><br />
                        <br /><br /><br />
                        <br /><br /><br />
                        your search: {search_post}
                        <br /><br /><br />
                        <br /><br /><br /><br /><br /><br />


                    </Container>
                </Col>
            </Row>
        </div>
    );
}