import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useTilt from '../hooks/useTilt';
import { useCursor } from '../context/CursorContext';
import ProjectModal from './ProjectModal'; // Import the new modal component

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image?: string[]; // Add optional image property
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const tiltRef = useTilt({
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.25,
  });
  const { setCursorVariant } = useCursor();
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <motion.div
        ref={tiltRef}
        className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 rounded-2xl shadow-2xl p-8 flex flex-col justify-between border border-gray-700 hover:shadow-blue-600/40 transition-all duration-300 cursor-pointer" // Added cursor-pointer
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1200px',
          boxShadow: "0 20px 40px rgba(0,0,0,0.4), 0 1.5px 10px rgba(80,80,255,0.08)",
          overflow: 'hidden',
        }}
        whileHover={{
          scale: 1.04,
          boxShadow: "0 30px 60px rgba(80,80,255,0.25), 0 4px 24px rgba(80,80,255,0.15)",
        }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        onMouseEnter={() => setCursorVariant('button')}
        onMouseLeave={() => setCursorVariant('default')}
        onClick={openModal} // Open modal on card click
      >
        {/* 3D Glow effect */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 60% 40%, rgba(80,80,255,0.10) 0%, transparent 70%)",
          zIndex: 0,
        }} />
        <div style={{ transformStyle: 'preserve-3d', position: 'relative', zIndex: 1 }}>
          <h2
            className="text-3xl font-bold text-blue-400 mb-3 drop-shadow-lg"
            style={{ transform: 'translateZ(40px)' }}
          >
            {project.title}
          </h2>
          <p
            className="text-gray-300 mb-4 text-lg"
            style={{ transform: 'translateZ(25px)' }}
          >
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-600/80 text-white text-xs px-3 py-1 rounded-full shadow-md"
                style={{ transform: 'translateZ(15px)' }}
              >
                {tech}
              </span>
            ))}
          </div>
          <button // Changed from <a> to <button>
            onClick={openModal} // Open modal on button click
            className="mt-4 inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 text-center"
            style={{ transform: 'translateZ(10px)' }}
            onMouseEnter={() => setCursorVariant('button')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            Voir le Projet
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && <ProjectModal project={project} onClose={closeModal} />}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
