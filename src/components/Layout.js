// layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container } from 'react-bootstrap';

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: '#ffffff' }}>
      <Header />
      <main className="main-content flex-grow-1">
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

            body {
              font-family: 'Nunito', sans-serif;
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              background-color: #ffffff; /* Pure white background color */
            }

            .header, .footer {
              font-family: 'Roboto', sans-serif;
            }
          `}
        </style>
        <Container fluid className="" style={{ paddingLeft: 0, paddingRight: 0 }}>
          {children}
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
