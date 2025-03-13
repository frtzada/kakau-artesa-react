import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { socialLinks, contatoInfo } from '../../data';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col lg={4} className="mb-4 mb-lg-0">
            <h3 className="h5 mb-3">Sobre Nós</h3>
            <p>
              Criamos peças artesanais únicas com amor e dedicação, mantendo viva
              a tradição do artesanato brasileiro.
            </p>
          </Col>
          <Col lg={4} className="mb-4 mb-lg-0">
            <h3 className="h5 mb-3">Contato</h3>
            <p>
              <i className="far fa-envelope me-2"></i>
              {contatoInfo.email}
              <br />
              <i className="fab fa-whatsapp me-2"></i>
              {contatoInfo.telefone}
            </p>
          </Col>
          <Col lg={4}>
            <h3 className="h5 mb-3">Redes Sociais</h3>
            <div className="d-flex gap-3">
              {socialLinks.map(social => (
                <a
                  key={social.id}
                  href={social.link}
                  className="text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </Col>
        </Row>
        <hr className="my-4" />
        <div className="text-center">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Kakau Artesã. Todos os direitos
            reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer; 