
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-gray-800">
          <div>
            <h3 className="text-xl font-bold mb-4">Right Siman Jena</h3>
            <p className="text-gray-400 mb-6">
              MCA graduate and full stack developer passionate about creating 
              beautiful, functional, and user-friendly digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-portfolio-purple transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-portfolio-purple transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:contact@rightsiman.com" className="p-2 bg-gray-800 rounded-full hover:bg-portfolio-purple transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400 mb-1">Email</p>
                <a href="mailto:contact@rightsiman.com" className="text-white hover:text-portfolio-purple transition-colors">
                  contact@rightsiman.com
                </a>
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
          </div>
        </div>
        
        <div className="pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Right Siman Jena. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
