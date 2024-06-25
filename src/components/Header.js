import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="header py-3">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Akilarasu P</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/" className="nav-link me-3">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link me-3">About</Nav.Link>
            <Nav.Link as={Link} to="/skills" className="nav-link me-3">Skills</Nav.Link>
            <Nav.Link as={Link} to="/experience" className="nav-link me-3">Experience</Nav.Link>
            <Nav.Link as={Link} to="/projects" className="nav-link me-3">Projects</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link me-3">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
