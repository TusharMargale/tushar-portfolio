import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowDown, FaCircle } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative pt-20 overflow-hidden">
      {/* Background Particles Placeholder */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center z-10 w-full">
        
        {/* Available for opportunities badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-sm font-medium text-gray-300">
            <FaCircle className="text-primary text-[10px] animate-pulse" />
            Available for opportunities
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 items-center"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-2">
            Hi, I'm <span className="text-gradient">Tushar Margale</span>
          </h2>
          
          <div className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-300 h-[60px]">
            <TypeAnimation
              sequence={[
                'Backend Developer', 2000,
                'Full Stack Developer', 2000,
                'System Architect', 2000,
                'Java Developer', 2000,
                'Spring Boot Developer', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mt-4">
            2.2+ years building production systems that scale. Specializing in Java, Spring Boot, React, and modern software architecture with a passion for clean code and high-performance applications.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="#projects" className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300">
              View My Work →
            </a>
            <a href="/resume.pdf" download className="px-8 py-3 glass glass-hover text-white font-semibold rounded-full flex items-center gap-2 transition-all duration-300">
              <FaArrowDown size={14} /> Download Resume
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 md:gap-16 mt-16 pt-10 border-t border-white/10 w-full max-w-3xl">
            <div className="flex flex-col items-center text-center">
              <h4 className="text-4xl md:text-5xl font-bold text-gradient mb-2">2.2+</h4>
              <p className="text-sm md:text-base text-gray-400">Years Experience</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h4 className="text-4xl md:text-5xl font-bold text-gradient mb-2">6+</h4>
              <p className="text-sm md:text-base text-gray-400">Projects Delivered</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h4 className="text-4xl md:text-5xl font-bold text-gradient mb-2">15+</h4>
              <p className="text-sm md:text-base text-gray-400">Technologies</p>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
