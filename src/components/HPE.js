import React, {Component} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import healthIcon from "../images/health-icon.png"
import leafIcon from "../images/leaf-icon.png"
import equityIcon from "../images/equity-icon.png"
import Fade from 'react-reveal/Fade';

export class Hpe extends Component {
    cardStyle = { width: '18rem', backgroundColor: '#eceff1', marginTop: "2em",borderColor:"#eceff1", marginLeft:"3em"}
    divSpaceUpStyle = {marginTop: "4em"}
    render() {
        return (
            <div style={this.divSpaceUpStyle}>
                <Container className="text-center">
                    <Fade bottom>
                        <Row>

                            <Col sm={12} md={6} lg={4}>
                                <Card style={this.cardStyle}>
                                    <Card.Img variant="top" src={healthIcon} />
                                    <Card.Body>
                                        <Card.Title>HEALTH</Card.Title>
                                        <Card.Text>
                                            Eliminating vehicle emissions through electrified transportation will directly improve public health and the environment.                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col sm={12} md={6} lg={4}>
                                <Card style={this.cardStyle}>
                                    <Card.Img variant="top" src={leafIcon} />
                                    <Card.Body>
                                        <Card.Title>PROSPERITY</Card.Title>
                                        <Card.Text>
                                            Rebuilding the aging infrastructure by co-designing electric utilities and roadways will produce sustainable, low-cost transportation and high-quality jobs.                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col sm={12} md={6} lg={4}>
                                <Card style={this.cardStyle}>
                                    <Card.Img variant="top" src={equityIcon} />
                                    <Card.Body>
                                        <Card.Title>EQUITY</Card.Title>
                                        <Card.Text>
                                            Developing a public charging infrastructure will promote equitable access to clean transportation and career advancement opportunities for everyone.                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
                    </Fade>
                </Container>
            </div>
        );
    }
}

