import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const SignUp = () => {

    const [username, setUsername] = useState("");
    const [email, setemail] = useState("");
    const [password, setPasswoed] = useState("");
    const [confirmPassword, setconfirmPasswoed] = useState("");

    const signupSubmitheandle = async (e) => {
        e.preventDefault()

        try {


            // 2번째 = 비밀번호 확인
            if (password !== confirmPassword) {
                alert("password not match")
            }


            // 1번째
            const userInput = {
                username : username,
                email : email,
                password : password
            }

            console.log(userInput)

        } catch (err) {
            console.log(err)
        }
    }

    // console.log(username)

    return (
        <Container style={{marginTop : "5rem"}}>
            <Row className={"justify-content-md-center"}>
                <Col xs={12} md={6}>
                    <h1>Sign Up</h1>
                    <Form className={"mt-4"} onSubmit={signupSubmitheandle}>
                        <Form.Group className="mb-3" controlId="formBasicusername">
                            <Form.Label>User name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={e => setemail(e.target.value)}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={e => setPasswoed(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={e => setconfirmPasswoed(e.target.value)}
                            />
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