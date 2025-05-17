
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const highlights = [
    "MCA Graduate from NIST University (2025)",
    "Proficient in full-stack web development",
    "Expert in both technical and creative software",
    "Experienced with AI tools and design applications"
  ];

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gradient-to-r from-portfolio-purple/5 to-portfolio-blue/5 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-gradient-to-r from-portfolio-yellow/5 to-portfolio-orange/5 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-portfolio-purple font-semibold"
          >
            ABOUT ME
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="section-title text-center"
          >
            Designing Solutions, Not Just Visuals
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full h-full bg-portfolio-purple opacity-10 absolute -top-4 -left-4 rounded-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Right Siman Jena"
              className="w-full max-h-[500px] object-cover rounded-3xl shadow-lg relative z-10"
            />
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-white p-4 rounded-full shadow-xl z-20"
            >
              <div className="bg-gradient-to-br from-portfolio-purple to-portfolio-blue w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-lg">
                MCA
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              MCA Graduate & Full Stack Developer with Creative Expertise
            </h3>
            <p className="text-gray-600 mb-6">
              I'm Right Siman Jena, an MCA graduate from NIST University with a passion for creating 
              impactful digital solutions. My journey in technology is driven by a continuous learning 
              mindset and the desire to blend technical excellence with creative design.
            </p>
            <p className="text-gray-600 mb-8">
              What sets me apart is my dual expertise in both development and design - I'm not just a coder 
              who understands how things work, but also a designer who cares about how things look and feel. 
              This combination allows me to build solutions that are not only functional but also intuitive 
              and visually appealing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-2"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-portfolio-purple/10 flex items-center justify-center">
                      <Check size={14} className="text-portfolio-purple" />
                    </div>
                  </div>
                  <p className="text-gray-700">{item}</p>
                </motion.div>
              ))}
            </div>

            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-portfolio-purple to-portfolio-blue text-white rounded-md hover:shadow-lg transition-all duration-300"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
