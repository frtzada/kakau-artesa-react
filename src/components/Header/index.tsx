import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { navItems } from '../../data';
import logo from '../../assets/images/logo.jpg';

const Header: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img src={logo} alt="Logo Kakau Artesã" className="logo-img me-3" />
          <span>Kakau Artesã</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navItems.map(item => (
              <Nav.Link key={item.id} href={item.link}>
                {item.titulo}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header; 