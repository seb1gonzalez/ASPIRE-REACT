import React, {Component} from 'react';
import { Container, Nav, Navbar} from "react-bootstrap";
import aspirelogo from '../images/aspire-logo-white.png';
import aspirevideo from '../videos/aspire.mp4'

class Header extends Component {
    render() {
        return (
            <div>

                <Navbar bg="dark" variant="dark" expand="lg">
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
                    <video style={{backgroundColor: 'black'}} height="800" width="100%" controls >
                        <source src={aspirevideo} type="video/mp4"/>
                    </video>
                </div>
                <div>
                    <Container className="text-center">
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