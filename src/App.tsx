import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Produtos from './components/Produtos';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <section id="inicio">
                <Hero />
              </section>
              <section id="produtos" className="py-5">
                <Container>
                  <Produtos />
                </Container>
              </section>
              <section id="sobre" className="py-5 bg-light">
                <Container>
                  <Sobre />
                </Container>
              </section>
              <section id="contato" className="py-5">
                <Container>
                  <Contato />
                </Container>
              </section>
            </>
          } />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
