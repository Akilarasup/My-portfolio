import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container } from 'react-bootstrap';

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="main-content flex-grow-1">
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Arimo&display=swap');

            body {
              font-family: 'Arimo', sans-serif;
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              background-color: #f8f9fa; /* Example background color */
            }
          `}
        </style>
        <Container fluid className="mt-4">
          {children}
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
