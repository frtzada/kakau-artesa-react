import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { produtos } from '../../data';

const Produtos: React.FC = () => {
  return (
    <section className="produtos-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5">
          <img 
            src={require('../../assets/images/logo.jpg')} 
            alt="Logo Kakau Artesã" 
            className="logo-img me-3"
          />
          Peças em Destaque
        </h2>
        <Row className="g-4">
          {produtos.map(produto => (
            <Col key={produto.id} xs={12} sm={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm produto-card">
                <div className="produto-imagem-container">
                  <Card.Img
                    variant="top"
                    src={produto.imagem}
                    alt={produto.titulo}
                    className="produto-imagem"
                    style={{
                      height: '350px',
                      objectFit: 'cover',
                      objectPosition: produto.id === 2 ? 'center 70%' : 'center'
                    }}
                  />
                  <div className="produto-overlay">
                    <Button variant="light" size="lg" className="rounded-pill">
                      Ver Detalhes
                    </Button>
                  </div>
                </div>
                <Card.Body className="text-center p-4">
                  <Card.Title className="h4 mb-3 fw-bold">{produto.titulo}</Card.Title>
                  <Card.Text className="text-muted mb-4">{produto.descricao}</Card.Text>
                  <Button className="btn-encomendar rounded-pill px-4">
                    Encomendar
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Produtos;