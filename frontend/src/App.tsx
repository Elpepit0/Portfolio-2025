import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';


function App(): React.ReactElement {
  return (
    <Router>
      <CustomCursor />
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </Router>
  );
}

export default App;