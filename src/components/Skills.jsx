import { motion } from 'framer-motion';

import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaAngular,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaDatabase,
  FaCode,
  FaServer,
} from 'react-icons/fa6';

import {
  FaNetworkWired,
  FaProjectDiagram,
  FaLightbulb,
  FaUsers,
} from 'react-icons/fa';

const skillsData = {
  Backend: [
    { name: "Java", level: 95, icon: FaJava },
    { name: "Spring Boot", level: 92, icon: FaServer },
    { name: "REST API", level: 90, icon: FaServer },
    { name: "Hibernate/JPA", level: 88, icon: FaDatabase },
    { name: "Microservices", level: 75, icon: FaNetworkWired },
  ],

  Frontend: [
    { name: "HTML", level: 95, icon: FaHtml5 },
    { name: "CSS", level: 90, icon: FaCss3Alt },
    { name: "JavaScript", level: 85, icon: FaCode },
    { name: "React", level: 80, icon: FaReact },
    { name: "Angular", level: 70, icon: FaAngular },
  ],

  Database: [
    { name: "MySQL", level: 90, icon: FaDatabase },
    { name: "MSSQL", level: 85, icon: FaDatabase },
    { name: "PostgreSQL", level: 80, icon: FaDatabase },
    { name: "MongoDB", level: 70, icon: FaDatabase },
  ],

  Tools: [
    { name: "Postman", level: 95, icon: FaServer },
    { name: "Git", level: 90, icon: FaGitAlt },
    { name: "GitHub", level: 90, icon: FaGithub },
    { name: "Linux", level: 80, icon: FaLinux },
    { name: "Figma", level: 70, icon: FaCode },
  ],

  Other: [
    { name: "OOP", level: 95, icon: FaCode },
    { name: "Problem Solving", level: 90, icon: FaLightbulb },
    { name: "System Design", level: 75, icon: FaProjectDiagram },
    { name: "Agile Methodology", level: 85, icon: FaUsers },
    { name: "Database Design", level: 88, icon: FaDatabase },
  ],

  IDEs: [
    { name: "IntelliJ IDEA", level: 95, icon: FaCode },
    { name: "VS Code", level: 95, icon: FaCode },
    { name: "Eclipse IDE", level: 90, icon: FaCode },
  ],
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            Technical <span className="text-gradient">Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skillsData).map(([category, skills], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass glass-hover p-8 rounded-2xl flex flex-col"
              >
                <h3 className="text-2xl font-semibold text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-3">
                  <span className="w-2 h-8 rounded-full bg-gradient-to-b from-primary to-secondary" />
                  {category}
                </h3>

                <div className="flex flex-col gap-6 flex-grow">
                  {skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ x: 5 }}
                        className="group cursor-default"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <Icon className="text-gray-400 group-hover:text-primary transition-colors text-lg" />
                            <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                              {skill.name}
                            </span>
                          </div>

                          <span className="text-primary text-sm font-mono group-hover:text-secondary transition-colors">
                            {skill.level}%
                          </span>
                        </div>

                        <div className="w-full bg-black/40 rounded-full h-2.5 overflow-hidden border border-white/5 group-hover:border-white/10 transition-colors shadow-inner">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.2 }}
                            className="bg-gradient-to-r from-primary to-secondary h-full rounded-full relative overflow-hidden"
                          >
                            <div className="absolute top-0 left-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                          </motion.div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;