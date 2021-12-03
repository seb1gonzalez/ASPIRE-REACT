import React, {Component} from 'react';
import {utep_styles} from '../styles/utepStyles';
import {Col, Container, Image, Row} from "react-bootstrap";
import UtepFooterIMG from '../images/UTEP-Footer.png';
import CtisFooterIMG from '../images/CTIS_logo2.png';
import aspireLogo from '../images/aspire-logo-white.png';

class Footer extends Component {
    render() {
        return (
            <div style={{backgroundColor:utep_styles.blue, marginTop:"5em", marginBottom:"0px", maxHeight:"fit-content"}}>

                    <Container >
                        <Row>
                            <Col sm={12} lg={6} style={{marginRight:"2em"}}>
                                <Row>
                                    <Col sm={12} lg={3}><Image src={UtepFooterIMG}  height="200px" alt="UTEP"/></Col>
                                    <Col sm={12} lg={6}>
                                        <div style={{color:"white",paddingTop:"2em",marginBottom:"2em", marginLeft:"2em"}}>
                                            <h5 >The University of Texas at El Paso</h5>
                                            500 West University Avenue | El Paso, TX 79968 <br/> 915-747-5000
                                        </div >
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={12} lg={2} style={{backgroundColor:"white", paddingTop:"2%",paddingLeft:"3em"}}>
                                <Image src={CtisFooterIMG}  height="120px" alt="CTIS"/>
                            </Col>
                            <Col sm={12} lg={3} style={{color:"white",paddingTop:"2em",marginBottom:"2em"}}>
                                <h5>Center for Transportation Infrastructure Systems</h5>
                                The University of Texas at El Paso<br/>
                                Engineering Building M-105<br/>
                                ctis@utep.edu  (915) 747-6925
                            </Col>
                            <Col sm={12} lg={6}>
                                <Image src={aspireLogo} height="50px" alt="Aspireblack"/>
                            </Col>
                            <Col sm={12} lg={6} style={{color:"white",paddingLeft:"2em", paddingTop:"1em"}}>
                                Copyright © 2020 Aspire. All Rights Reserved.
                            </Col>
                        </Row>
                    </Container>

            </div>
        );
    }
}

export default Footer;