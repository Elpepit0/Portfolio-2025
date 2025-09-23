import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import LegalMentions from './pages/LegalMentions';

// Layout component to wrap main pages with Navbar and Footer
function MainLayout() {
  return (
    <>
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
    </>
  );
}

function App(): React.ReactElement {
  return (
    <Router>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/legal-mentions" element={<LegalMentions />} />
      </Routes>
    </Router>
  );
}

export default App;