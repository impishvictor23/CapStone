import React from "react";
import {Container, Col, Row} from 'react-bootstrap';

const Home = ({games}) => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="boxBorder">Hey Check Out this new Game</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="titleUnderline">Games</div>
                    {
                        games?.sort((a, b) => a.rating > b.rating ? -1 : 1).map((game) => (
                            <><div className="gameBorder">
                                <div>
                                    <img src={game.background_image} alt={game.name} className="images"></img>
                                </div>
                                <div className="gameContent">
                                    <h4 className="titleUnderline">{game.name}</h4>
                                    <h6>Rating: {game.rating}</h6>
                                    <h6>Released: {game.released}</h6>
                                </div>
                            </div></>
                        ))
                    }
                </Col>
                <Col>
                    <div className="titleUnderline">Forums</div>
                </Col>
            </Row>
        </Container>
    )
} 

export default Home;