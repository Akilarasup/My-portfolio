import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link as GatsbyLink } from 'gatsby';
import { Link as ScrollLink } from 'react-scroll';
import './Header.css'; // Import external CSS file for styles

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="header py-3">
      <Container fluid>
        <Navbar.Brand as={GatsbyLink} to="/" className="navbar-brand">Akilarasu P</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto">
            <Nav.Link as={ScrollLink} to="hero" smooth={true} duration={500} className="nav-link me-lg-3">Home</Nav.Link>
            <Nav.Link as={ScrollLink} to="about" smooth={true} duration={500} className="nav-link me-lg-3">About</Nav.Link>
            <Nav.Link as={ScrollLink} to="skills" smooth={true} duration={500} className="nav-link me-lg-3">Skills</Nav.Link>
            <Nav.Link as={ScrollLink} to="experience" smooth={true} duration={500} className="nav-link me-lg-3">Experience</Nav.Link>
            <Nav.Link as={ScrollLink} to="contact" smooth={true} duration={500} className="nav-link me-lg-3">Contact</Nav.Link>
            <Nav.Link href="/resume.pdf" className="nav-link me-lg-3" download>Download CV</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
