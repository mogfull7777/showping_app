import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const SignUp = () => {
    return (
        <Container style={{marginTop : "5rem"}}>
            <Row className={"justify-content-md-center"}>
                <Col xs={12} md={6}>
                    <h1>Sign Up</h1>
                    <Form className={"mt-4"}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>User name</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        </Form.Group>


                        <Button variant="success" type="submit" className={"mt-3"}>
                            Submit
                        </Button>
                    </Form>
                </Col>

            </Row>
        </Container>

    );
};

export default SignUp;