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
          <div className="social-links">
            <h3 className="h4 mb-4">Siga-nos nas Redes Sociais</h3>
            <div className="d-flex justify-content-center gap-4">
              {socialLinks.map(social => (
                <a
                  key={social.id}
                  href={social.link}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Contato; 