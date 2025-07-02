import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCursor } from '../context/CursorContext';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  images?: string[]; // Changed to images (plural) and made optional
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { setCursorVariant } = useCursor();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleNextImage = () => {
    if (project.images) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images!.length);
    }
  };

  const handlePrevImage = () => {
    if (project.images) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? project.images!.length - 1 : prevIndex - 1
      );
    }
  };

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-gray-900/80 rounded-2xl shadow-2xl p-6 md:p-8 max-w-3xl w-full relative overflow-y-auto max-h-[90vh]"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors z-10"
          onMouseEnter={() => setCursorVariant('button')}
          onMouseLeave={() => setCursorVariant('default')}
          aria-label="Fermer"
        >
          <X size={32} />
        </button>

        {project.images && project.images.length > 0 && (
          <div className="w-full h-56 md:h-72 overflow-hidden relative group">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex} // Key for re-rendering on image change
                src={project.images[currentImageIndex]}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105 cursor-pointer"
                style={{ filter: 'brightness(0.85) saturate(1.2)' }}
                onClick={openLightbox}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[#23283b] via-transparent to-transparent" />

            {project.images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onMouseEnter={() => setCursorVariant('button')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onMouseEnter={() => setCursorVariant('button')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>
        )}

        <div className="p-8 flex-1 flex flex-col">
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-3 drop-shadow-lg">
            {project.title}
          </h2>
          <p className="text-gray-200 mb-6 text-lg leading-relaxed font-medium">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white text-xs px-4 py-1 rounded-full shadow-md font-semibold tracking-wide"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto flex justify-end">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-xl transition duration-300 text-center text-lg ring-2 ring-transparent hover:ring-4 hover:ring-blue-400 focus:ring-4 focus:ring-blue-400 outline-none"
              onMouseEnter={() => setCursorVariant('button')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              Visiter le Projet
            </a>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isLightboxOpen && project.images && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[100] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onMouseEnter={() => setCursorVariant('button')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <X size={36} />
            </button>
            <motion.img
              key={currentImageIndex} // Key for re-rendering on image change
              src={project.images[currentImageIndex]}
              alt={project.title}
              className="max-w-full max-h-[90vh] object-contain"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing lightbox when clicking image
            />
            {project.images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                  onMouseEnter={() => setCursorVariant('button')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                  onMouseEnter={() => setCursorVariant('button')}
                  onMouseLeave={() => setCursorVariant('default')}
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectModal;
