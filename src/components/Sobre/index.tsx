import React from 'react';
import { Row, Col } from 'react-bootstrap';
import sobreImg from '../../assets/images/sobre.jpg';

const Sobre: React.FC = () => {
  return (
    <>
      <h2 className="section-title">Bem-vindo ao Nosso Ateliê</h2>
      <Row className="align-items-center">
        <Col lg={6} className="mb-4 mb-lg-0">
          <div className="sobre-texto">
            <p className="lead">
              Cada peça conta uma história única, criada com técnicas artesanais
              tradicionais e materiais selecionados cuidadosamente.
            </p>
            <p>
              Nossa missão é manter viva a arte do artesanato, trazendo beleza e
              originalidade para seu dia a dia.
            </p>
            <div className="row mt-4">
              <div className="col-md-6 mb-3">
                <div className="d-flex align-items-center">
                  <i className="fas fa-heart text-primary h3 mb-0 me-3"></i>
                  <div>
                    <h4 className="h5">Feito com Amor</h4>
                    <p className="mb-0">Cada peça é criada com dedicação e carinho</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="d-flex align-items-center">
                  <i className="fas fa-gem text-primary h3 mb-0 me-3"></i>
                  <div>
                    <h4 className="h5">Peças Únicas</h4>
                    <p className="mb-0">Produtos exclusivos e personalizados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className="sobre-imagem">
            <img
              src={sobreImg}
              alt="Nosso ateliê de artesanato"
              className="img-fluid rounded shadow"
            />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Sobre; 