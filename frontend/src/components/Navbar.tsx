import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { useCursor } from '../context/CursorContext';
import { Menu, X } from 'lucide-react'; // Import icons
import '../index.css';

const Navbar: React.FC = () => {
  const { setCursorVariant } = useCursor();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          const { offsetTop, offsetHeight } = sectionElement;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-40 transition-all duration-300
        ${isScrolled
          ? 'backdrop-blur-md bg-gradient-to-r from-gray-900/80 to-gray-700/40 shadow-xl py-2'
          : 'backdrop-blur-lg bg-gradient-to-r from-gray-900/60 to-gray-700/40 py-4'}
      `}
      style={{
        borderBottom: '1px solid rgba(80,80,120,0.18)',
        boxShadow: isScrolled ? '0 4px 24px 0 rgba(60,0,120,0.10)' : 'none',
      }}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex items-center gap-2">
          <motion.img
                    src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
                    alt="Yohan"
                    className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center shadow-md"
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
          <a
            href="#home"
            className="text-white text-2xl font-extrabold tracking-tight hover:text-purple-300 transition-colors"
            onMouseEnter={() => setCursorVariant('button')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            Yohan Boiroux
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            onMouseEnter={() => setCursorVariant('button')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center space-x-2">
          {[
            { href: '#home', label: 'Accueil', id: 'home' },
            { href: '#about', label: 'À Propos', id: 'about' },
            { href: '#projects', label: 'Projets', id: 'projects' },
            { href: '#contact', label: 'Contact', id: 'contact' },
          ].map(({ href, label, id }) => (
            <li key={href}>
              <a
                href={href}
                className={`relative group px-4 py-2 text-base font-semibold text-gray-200 transition-all duration-300 rounded-full hover:text-white`}
                onMouseEnter={() => setCursorVariant('button')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                {activeSection === id && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute inset-0 rounded-full bg-white/10 -z-10"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-gray-900/80 to-gray-700/40 py-4 px-6">
          <ul className="flex flex-col items-center space-y-4">
            {[
              { href: '#home', label: 'Accueil', id: 'home' },
              { href: '#about', label: 'À Propos', id: 'about' },
              { href: '#projects', label: 'Projets', id: 'projects' },
              { href: '#contact', label: 'Contact', id: 'contact' },
            ].map(({ href, label, id }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`relative group px-4 py-2 text-lg font-semibold text-gray-200 transition-all duration-300 rounded-full hover:text-white`}
                  onMouseEnter={() => setCursorVariant('button')}
                  onMouseLeave={() => setCursorVariant('default')}
                  onClick={toggleMenu} // Close menu on link click
                >
                  {activeSection === id && (
                    <motion.span
                      layoutId="activeSection-mobile" // Different layoutId for mobile to prevent conflicts
                      className="absolute inset-0 rounded-full bg-white/10 -z-10"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"
        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
      />
    </nav>
  );
};

export default Navbar;
