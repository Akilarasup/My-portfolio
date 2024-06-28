import React from 'react';
import { Link } from 'gatsby';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './MyNavbar.css'; // Import external CSS file for styles

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="my-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">Your Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">About</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link">Contact</Nav.Link>
            <Nav.Link as={Link} to="/skills" className="nav-link">Skills</Nav.Link>
            <Nav.Link as={Link} to="/experience" className="nav-link">Experience</Nav.Link>
            {/* Update the href to point to your resume.pdf in the static folder */}
            <Nav.Link href="/resume.pdf" className="nav-link" download>Download CV</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
