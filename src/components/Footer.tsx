import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { motion } from "framer-motion";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-gray-800">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }}>
            <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-portfolio-purple to-portfolio-blue">
              Right Siman Jena
            </h3>
            <p className="text-gray-400 mb-6">
              MCA graduate and full stack developer passionate about creating 
              beautiful, functional, and user-friendly digital experiences.
            </p>
            <div className="flex space-x-4">
              <motion.a href="#" whileHover={{
              y: -5,
              backgroundColor: "#9b87f5"
            }} className="p-2 bg-gray-800 rounded-full hover:bg-portfolio-purple transition-all">
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a href="#" whileHover={{
              y: -5,
              backgroundColor: "#9b87f5"
            }} className="p-2 bg-gray-800 rounded-full hover:bg-portfolio-purple transition-all">
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a href="mailto:contact@rightsiman.com" whileHover={{
              y: -5,
              backgroundColor: "#9b87f5"
            }} className="p-2 bg-gray-800 rounded-full hover:bg-portfolio-purple transition-all">
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} viewport={{
          once: true
        }}>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-3">
              {["Home", "About", "Portfolio", "Skills", "Contact"].map((item, index) => <motion.li key={index} whileHover={{
              x: 5
            }} transition={{
              type: "spring",
              stiffness: 400,
              damping: 10
            }}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <span className="mr-2 text-portfolio-purple">→</span>
                    {item}
                  </a>
                </motion.li>)}
            </ul>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.4
        }} viewport={{
          once: true
        }}>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400 mb-1">Email</p>
                <a href="mailto:contact@rightsiman.com" className="text-white hover:text-portfolio-purple transition-colors">rightsimanjena14@gmail.com</a>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Social Profiles</p>
                <div className="flex items-center space-x-2">
                  <a href="#" className="text-white hover:text-portfolio-purple transition-colors">GitHub</a>
                  <span className="text-gray-600">•</span>
                  <a href="#" className="text-white hover:text-portfolio-purple transition-colors">LinkedIn</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 1,
        delay: 1
      }} className="pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            © {currentYear} Right Siman Jena. All rights reserved. Made with 
            <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" /> 
            and modern web technologies.
          </p>
        </motion.div>
      </div>
    </footer>;
};
export default Footer;