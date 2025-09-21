import React from 'react';
import { motion } from 'framer-motion';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiFlask, SiHtml5, SiJavascript, SiCss3, SiPostgresql} from 'react-icons/si';
import { AiOutlinePython } from 'react-icons/ai';
import '../index.css';

const skills = [
  { icon: <FaReact className=" text-cyan-400" />, label: 'React.js', border: 'hover:border-cyan-400' },
  { icon: <SiTailwindcss className="mr-2 text-sky-400" />, label: 'Tailwind CSS', border: 'hover:border-sky-400' },
  { icon: <SiFlask className=" text-white" />, label: 'Flask.py', border: 'hover:border-white' },
  { icon: <SiHtml5 className=" text-orange-500" />, label: 'HTML', border: 'hover:border-orange-500' },
  { icon: <SiCss3 className=" text-blue-400" />, label: 'CSS', border : 'hover:border-blue-400' },
  { icon: <SiPostgresql className=" text-gray-400" />, label: 'PostgreSQL', border: 'hover:border-white' },
  { icon: <SiTypescript className=" text-blue-400" />, label: 'TypeScript', border: 'hover:border-blue-400' },
  { icon: <SiJavascript className=" text-yellow-400" />, label: 'JavaScript', border: 'hover:border-yellow-400' },
  { icon: <AiOutlinePython className=" text-gray-400" />,label: 'Python', border: 'hover:border-white'}
];

const timelineEvents = [
  {
    year: "2022",
    title: "Début de l'aventure",
    description: "Découverte du développement web et des premières lignes de code.",
  },
  {
    year: "2023",
    title: "Premier stage chez Clever Cloud (3ème)",
    description: "Acquisition de compétences solides en HTML, CSS, JavaScript et React.",
  },
  {
    year: "2024",
    title: "Premier Projet Factice",
    description: "Développement d'un site vitrine pour une entreprise fictive, intégration de React et TailwindCSS.",
  },
  {
    year: "2025",
    title: "Second Stage chez Clever Cloud (2nde)",
    description: "Approfondissement des connaissances en React, Python, apprentissage de Flask, PostgreSQL, MultiInstance.",
  },
  {
    year: "2027",
    title: "Baccalauréat Soon...",
    description: "Soon...",
  },
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181c2b] via-[#232946] to-[#16181d] text-white px-4 py-16 md:px-12">
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-lg"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        À Propos de Moi
      </motion.h1>

      <motion.div
        className="max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <motion.p
          className="text-lg md:text-xl text-center leading-relaxed text-gray-300 backdrop-blur-sm bg-white/5 rounded-xl px-6 py-4 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Je m'appelle Yohan, j'ai 16 ans et je suis un jeune développeur passionné par le web et les nouvelles technologies. Curieux et autodidacte, j'ai commencé à coder dès le collège et j'ai rapidement élargi mes compétences en explorant différents langages et frameworks. J'aime relever des défis techniques, apprendre en continu et partager mes projets. Mon objectif est de créer des applications modernes, intuitives et utiles, tout en cultivant ma créativité et mon esprit d'équipe.
        </motion.p>
      </motion.div>

      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Mon Parcours
      </motion.h2>

      <div className="relative max-w-3xl mx-auto mb-20">
        {/* Timeline vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-600 rounded-full opacity-70"></div>
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            className={`mb-12 flex flex-col w-full relative z-10 md:flex-row ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className={`w-full md:w-1/2 flex ${index % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'}`}>
              <div className="relative group bg-gradient-to-br from-[#232946] to-[#181c2b] p-6 rounded-2xl shadow-2xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 overflow-hidden">
              {/* Accent circle */}
              <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 border-4 border-[#181c2b] shadow-lg group-hover:scale-110 transition-transform duration-300"></span>
              {/* Glow effect */}
              <span className="absolute inset-0 bg-cyan-400/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></span>
              <h3 className="text-xl md:text-2xl font-bold text-cyan-300 mb-1 drop-shadow">{event.year} <span className="text-gray-400 font-normal">— {event.title}</span></h3>
              <p className="text-gray-200">{event.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mt-10 mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-orange-500"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Mes Compétences
      </motion.h2>

      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.label}
            className={`bg-gradient-to-br from-[#232946] to-[#181c2b] p-5 rounded-xl shadow-lg text-center border border-gray-700 ${skill.border} transition-all duration-300 flex flex-col items-center`}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <span className="text-lg font-medium text-gray-100">{skill.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
