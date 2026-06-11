import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: "BMS (Barcode Management System)",
    shortDesc: "Enterprise inventory and barcode transaction management system.",
    description:
      "Developed a Barcode Management System that integrates with a third-party application to receive item and quantity data through APIs. The system manages inventory operations such as Goods Receipt Notes (GRN), Delivery Notes, Purchase Returns, Sales Returns, and Back Order Purchases (BOP). It ensures accurate stock movement tracking and transaction processing across the warehouse lifecycle.",
    contributions: [
      "Developed most of the backend modules using Spring Boot.",
      "Integrated third-party APIs for item and quantity synchronization.",
      "Designed and implemented a centralized transaction API used across multiple screens.",
      "Implemented complex business validations and transaction handling logic.",
      "Developed database operations for inventory processing and stock movement tracking.",
      "Participated in debugging, optimization, and production support activities."
    ],
    tech: ["Java", "Spring Boot", "MySQL", "REST API", "Angular JS"]
  },
  {
    id: 2,
    title: "BCMG Insurance Portal",
    shortDesc: "Insurance enrollment and policy management platform for advocates and their families.",

    description:
      "Developed an insurance enrollment platform for advocates and their family members. The system manages complete insurance registration workflow including user details submission, family member enrollment, age-based policy eligibility, premium calculation, online payment processing, and document submission.",

    contributions: [
      "Developed backend modules using Spring Boot for insurance workflows.",
      "Implemented OTP-based login and user verification functionality.",
      "Created age-based business rules to determine eligible insurance packages and premium calculations.",
      "Integrated payment gateway flow for premium transactions.",
      "Developed enrollment APIs for advocate and family member registrations.",
      "Implemented document handling and email-based communication workflow.",
      "Generated policy-related PDFs and managed enrollment data processing."
    ],

    tech: [
      "Java",
      "Spring Boot",
      "MySQL",
      "REST API",
      "Thymeleaf",
      "Payment Gateway",
      "Angular JS"
    ]
  },
  {
    id: 3,
    title: "WMS (Warehouse Management System)",
    shortDesc: "Enterprise warehouse management and inventory control system.",

    description:
      "Developed a Warehouse Management System used for managing complete warehouse operations including purchase, receiving, storage, picking, and dispatch processes. The system handles inventory movement across floor, row, rack, and bin locations with real-time stock tracking and automated quantity calculations.",

    contributions: [
      "Developed backend modules using Spring Boot for warehouse operations.",
      "Implemented complete warehouse workflow including Purchase Order, ASN, GRN, Tagging, Putaway, Sales Order, Picklist, and Delivery Note.",
      "Designed inventory location management logic for floor, row, rack, and bin-level tracking.",
      "Implemented FIFO-based inventory movement to ensure older stock is consumed first.",
      "Developed stock In/Out transaction handling with automatic bin quantity updates.",
      "Implemented CBM calculation logic for inventory storage and movement tracking.",
      "Developed unitization and deconsolidation workflows for stock conversion between higher and lower units.",
      "Created dashboards and reports for warehouse monitoring and operational insights.",
      "Worked on production-level warehouse application used internally by Suraj Informatics."
    ],

    tech: [
      "Java",
      "Spring Boot",
      "MySQL",
      "REST API",
      "Angular JS"
    ]
  },
  {
    id: 4,
    title: "TMS (Ticket Management System)",
    shortDesc: "Enterprise ticket management and SLA tracking platform.",

    description:
      "Developed a Ticket Management System for managing client support requests and issue resolution workflows. The platform allows clients to raise tickets, automatically assigns them to technical support teams, tracks task progress, maintains communication history, and ensures SLA-based response and resolution management.",

    contributions: [
      "Developed backend modules using Spring Boot for ticket lifecycle management.",
      "Implemented ticket creation and automatic assignment workflow.",
      "Designed task management flow linked with tickets for issue tracking.",
      "Implemented ticket communication features including replies and internal notes.",
      "Developed SLA rule management for response and resolution time tracking.",
      "Implemented penalty calculation logic based on SLA violations.",
      "Created dashboards and reports for ticket monitoring and performance analysis.",
      "Handled ticket status tracking, follow-ups, and workflow validations."
    ],

    tech: [
      "Java",
      "Spring Boot",
      "MySQL",
      "REST API",
      "Angular JS"
    ]
  },
  {
    id: 5,
    title: "RMMS (Raw Material Movement System)",
    shortDesc: "Real-time cargo movement tracking and workflow management system.",

    description:
      "Developed a Raw Material Movement System for managing end-to-end cargo transportation workflows from Port to Port and Port to Plant and many more. The system tracks material movement through multiple operational stages including vehicle assignment, gate entry, weighment, loading, unloading, and final delivery with real-time tracking support using RFID technology.",

    contributions: [
      "Developed backend modules using Spring Boot for cargo movement operations.",
      "Implemented Port to Port and Port to Plant movement workflows and many more...",
      "Developed vehicle assignment, gate entry and exits, weighment, loading, and unloading process handling and many more...",
      "Integrated RFID-based tracking for real-time vehicle and material movement monitoring.",
      "Converted existing enum-based workflow logic into a database-driven dynamic workflow system.",
      "Designed configurable movement validation where process flow is controlled through database configurations.",
      "Implemented dynamic validations to prevent incorrect movement sequences.",
      "Reduced dependency on code changes and deployments for future workflow modifications.",
      "Improved system flexibility by enabling new movement flows through database updates."
    ],

    tech: [
      "Java",
      "Spring Boot",
      "MySQL",
      "REST API",
      "Angular JS"
    ]
  },
  {
    id: 6,
    title: "CAPX (Cheque Print System)",
    shortDesc: "Enterprise cheque printing and approval workflow automation system.",

    description:
      "Developed an enterprise cheque printing system to automate manual cheque processes. The application manages client details, multiple bank account configurations, cheque templates, approval workflows, and secure cheque generation based on transaction requirements.",

    contributions: [
      "Developed backend modules using Spring Boot for cheque processing workflows.",
      "Implemented cheque generation flow based on selected bank, beneficiary details, and transaction amount.",
      "Developed configurable cheque print templates for different banking formats.",
      "Implemented approval workflow based on configurable amount limits.",
      "Added validation to restrict cheque printing until required approvals are completed.",
      "Designed dynamic database connection handling based on logged-in user and client configuration.",
      "Implemented multi-tenant database architecture where each client maintains a separate database.",
      "Configured runtime database selection without requiring application deployment changes.",
      "Developed secure transaction processing and business validations."
    ],

    tech: [
      "Java",
      "Spring Boot",
      "MySQL",
      "REST API",
      "Dynamic Database Routing",
      "Angular JS"
    ]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 min-h-screen bg-black/30">
      <div className="max-w-7xl mx-auto px-6 w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            Featured <span className="text-gradient">Projects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl overflow-hidden flex flex-col h-full group"
              >
                <div className="h-48 bg-white/5 relative overflow-hidden flex items-center justify-center border-b border-white/10 group-hover:border-primary/50 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <h3 className="text-2xl font-bold text-white/50 group-hover:text-white transition-colors z-10 px-4 text-center">{project.title.split(' ')[0]}</h3>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-6 flex-grow">{project.shortDesc}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-white/5 rounded text-xs text-primary font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-3 rounded-lg border border-primary/50 text-primary font-medium hover:bg-primary hover:text-background transition-all duration-300"
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#111] border border-white/10 w-full max-w-xl rounded-2xl shadow-2xl relative max-h-[85vh] overflow-y-auto"
            >
              <div className="p-6 md:p-8">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
                >
                  <FaTimes size={24} />
                </button>

                <h3 className="text-3xl font-bold text-white mb-4 pr-10">{selectedProject.title}</h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary font-mono">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="h-[1px] w-full bg-white/10 mb-6" />

                <div className="bg-white/5 rounded-xl p-5 mb-6">

                  <h4 className="text-lg font-semibold text-white mb-3">
                    Project Overview
                  </h4>

                  <p className="text-gray-400 leading-relaxed text-sm">
                    {selectedProject.description}
                  </p>

                </div>


                {selectedProject.contributions && (
                  <div className="bg-white/5 rounded-xl p-5">

                    <h4 className="text-lg font-semibold text-white mb-4">
                      Key Responsibilities
                    </h4>


                    <ul className="space-y-3">

                      {selectedProject.contributions.map((item, index) => (

                        <li
                          key={index}
                          className="flex gap-3 text-gray-400 text-sm"
                        >

                          <span className="text-primary">
                            ✓
                          </span>

                          <span>
                            {item}
                          </span>

                        </li>

                      ))}

                    </ul>

                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
