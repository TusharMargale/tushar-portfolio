import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import CodeRunnerGame from './CodeRunnerGame';
import TerminalMode from './TerminalMode';

const Footer = () => {

  const [showGame, setShowGame] = useState(false);
  return (
    <footer className="bg-[#050505] py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Tushar Margale</h2>
          <p className="text-gray-400 max-w-sm">
            Backend Engineer & React Developer building scalable enterprise applications and modern digital experiences.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-primary transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Connect</h3>
          <div className="flex gap-4">
            <a href="https://github.com/TusharMargale" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/tusharmaragale/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all">
              <FaLinkedin size={20} />
            </a>
            <a href="mailto:tusharmaragale@gmail.com" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all">
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">

        <div className="flex justify-center gap-4 mb-6">

          <button
            onClick={() => setShowGame(true)}
            className="
    px-5 py-2
    rounded-full
    border border-primary
    text-primary
    hover:bg-primary
    hover:text-black
    transition-all
    "
          >
            🎮 Developer Playground
          </button>


          <TerminalMode />

        </div>

        <p>
          Crafted with ☕, Code & Passion by
          <span className="text-white font-semibold">
            Tushar Margale
          </span>
        </p>

      </div>
      {
        showGame && (
          <CodeRunnerGame
            onClose={() => setShowGame(false)}
          />
        )
      }
    </footer>
  );
};

export default Footer;
