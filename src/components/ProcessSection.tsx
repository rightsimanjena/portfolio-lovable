
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const ProcessSection = () => {
  const processes = [{
    number: "01",
    title: "Business Planning",
    description: "I start by understanding your business needs and project requirements through careful planning and research."
  }, {
    number: "02",
    title: "Design Strategy",
    description: "Creating wireframes and visual designs that align with your brand and deliver an exceptional user experience."
  }, {
    number: "03",
    title: "Grow Your Business",
    description: "Implementation and deployment with ongoing support to ensure your project achieves its business goals."
  }];
  
  return <section className="section-padding bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-portfolio-purple/5 to-portfolio-blue/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-portfolio-yellow/5 to-portfolio-orange/5 blur-3xl"></div>
      </div>
      
      {/* Social media links */}
      <div className="container-custom relative z-10">
        <div className="flex gap-4 justify-center mb-10">
          <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:shadow-xl transition-all hover:translate-y-[-2px] text-gray-600 hover:text-portfolio-purple">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/rightsimanjena/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:shadow-xl transition-all hover:translate-y-[-2px] text-gray-600 hover:text-portfolio-purple">
            <Linkedin size={20} />
          </a>
          <a href="mailto:rightsimanjena14@gmail.com" className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:shadow-xl transition-all hover:translate-y-[-2px] text-gray-600 hover:text-portfolio-purple">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>;
};

export default ProcessSection;
