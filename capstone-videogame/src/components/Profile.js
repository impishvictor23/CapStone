import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router";

const Profile = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Row>
                        <div>
                            This Where Pic Go
                        </div>
                    </Row>
                    <Row>
                        <div>
                            Username
                        </div>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <div>
                            <h3>Edit Profile</h3>
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
                                Update Account
                            </Button>
                            <Button variant="primary" type="submit" className="button">
                                Delete Account
                            </Button>
                        </Form>
                    </Row>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default Profile