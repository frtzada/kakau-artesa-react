import React from 'react';
<<<<<<< HEAD
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
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
>>>>>>> 1d23411a394b9f0a1ec6231b6970d7858e52a75c

export default App;
