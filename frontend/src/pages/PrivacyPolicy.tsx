import React from 'react';
import { useNavigate } from 'react-router-dom';

function PrivacyPolicy(): React.ReactElement {
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
          Politique de Confidentialité
        </h1>
        
        <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-300">Introduction</h2>
          <p className="text-gray-300 leading-relaxed">
            Cette politique de confidentialité décrit comment vos informations personnelles sont collectées, utilisées et partagées lorsque vous visitez ce site web (le "Site").
            Ce site est un portfolio personnel hébergé sur Netlify.
          </p>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-300">Collecte des Informations Personnelles</h2>
          <p className="text-gray-300 leading-relaxed">
            Lorsque vous utilisez le formulaire de contact, je collecte votre nom et votre adresse e-mail. Ces informations sont utilisées uniquement pour répondre à votre message.
            Le site utilise également des services tiers comme EmailJS pour l'envoi d'e-mails et Netlify pour l'hébergement, qui peuvent collecter des données de manière anonyme (comme les adresses IP) à des fins d'analyse et de sécurité.
          </p>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-300">Utilisation de vos Informations</h2>
          <p className="text-gray-300 leading-relaxed">
            J'utilise les informations que je collecte principalement pour communiquer avec vous. Je ne partage pas vos informations personnelles avec des tiers à des fins de marketing.
          </p>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-300">Sécurité</h2>
          <p className="text-gray-300 leading-relaxed">
            La sécurité de vos informations personnelles est importante pour moi. Des mesures raisonnables sont prises pour les protéger, mais aucune méthode de transmission sur Internet ou de stockage électronique n'est sûre à 100%.
          </p>
        </div>

        <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold mb-3 text-blue-300">Vos Droits</h2>
          <p className="text-gray-300 leading-relaxed">
            Vous avez le droit d'accéder aux informations personnelles que je détiens à votre sujet et de demander qu'elles soient corrigées, mises à jour ou supprimées. Si vous souhaitez exercer ce droit, veuillez me contacter via le formulaire de contact.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
