import React, {Component} from 'react';
import { Container, Nav, Navbar} from "react-bootstrap";
import aspirelogo from '../images/aspire-logo-white.png';
import {utep_styles} from '../styles/utepStyles';


class Header extends Component {

    render() {
        return (
            <div style={{fontSize:"1.15em", color:"black"}}>
                {/* bg="dark" variant="dark" */}
                <Navbar expand="lg"  style={utep_styles.orangeBackground} sticky="top">
                    <Container fluid>

                        <Navbar.Brand href="/">
                            <img src={aspirelogo} alt="ASPIRE LOGO"/>
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/about">ABOUT</Nav.Link>
                                <Nav.Link href="/research">RESEARCH</Nav.Link>
                                <Nav.Link href="/people">PEOPLE</Nav.Link>
                                <Nav.Link href="/education">EDUCATION</Nav.Link>
                                <Nav.Link href="/inclusion">INCLUSION</Nav.Link>
                                <Nav.Link href="/industry">INDUSTRY</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
        );
    }
}

export default Header;