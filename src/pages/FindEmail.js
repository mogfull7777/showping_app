import React, {useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const FindEmail = () => {

    const [phoneNumber, setPhoneNumber] = useState("");

    const findEmail = async (e) => {
        e.preventDefault()

        try {
            console.log({phoneNumber})
        } catch (err) {
            console.log(err)
        };
    };

    return (
        <Container className={"mt-5"}>
            <Row className={"justify-content-center"}>
                <Col xs={12} md={6}>
                    <h1>Find Email</h1>
                    <Form className={"mt-4"} onSubmit={findEmail}>

                        <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Text className="text-muted">
                            계정에 등록된 휴대폰 번호를 인증하시면
                        </Form.Text>
                        <Form.Text className="text-muted mb-3">
                            사용중인 계정의 이메일 주소를 알려드립니다.
                        </Form.Text>

                            <Form.Label>phone number (write only number.)</Form.Label>
                            <Form.Control
                                type="phone number"
                                placeholder="phone number"
                                value={phoneNumber}
                                onChange={e => setPhoneNumber(e.target.value)}
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

export default FindEmail;