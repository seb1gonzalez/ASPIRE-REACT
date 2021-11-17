import React, {Component} from 'react';
import { Container, Nav, Navbar} from "react-bootstrap";
import aspirelogo from '../images/aspire-logo-white.png';
import aspirevideo from '../videos/aspire.mp4'
import {utep_styles} from '../styles/utepStyles';


class Header extends Component {

    render() {
        return (
            <div style={{fontSize:"1.15em", color:"black"}}>
                {/* bg="dark" variant="dark" */}
                <Navbar expand="lg"  style={utep_styles.orangeBackground}>
                    <Container fluid>

                        <Navbar.Brand href="#home">
                            <img src={aspirelogo} alt="ASPIRE LOGO"/>
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#ABOUT">ABOUT</Nav.Link>
                                <Nav.Link href="#RESEARCH">RESEARCH</Nav.Link>
                                <Nav.Link href="#PEOPLE">PEOPLE</Nav.Link>
                                <Nav.Link href="#EDUCATION">EDUCATION</Nav.Link>
                                <Nav.Link href="#INCLUSION">INCLUSION</Nav.Link>
                                <Nav.Link href="#INDUSTRY">INDUSTRY</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <div>
                    <video style={{backgroundColor: 'black'}} height="800" width="100%" controls muted autoPlay >
                        <source src={aspirevideo} type="video/mp4"/>
                    </video>
                </div>

                <div>
                    <Container className="text-center" fluid>
                        <h1 style={{color:"#e3a300"}}>ASPIRE</h1>
                        <h3><span style={{color:"#e3a300"}}>A</span>dvancing
                            <span style={{color:"#e3a300"}}> S</span>ustainability through
                            <span style={{color:"#e3a300"}}> P</span>owered
                            <span style={{color:"#e3a300"}}> I</span>nfrastructure for
                            <span style={{color:"#e3a300"}}> R</span>oadway
                            <span style={{color:"#e3a300"}}> E</span>lectrification</h3>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Header;