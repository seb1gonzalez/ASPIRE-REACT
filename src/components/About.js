import React, {Component} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import NazarianJPG from "../images/Engineering-Nazarian-SAdjusted.jpg"

class About extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col lg={3}>
                            <Image src={NazarianJPG} height="350px"/>
                        </Col>
                        <Col lg={9}>
                            On behalf of the students, staff and faculty affiliated with CTIS, I would like to welcome you to our webpage. The main goals of the Center for Transportation Infrastructure Systems are to address the needs for basic and applied research as related to the transportation infrastructure. Most transportation, pavement and geotechnical engineering research projects at UTEP are concentrated under this Center. We are one of the best equipped research facilities in the Southwest.

                            Members of the CTIS family at UTEP focus their research on different areas of transportation Infrastructure including Pavement Evaluation and Design, Transportation Planning, Environmental Quality, Asset and Infrastructure Management, Structures and Safety.

                            We are committed to high-quality research through work force development. The heart of the operation of CTIS is the undergraduate and graduate research assistants, who work side-by-side with a dozen faculty and research engineers affiliated with CTIS. More than 40 students are involved in a number of projects at any time. We are always looking for new students to join our group.

                            We are also thankful to our governmental and private sponsors and to our collaborators from academia and industry for their support. Please feel free to contact us for information on any of our past or ongoing activities.

                            We look forward to be of service to you on relevant research projects.
                        </Col>
                    </Row>

                </Container>

            </div>
        );
    }
}

export default About;