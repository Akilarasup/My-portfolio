import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './MyNavbar.css'; // Import external CSS file for styles

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="my-navbar">
      <Container>
        <Navbar.Brand as={ScrollLink} to="hero" smooth={true} duration={500} className="navbar-brand">Your Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={ScrollLink} to="hero" smooth={true} duration={500} className="nav-link">Home</Nav.Link>
            <Nav.Link as={ScrollLink} to="about" smooth={true} duration={500} className="nav-link">About</Nav.Link>
            <Nav.Link as={ScrollLink} to="contact" smooth={true} duration={500} className="nav-link">Contact</Nav.Link>
            <Nav.Link as={ScrollLink} to="skills" smooth={true} duration={500} className="nav-link">Skills</Nav.Link>
            <Nav.Link as={ScrollLink} to="experience" smooth={true} duration={500} className="nav-link">Experience</Nav.Link>
            {/* Update the href to point to your resume.pdf in the static folder */}
            <Nav.Link href="/resume.pdf" className="nav-link" download>Download CV</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
