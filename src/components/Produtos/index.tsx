import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { produtos } from '../../data';

const Produtos: React.FC = () => {
  return (
    <>
      <h2 className="section-title">
        <img src={require('../../assets/images/logo.jpg')} alt="Logo Kakau Artesã" />
        Peças em Destaque
      </h2>
      <Row className="g-4">
        {produtos.map(produto => (
          <Col key={produto.id} md={4}>
            <Card className="h-100 border-0 shadow-sm">
              <div className="position-relative">
                <Card.Img
                  variant="top"
                  src={produto.imagem}
                  alt={produto.titulo}
                  className="produto-imagem"
                  style={{
                    height: '300px',
                    objectFit: 'cover',
                    objectPosition: produto.id === 2 ? 'center 70%' : 'center'
                  }}
                />
                <div className="produto-overlay">
                  <div className="produto-detalhes">
                    <h3 className="h4 mb-2">{produto.titulo}</h3>
                    <p className="mb-0">{produto.descricao}</p>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Produtos;