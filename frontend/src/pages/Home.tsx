import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useCursor } from '../context/CursorContext';
import '../index.css';
import logo from '../assets/ChatGPT Image 21 sept. 2025, 13_07_51.png';

const socialLinks = [
  {
    icon: <FaGithub />,
    url: 'https://github.com/Elpepit0',
    label: 'GitHub',
  },
  {
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/yohan-boiroux-16945030a/',
    label: 'LinkedIn',
  },
  {
    icon: <FaEnvelope />,
    url: 'mailto:yohanboiroux@gmail.com',
    label: 'Email',
  },
];

const Home: React.FC = () => {
  const { setCursorVariant } = useCursor();
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white overflow-hidden pt-20">
      {/* Decorative background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-purple-700 opacity-20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-blue-500 opacity-20 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <motion.img
          src={logo}
          alt="Yohan"
          className=" w-40 h-40 object-cover mb-8 shadow-2xl"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold z-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-gradient"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Yohan Boiroux
        </motion.h1>
        <motion.span
          className="block text-xl sm:text-2xl md:text-4xl font-medium mt-4 text-center text-gray-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Développeur Full-Stack
        </motion.span>
        <motion.p
          className="mt-8 text-lg md:text-xl text-gray-300 text-center max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Je conçois, développe et optimise des applications web sur-mesure pour répondre aux besoins des entreprises. Passionné par les technologies modernes comme React, TypeScript, Flask et le cloud, j’accompagne mes clients dans la création de solutions digitales robustes, évolutives et innovantes.
        </motion.p>
        <motion.div
          className="flex gap-6 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-3xl text-gray-300 hover:text-blue-400 transition-colors duration-200"
              onMouseEnter={() => setCursorVariant('button')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              {link.icon}
            </a>
          ))}
        </motion.div>
        <motion.a
          href="#contact"
          className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          onMouseEnter={() => setCursorVariant('button')}
          onMouseLeave={() => setCursorVariant('default')}
        >
          Me contacter
        </motion.a>
      </div>
    </div>
  );
};

export default Home;