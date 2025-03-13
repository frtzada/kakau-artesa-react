import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { navItems } from '../../data';
import useScroll from '../../hooks/useScroll';

const Navigation: React.FC = () => {
  const scrolled = useScroll();

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`bg-white ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={require('../../assets/images/logo.jpg')}
            alt="Kakau Artesã"
            className="logo-img"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navItems.map(item => (
              <Nav.Link key={item.id} as={Link} to={item.link}>
                {item.titulo}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation; 