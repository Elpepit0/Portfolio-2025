import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import imagePremierSite from '../assets/capture-premier-site.png'
import imagePremierPortfolio from '../assets/capture-premier-portfolio.png'
import imageTerraVerde from '../assets/capture-terra-verde.png'
import imageWaveDev from '../assets/capture-wavedevv.png'
import imageSiteChat from '../assets/capture-site-tchat.png'
import imageSiteChat2 from '../assets/capture-site-tchat-2.png'
import '../index.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  images?: string[]; // Added optional image property
}

const projects: Project[] = [
  {
    id: 1,
    title: "Mon premier Site Web",
    description: "Ce site avait pour but de montrer ce que j'avais apris au sein de clever cloud pour mon stage de 3ème.",
    technologies: ["HTML", "CSS"],
    link: "https://github.com/Elpepit0/clever-stage",
    images: [imagePremierSite],
  },
  {
    id: 2,
    title: "Premier Portfolio",
    description: "Ce portfolio étais pour moi un moyen de découvir de nouvelle technologies et de mettre en pratique mes compétences.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Elpepit0/Premier-Projet-Portfolio-Test",
    images: [imagePremierPortfolio],
  },
  {
    id: 3,
    title: "Terra Verde",
    description: "Ce site est mon premier site utilisant React, ce site est un site factice vitrine pour une entreprise de jardinage fictif.",
    technologies: ["React", "Tailwind CSS"],
    link: "https://github.com/Elpepit0/Terra-Verde-Paysage",
    images: [imageTerraVerde],
  },
  {
    id: 4,
    title: "WaveDev",
    description: "Ce site est un site vitrine que j'avais crée pour proposer mes services de développement, il utilise React et Tailwind CSS.",
    technologies: ["React", "Tailwind CSS"],
    link: "https://github.com/Elpepit0/WaveDev",
    images: [imageWaveDev],
  },
  {
    id: 5,
    title: "Site Tchat",
    description: "Ce site est un site de tchat en temps réel, il utilise React pour le front-end et Flask avec WebSockets pour le back-end. Réalisé pendant mon stage de seconde chez Clever Cloud.",
    technologies: ["React", "Tailwind CSS", "Socket.IO", "Flask", "WebSockets"],
    link: "https://tchat-visio.cleverapps.io",
    images: [imageSiteChat, imageSiteChat2],
  },
  
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Délai entre l'apparition de chaque carte
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8 pt-20">
      <motion.h1
        className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Mes Projets
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;