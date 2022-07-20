import React, { useState, useEffect } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router";

const Profile = () => {
    const [form, setForm] = useState({
        name: "",
        position: "",
        level: "",
        records: [],
      });
      const params = useParams();
      const navigate = useNavigate();
      
      useEffect(() => {
        async function fetchData() {
          const id = params.id.toString();
          const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);
      
          if (!response.ok) {
            const message = `An error has occurred: ${response.statusText}`;
            window.alert(message);
            return;
          }
      
          const record = await response.json();
          if (!record) {
            window.alert(`Record with id ${id} not found`);
            navigate("/");
            return;
          }
      
          setForm(record);
        }
      
        fetchData();
      
        return;
      }, [params.id, navigate]);
      
      // These methods will update the state properties.
      function updateForm(value) {
        return setForm((prev) => {
          return { ...prev, ...value };
        });
      }
      
      async function onSubmit(e) {
        e.preventDefault();
        const editedPerson = {
          name: form.name,
          position: form.position,
          level: form.level,
        };
      
        // This will send a post request to update the data in the database.
        await fetch(`http://localhost:5000/update/${params.id}`, {
          method: "POST",
          body: JSON.stringify(editedPerson),
          headers: {
            'Content-Type': 'application/json'
          },
        });
      
        navigate("/");
      }

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