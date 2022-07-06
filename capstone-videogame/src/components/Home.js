import React from "react";
import {Container, Col, Row} from 'react-bootstrap';

const Home = ({}) => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="boxBorder">Hey Check Out this new Game</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="boxBorder">Games</div>
                </Col>
                <Col>
                    <div className="boxBorder">Forums</div>
                </Col>
            </Row>
        </Container>
    )
} 

export default Home;