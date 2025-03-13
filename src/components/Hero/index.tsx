import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import heroBg from '../../assets/images/hero-bg.jpg';

const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroBg})`
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center text-white">
            <h1 className="display-4 mb-4">Kakau Artesã</h1>
            <p className="lead mb-5">
              Artesanato autêntico feito com amor e dedicação
            </p>
            <a href="#produtos" className="btn btn-primary btn-lg">
              Conheça Nossas Peças
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero; 