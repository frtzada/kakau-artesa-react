import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import sobreImg from '../../assets/images/sobre.jpg';

const Sobre: React.FC = () => {
  return (
    <section className="sobre-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5">
          <img 
            src={require('../../assets/images/logo.jpg')} 
            alt="Logo Kakau Artesã" 
            className="logo-img me-3"
          />
          Bem-vindo ao Nosso Ateliê
        </h2>
        <Row className="align-items-center g-4">
          <Col lg={6} className="order-lg-2">
            <div className="sobre-imagem position-relative">
              <div className="sobre-imagem-bg"></div>
              <img
                src={sobreImg}
                alt="Nosso ateliê de artesanato"
                className="img-fluid rounded-4 shadow-lg"
              />
            </div>
          </Col>
          <Col lg={6} className="order-lg-1">
            <div className="sobre-texto pe-lg-4">
              <p className="lead text-marrom mb-4">
                Cada peça conta uma história única, criada com técnicas artesanais
                tradicionais e materiais selecionados cuidadosamente.
              </p>
              <p className="mb-5">
                Nossa missão é manter viva a arte do artesanato, trazendo beleza e
                originalidade para seu dia a dia.
              </p>
              <Row className="g-4">
                <Col md={6}>
                  <Card className="h-100 border-0 shadow-lg feature-card">
                    <Card.Body className="text-center p-4">
                      <div className="feature-icon mb-3">
                        <i className="fas fa-heart"></i>
                      </div>
                      <h4 className="h5 mb-3 text-marrom">Feito com Amor</h4>
                      <p className="mb-0">Cada peça é criada com dedicação e carinho</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="h-100 border-0 shadow-lg feature-card">
                    <Card.Body className="text-center p-4">
                      <div className="feature-icon mb-3">
                        <i className="fas fa-gem"></i>
                      </div>
                      <h4 className="h5 mb-3 text-marrom">Peças Únicas</h4>
                      <p className="mb-0">Produtos exclusivos e personalizados</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Sobre; 