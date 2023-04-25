import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";

const Header = () => {
    return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Junyoung Mall</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            {/*<Nav.Link href="#features">Features</Nav.Link>*/}
                            {/*<Nav.Link href="#pricing">Pricing</Nav.Link>*/}
                            {/*<NavDropdown title="Dropdown" id="collasible-nav-dropdown">*/}
                            {/*    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href="#action/3.2">*/}
                            {/*        Another action*/}
                            {/*    </NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Divider />*/}
                            {/*    <NavDropdown.Item href="#action/3.4">*/}
                            {/*        Separated link*/}
                            {/*    </NavDropdown.Item>*/}
                            {/*</NavDropdown>*/}
                        </Nav>
                        <Nav>
                            <Nav.Link href={"/login"}>Login</Nav.Link>
                            <Nav.Link eventKey={2} href={"/signup"}>
                                {/* 생성했던 router 달아주자. */}
                                Sign Up
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Header;