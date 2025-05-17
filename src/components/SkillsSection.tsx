
import {
  Code,
  FileText,
  Image,
  Contact,
} from "lucide-react";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const skills = [
    {
      category: "Front-End",
      icon: <Code className="w-6 h-6 text-portfolio-purple" />,
      items: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React", "Responsive Design"]
    },
    {
      category: "Back-End",
      icon: <FileText className="w-6 h-6 text-portfolio-blue" />,
      items: ["PHP", "MySQL", "RESTful APIs", "Node.js", "Database Management", "Server Configuration"]
    },
    {
      category: "AI Tools",
      icon: <Contact className="w-6 h-6 text-portfolio-yellow" />,
      items: ["ChatGPT", "DALL·E", "AI Integration", "Automation", "Machine Learning Basics"]
    },
    {
      category: "Design",
      icon: <Image className="w-6 h-6 text-portfolio-orange" />,
      items: ["Photoshop", "Canva", "Illustrator", "UI/UX Design", "Visual Communication", "Brand Identity"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="skills" className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-40 left-10 w-80 h-80 rounded-full bg-gradient-to-r from-portfolio-purple/5 to-portfolio-blue/5 blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-64 h-64 rounded-full bg-gradient-to-r from-portfolio-yellow/5 to-portfolio-orange/5 blur-3xl"></div>
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
            MY EXPERTISE
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-title text-center"
          >
            Skills & Technologies
          </motion.h2>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gray-100 rounded-lg mr-4">
                  {skill.icon}
                </div>
                <h3 className="font-bold text-xl">{skill.category}</h3>
              </div>
              
              <div className="space-y-2">
                {skill.items.map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-portfolio-purple rounded-full mr-2"></div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 max-w-2xl mx-auto">
            My diverse skill set allows me to tackle projects from multiple angles, 
            bringing both technical expertise and creative vision to every challenge.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
