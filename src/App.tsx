import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Hero from './components/Hero';
import Produtos from './components/Produtos';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="produtos" className="section-padding">
          <Container>
            <Produtos />
          </Container>
        </section>
        <section id="sobre" className="section-padding bg-light-custom">
          <Container>
            <Sobre />
          </Container>
        </section>
        <section id="contato" className="section-padding">
          <Container>
            <Contato />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
