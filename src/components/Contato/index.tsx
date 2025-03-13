import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { socialLinks, contatoInfo } from '../../data';

const Contato: React.FC = () => {
  return (
    <>
      <h2 className="section-title">Entre em Contato</h2>
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <p className="lead mb-5">
            Quer saber mais sobre nossas peças ou fazer uma encomenda especial?
          </p>
          <div className="d-flex justify-content-center gap-4 mb-5">
            <a
              href={`https://wa.me/${contatoInfo.whatsapp}`}
              className="btn btn-success btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp me-2"></i>
              WhatsApp
            </a>
            <a
              href={`mailto:${contatoInfo.email}`}
              className="btn btn-primary btn-lg"
            >
              <i className="far fa-envelope me-2"></i>
              E-mail
            </a>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Contato; 