import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import React from "react";

export default function Logout(){
    return (

        <div>
            <Row>
                <Col sm={12}>
                    <Container>

                        <br /><br /><br />
                        <br /><br /><br />
                        <br /><br /><br />
                        <br /><br /><br />
                        <h1>404</h1>
                        <h2>You have Logout!</h2>
                        <p>
                            <Link to="/">Go to the home page</Link>
                        </p>
                        <br /><br /><br />
                        <br /><br /><br /><br /><br /><br />


                    </Container>
                </Col>
            </Row>
        </div>
        );
}