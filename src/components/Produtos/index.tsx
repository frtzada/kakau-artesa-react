import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { produtos } from '../../data';

const Produtos: React.FC = () => {
  return (
    <>
      <h2 className="section-title">Peças em Destaque</h2>
      <Row>
        {produtos.map(produto => (
          <Col key={produto.id} md={4} className="mb-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={require(`../../assets/images/${produto.imagem}`)}
                alt={produto.titulo}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{produto.titulo}</Card.Title>
                <Card.Text>{produto.descricao}</Card.Text>
                <div className="mt-auto text-center">
                  <button className="btn btn-primary">Ver Detalhes</button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Produtos; 