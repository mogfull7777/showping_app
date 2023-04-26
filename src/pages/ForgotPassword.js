import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const ForgotPassword = () => {

    const [email, setEmail] = useState("");

    const forgotpassword = async (e) => {
        e.preventDefault()

        try {
            console.log({email})
        } catch (err) {
            console.log(err)
        };

    };

    return (
        <Container className={"mt-5"}>
            <Row className={"justify-content-center"}>
                <Col xs={12} md={6}>
                    <h1>FORGOT??</h1>
                    <Form className={"mt-4"} onSubmit={forgotpassword}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">

                            <Form.Text className="text-muted">
                                비밀번호를 잃어버리셨나요?
                            </Form.Text>
                            <Form.Text className="text-muted">
                                인프런에 가입한 이메일을 정확히 입력해 주세요.
                            </Form.Text>
                            <Form.Text className="text-muted mb-3">
                                이메일을 통해 비밀번호 변경 링크가 전송됩니다.
                            </Form.Text>

                            <Form.Label>Email address</Form.Label>

                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                // value 값 정리
                                value={email}
                                // onChange 중요
                                onChange={e => setEmail(e.target.value)}
                            />

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

export default ForgotPassword;