import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container } from 'react-bootstrap';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="main-content flex-grow-1">
        <Container fluid className="p-0">
          {children}
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
