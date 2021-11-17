import React, {Component} from 'react';
import {Button, Card, CardGroup, Col, Container, Row} from "react-bootstrap";
import researchIMG from '../images/research.png'
import innovationIMG from '../images/innovation.jpg'
import workforceIMG from '../images/workforce.png'
import inclusionIMG from '../images/inclusion.jpg'
import {Hpe} from "./HPE";


export class Body extends Component {
    imgStyle = {height: '18em'}
    buttonCardStyle = {marginTop: "3em", marginBottom: "1em",};
    divSpaceUpStyle = {marginTop: "4em"}


    render() {
        return (
            <div style={this.divSpaceUpStyle}>
                <Container fluid>
                    {/*Research, Workforce, Innovation, Inclusion*/}
                    <Row  className="text-center">

                        <Col sm={12} md={6} lg={3}> {/*research*/}
                            <Card style={{marginTop:"1em"}}>
                                <Card.Img variant="top" src={researchIMG} style={this.imgStyle}/>
                                <Card.Body>
                                    <Card.Title><h3>Research</h3></Card.Title>
                                    <Card.Text>
                                        Seamless integration of wireless and wired charging systems across all vehicle
                                        classes with power levels to achieve ubiquity.
                                    </Card.Text>
                                    <Button style={this.buttonCardStyle} variant="outline-dark">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} md={6} lg={3}>
                            {/*INNOVATION*/}
                            <Card style={{marginTop:"1em"}}>
                                <Card.Img variant="top" src={innovationIMG} style={this.imgStyle}/>
                                <Card.Body>
                                    <Card.Title><h3>Innovation</h3></Card.Title>
                                    <Card.Text>
                                        With an accelerated transition of technologies to the marketplace, partners and
                                        participants are included in the innovation process.
                                    </Card.Text>
                                    <Button style={this.buttonCardStyle} variant="outline-dark">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} md={6} lg={3}>
                            {/*WORKFORCE*/}
                            <Card style={{marginTop:"1em"}}>
                                <Card.Img variant="top" src={workforceIMG} style={this.imgStyle}/>
                                <Card.Body>
                                    <Card.Title><h3>Workforce</h3></Card.Title>
                                    <Card.Text>
                                        From trades to pre-college and up, developing curriculums to meet rapid domestic
                                        jobs growth for national-scale electric and transportation infrastructure
                                        projects.
                                    </Card.Text>
                                    <Button style={this.buttonCardStyle} variant="outline-dark">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} md={6} lg={3}>
                            {/*INLCUSION*/}
                            <Card style={{marginTop:"1em"}}>
                                <Card.Img variant="top" src={inclusionIMG} style={this.imgStyle}/>
                                <Card.Body>
                                    <Card.Title><h3>Inclusion</h3></Card.Title>
                                    <Card.Text>
                                        More than an obligation, inclusivity at all levels of decision-making improves
                                        performance. Adaptability is a byproduct of diversity.
                                    </Card.Text>
                                    <Button style={this.buttonCardStyle} variant="outline-dark">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>
                <Hpe/>

            </div>
        );
    }
}
