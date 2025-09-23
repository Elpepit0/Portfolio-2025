import React from 'react';
import { useNavigate } from 'react-router-dom';

function LegalMentions(): React.ReactElement {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8 pt-24">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => navigate(-1)} 
          className="absolute top-8 left-8 bg-gray-800/50 text-white font-bold py-2 px-4 rounded-full hover:bg-gray-700/70 transition-colors duration-300"
        >
          &larr; Retour
        </button>
        <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Mentions Légales
        </h1>

        <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-300">Éditeur du Site</h2>
          <p className="text-gray-300 leading-relaxed">
            Yohan Boiroux<br />
            Email: yohanboiroux@gmail.com<br />
            Ce site est un portfolio personnel.
          </p>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-300">Hébergement</h2>
          <p className="text-gray-300 leading-relaxed">
            Ce site est hébergé par Netlify, Inc.<br />
            44 Montgomery Street, Suite 300<br />
            San Francisco, California 94104<br />
            Site web: www.netlify.com
          </p>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-300">Propriété Intellectuelle</h2>
          <p className="text-gray-300 leading-relaxed">
            Le contenu de ce site, y compris les textes, images et le design, est la propriété de Yohan Boiroux, sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.
          </p>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-300">Limitation de Responsabilité</h2>
          <p className="text-gray-300 leading-relaxed">
            Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LegalMentions;
