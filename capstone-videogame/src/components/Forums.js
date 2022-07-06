import React from "react";
import { Button, Col, Container, Row} from "react-bootstrap";

const Forums = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="button">
                        <Button>Create Post</Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="titleUnderline">Latest Posts</div>
                </Col>
                <Col>
                    <div className="titleUnderline">Most Popular</div>
                </Col>
            </Row>
        </Container>
    )
}

export default Forums;