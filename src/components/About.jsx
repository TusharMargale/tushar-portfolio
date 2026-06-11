import { motion } from 'framer-motion';
import { FaServer, FaProjectDiagram, FaLightbulb, FaCode } from 'react-icons/fa';

const cards = [
  { icon: FaServer, title: "Backend Engineering" },
  { icon: FaProjectDiagram, title: "System Design" },
  { icon: FaLightbulb, title: "Problem Solving" },
  { icon: FaCode, title: "API Development" },
];

const About = () => {
  return (
    <section id="about" className="py-20 min-h-screen flex items-center relative z-10">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Left Side: Intro */}
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm a passionate Software Engineer focused on backend development and scalable system design. I enjoy building enterprise-grade applications using Java, Spring Boot, React, MySQL, and modern cloud technologies. My goal is to create reliable, maintainable, and high-performance software solutions that solve real business problems.
            </p>

            <div className="mt-6 flex flex-col gap-4">
              <div className="glass p-6 rounded-xl font-mono text-sm overflow-x-auto text-gray-300">
                <span className="text-pink-500">const</span> <span className="text-blue-400">developer</span> = {'{'}
                <br />
                &nbsp;&nbsp;name: <span className="text-green-400">"Tushar Margale"</span>,
                <br />
                &nbsp;&nbsp;role: <span className="text-green-400">"Backend Engineer"</span>,
                <br />
                &nbsp;&nbsp;passion: <span className="text-green-400">"Building scalable systems"</span>,
                <br />
                &nbsp;&nbsp;coffee: <span className="text-orange-400">true</span>,
                <br />
                &nbsp;&nbsp;motto: <span className="text-green-400">"Ship it! 🚀"</span>,
                <br />
                &nbsp;&nbsp;focus: [<span className="text-green-400">"Java"</span>, <span className="text-green-400">"Spring Boot"</span>, <span className="text-green-400">"React"</span>, <span className="text-green-400">"System Design"</span>]
                <br />
                {'}'};
              </div>
              <div className="glass p-6 rounded-xl font-mono text-sm overflow-x-auto text-gray-300">

                <span className="text-pink-500">const</span>{" "}
                <span className="text-blue-400">developerJourney</span> = {"{"}

                <br />

                &nbsp;&nbsp;role:{" "}
                <span className="text-green-400">
                  "Full Stack Developer"
                </span>
                ,

                <br />

                &nbsp;&nbsp;frontend:{" "}
                <span className="text-green-400">
                  "React + Modern UI Development"
                </span>
                ,

                <br />

                &nbsp;&nbsp;backend:{" "}
                <span className="text-green-400">
                  "Java + Spring Boot + REST APIs"
                </span>
                ,

                <br />

                &nbsp;&nbsp;database:{" "}
                <span className="text-green-400">
                  "Database Design & Optimization"
                </span>
                ,

                <br />

                &nbsp;&nbsp;building:{" "}
                <span className="text-green-400">
                  "Scalable Enterprise Applications"
                </span>
                ,

                <br />

                &nbsp;&nbsp;goal:{" "}
                <span className="text-green-400">
                  "Full Stack Solution Development"
                </span>

                <br />

                {"}"};

              </div>
            </div>
          </div>

          {/* Right Side: Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 lg:pt-0">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="glass glass-hover p-8 rounded-2xl flex flex-col items-center justify-center text-center gap-4 h-48"
              >
                <card.icon size={40} className="text-primary mb-2" />
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
