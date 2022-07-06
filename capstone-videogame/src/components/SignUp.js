import React from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";

const SignUp = () => {
    return (
        <><Container className="boxBorder">
            <Row>
                <Col>
                    <Row>
                        <div>
                            <h3>Create Account</h3>
                        </div>
                    </Row>
                    <Row>
                        <Form>
                            <Form.Group className="mb-3" controlId="Name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="email" placeholder="Enter Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="Username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="email" placeholder="Enter username" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="Age">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="email" placeholder="Age" />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="button">
                                Create Account
                            </Button>
                        </Form>
                    </Row>
                </Col>
            </Row>
        </Container>
        <Container>
                <Row>
                    <Col>
                        <Row>
                            <div>
                                <h3>Login</h3>
                            </div>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3" controlId="Username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="email" placeholder="Enter username" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="button">
                                Login
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SignUp