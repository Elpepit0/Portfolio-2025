import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiUser, FiMessageCircle, FiSend } from 'react-icons/fi';
import { useCursor } from '../context/CursorContext';
import '../index.css';

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string | null>(null);
  const { setCursorVariant } = useCursor();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Envoi en cours...');

    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
          form.current,
          {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string,
          }
        )
        .then(
          () => {
            setStatus('Message envoyé avec succès !');
            form.current?.reset();
          },
          (error) => {
            console.error('FAILED...', error.text);
            setStatus(`Erreur: ${error.text || 'Quelque chose s\'est mal passé.'}`);
          }
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#181c2b] via-[#232946] to-[#1a1a2e] text-white flex flex-col items-center justify-center pt-24 px-4">
      <motion.div
        className="w-full max-w-2xl bg-[#232946]/80 rounded-3xl shadow-2xl p-10 backdrop-blur-md border border-[#2e335a] relative"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Contactez-moi
        </motion.h1>
        <p className="text-center text-lg text-gray-300 mb-8">
          Une question, une proposition ou juste envie de dire bonjour ? Remplissez le formulaire ci-dessous.
        </p>
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div>
            <label htmlFor="name" className="block text-base font-medium text-gray-200 mb-2">
              <span className="inline-flex items-center gap-2">
                <FiUser className="text-blue-400" /> Nom
              </span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 rounded-xl bg-[#20223a] border border-[#2e335a] focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-400 transition"
              placeholder="Votre nom"
              required
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-base font-medium text-gray-200 mb-2">
              <span className="inline-flex items-center gap-2">
                <FiMail className="text-blue-400" /> Email
              </span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 rounded-xl bg-[#20223a] border border-[#2e335a] focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-400 transition"
              placeholder="Votre email"
              required
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-base font-medium text-gray-200 mb-2">
              <span className="inline-flex items-center gap-2">
                <FiMessageCircle className="text-blue-400" /> Message
              </span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full p-3 rounded-xl bg-[#20223a] border border-[#2e335a] focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-400 transition"
              placeholder="Votre message"
              required
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:to-pink-600 text-white font-bold py-3 rounded-full shadow-lg transition duration-300 text-lg"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onMouseEnter={() => setCursorVariant('button')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            <FiSend className="text-xl" /> Envoyer le Message
          </motion.button>
          {status && (
            <motion.p
              className={`mt-4 text-center text-base font-semibold ${
                status.includes('succès') ? 'text-green-400' : 'text-pink-400'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {status}
            </motion.p>
          )}
        </motion.form>
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full p-2 shadow-lg">
          <FiMail className="text-3xl text-white" />
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;

