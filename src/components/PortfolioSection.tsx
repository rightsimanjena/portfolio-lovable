
import { useState } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Online Learning Management System",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    description: "A comprehensive LMS with user authentication, role-based access control, course management, and progress tracking features.",
    technologies: ["React", "PHP", "MySQL", "Bootstrap"]
  },
  {
    id: 2,
    title: "Exam Management System",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description: "Online test creation platform with automated grading, performance analytics, and secure test delivery for educational institutions.",
    technologies: ["JavaScript", "PHP", "MySQL", "Chart.js"]
  },
  {
    id: 3,
    title: "E-commerce Website",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description: "Fully responsive e-commerce platform with product listings, shopping cart, payment integration, and admin dashboard.",
    technologies: ["React", "Node.js", "Express", "MongoDB"]
  }
];

const PortfolioSection = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="portfolio" className="section-padding bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-40 right-10 w-64 h-64 rounded-full bg-gradient-to-r from-portfolio-purple/5 to-portfolio-blue/5 blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-80 h-80 rounded-full bg-gradient-to-r from-portfolio-yellow/5 to-portfolio-orange/5 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-portfolio-purple font-semibold"
          >
            PORTFOLIO
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-title text-center"
          >
            Digital Product Showcases
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative overflow-hidden h-60">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-portfolio-dark/80 to-transparent flex items-end p-6 transition-opacity duration-300 ${
                    activeProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div>
                    <p className="text-sm text-portfolio-purple font-medium mb-1">{project.category}</p>
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  </div>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: activeProject === project.id ? 1 : 0, 
                    scale: activeProject === project.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg z-10"
                >
                  <Eye className="w-5 h-5 text-portfolio-purple" />
                </motion.div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href="#" 
                  className="text-portfolio-purple font-medium hover:text-portfolio-blue transition-colors inline-flex items-center group"
                >
                  <span>View Details</span>
                  <svg 
                    className="ml-1 w-4 h-4 transition-transform transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
