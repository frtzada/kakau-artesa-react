import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { navItems, contatoInfo } from '../../data';
import logo from '../../assets/images/logo.jpg';

const Header: React.FC = () => {
  return (
    <Navbar bg="dark" expand="lg" fixed="top" className="header-navbar">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img src={logo} alt="Logo Kakau Artesã" className="logo-img me-3" />
          <span className="brand-text">Kakau Artesã</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {navItems.map(item => (
              <Nav.Link key={item.id} href={item.link} className="nav-link">
                {item.titulo}
              </Nav.Link>
            ))}
            <Button 
              href={`https://wa.me/${contatoInfo.whatsapp}`}
              className="btn-whatsapp ms-lg-3 mt-2 mt-lg-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp me-2"></i>
              Encomendar
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header; 