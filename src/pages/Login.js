import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

const Login = () => {

    // 1. 각 항목에 상수로 useState를 생성해준다.

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginSubmitHendle = async (e) => {
        e.preventDefault()

        try {

            const userInput = {
                email : email,
                password : password
            }

            console.log(userInput)


        } catch (err) {
            console.log(err)
        }

    }
    return (
        <Container className={"mt-5"}>
            <Row className={"justify-content-center"}>
                <Col xs={12} md={6}>
                    <h1>LOGIN</h1>
                    <Form className={"mt-4"} onSubmit={loginSubmitHendle}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
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

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Login
                        </Button>
                    </Form>
                    <Row className={"py-3"}>
                        <Col>
                            <Link to={"/find/email"}>
                                이메일 찾기
                            </Link>
                        </Col>
                        <Col>
                            <Link to={"/forgot"}>
                                비밀번호 찾기
                            </Link>
                        </Col>
                        <Col>
                            <Link to={"/forgot"}>
                                회원가입
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;