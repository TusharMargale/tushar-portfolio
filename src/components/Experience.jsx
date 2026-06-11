import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Suraj Informatics",
    role: "Software Engineer",
    duration: "August 2024 - Present",
    isCurrent: true,
    highlights: [
      "Developing enterprise applications using Java, Spring Boot, React, and MySQL.",
      "Designed and implemented scalable REST APIs for business-critical systems.",
      "Worked on BCMG Insurance Portal, TMS, WMS, BMS, RMMS, and CAPX projects.",
      "Implemented PDF and Excel report generation for business reporting requirements.",
      "Integrated payment gateway and OTP verification modules.",
      "Optimized database queries and improved application performance.",
      "Collaborated with cross-functional teams following Agile methodologies.",
      "Performed bug fixing, code reviews, and production support activities."
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "MySQL",
      "REST API",
      "Git"
    ]
  },
  {
    company: "Suraj Informatics",
    role: "Software Engineer Intern",
    duration: "April 2024 - August 2024",
    isCurrent: false,
    highlights: [
      "Learned and applied Java, Spring Boot, Hibernate, and MySQL in real-world projects.",
      "Assisted in backend development and REST API implementation.",
      "Worked on database design, query writing, and data management tasks.",
      "Participated in debugging, testing, and feature enhancement activities.",
      "Collaborated with senior developers to understand enterprise software development practices.",
      "Gained hands-on experience with Git, Postman, and Agile workflows."
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "MySQL",
      "REST API",
      "Git"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            My <span className="text-gradient">Experience</span>
          </h2>

          <div className="relative border-l border-white/10 ml-4 md:ml-0 md:border-l-0 md:flex md:flex-col md:items-center">
            {/* Center line for Desktop */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-white/10" />

            {experiences.map((exp, index) => (
              <div key={index} className={`relative pl-8 md:pl-0 mb-12 w-full md:flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-0 top-8 -translate-x-1/2 md:left-1/2 flex items-center justify-center z-10">
                  {exp.isCurrent && (
                    <div className="absolute w-4 h-4 bg-primary rounded-full animate-ping opacity-75"></div>
                  )}
                  <div className={`w-4 h-4 rounded-full border-2 border-background relative ${exp.isCurrent ? 'bg-primary shadow-[0_0_15px_rgba(139,92,246,0.8)]' : 'bg-gray-500'}`} />
                </div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className={`glass glass-hover p-6 md:p-8 rounded-2xl w-full md:w-[calc(50%-3rem)] text-left`}
                >
                  <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                      <h4 className="text-lg text-primary font-medium mt-1">{exp.company}</h4>
                    </div>
                    {exp.isCurrent && (
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium whitespace-nowrap h-fit">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        Currently Working Here
                      </div>
                    )}
                  </div>
                  
                  <span className="inline-block text-gray-500 text-sm mb-6">{exp.duration}</span>
                  
                  <ul className="space-y-2.5 mb-8">
                    {exp.highlights.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-400 text-sm md:text-base"
                      >
                        <span className="text-primary mt-1 text-xs">▸</span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                    {exp.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-primary hover:border-primary/50 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
