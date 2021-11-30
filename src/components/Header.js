import React, {Component} from 'react';
import { Container, Nav, Navbar} from "react-bootstrap";
import aspirelogo from '../images/aspire-logo-white.png';
import {utep_styles} from '../styles/utepStyles';
import {Link} from "react-router-dom";


class Header extends Component {

    render() {
        return (
            <div style={{fontSize:"1.15em", color:"black"}}>
                {/* bg="dark" variant="dark" */}
                <Navbar expand="lg"  style={utep_styles.orangeBackground} sticky="top">
                    <Container fluid>

                        <Navbar.Brand >
                            <Link to="/aspire"><img src={aspirelogo} alt="ASPIRE LOGO"/></Link>
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                              <Nav.Link><Link  style={{color:"black"}} to="/aspire/about">ABOUT</Link></Nav.Link>
                              <Nav.Link><Link style={{color:"black"}} to="/aspire/research">RESEARCH</Link></Nav.Link>
                              <Nav.Link><Link style={{color:"black"}} to="/aspire/people">PEOPLE</Link></Nav.Link>
                              <Nav.Link><Link style={{color:"black"}} to="/aspire/education">EDUCATION</Link></Nav.Link>
                              <Nav.Link><Link style={{color:"black"}} to="/aspire/inclusion">INCLUSION</Link></Nav.Link>
                              <Nav.Link><Link style={{color:"black"}} to="/aspire/industry">INDUSTRY</Link></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

            </div>
        );
    }
}

export default Header;