import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/yohan-boiroux-16945030a/',
    label: 'LinkedIn',
    icon: <Linkedin />,
    color: 'hover:text-blue-500'
  },
  {
    href: 'https://github.com/Elpepit0',
    label: 'GitHub',
    icon: <Github />,
    color: 'hover:text-gray-300'
  },
  {
    href: 'mailto:yohanboiroux@gmail.com',
    label: 'Email',
    icon: <Mail />,
    color: 'hover:text-red-400'
  }
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-white py-10">
      <div className="container mx-auto px-4 flex flex-col items-center">
      <p className="text-2xl font-semibold mb-6 tracking-tight">Restons en contact</p>
      <div className="flex justify-center space-x-8 mb-6">
        {socialLinks.map(({ href, label, icon, color }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`text-gray-400 ${color} transition-colors duration-300 rounded-full p-3 bg-gray-800 hover:bg-gray-700 shadow-lg`}
        >
          {icon}
        </a>
        ))}
      </div>
      <div className="text-sm text-gray-400 flex space-x-4">
        <Link to="/privacy-policy" className="hover:text-white">Politique de Confidentialité</Link>
        <Link to="/legal-mentions" className="hover:text-white">Mentions Légales</Link>
      </div>
      <p className="text-sm text-gray-400 mt-4">&copy; {new Date().getFullYear()} Yohan Boiroux. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
