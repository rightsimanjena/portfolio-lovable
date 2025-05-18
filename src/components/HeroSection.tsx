
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 flex items-center bg-gradient-to-b from-white to-[#f5f3ff] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-portfolio-purple/10 to-portfolio-blue/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-portfolio-yellow/10 to-portfolio-orange/10 blur-3xl"></div>
      </div>
      
      <div className="container-custom grid md:grid-cols-2 gap-10 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-1 w-10 bg-portfolio-purple rounded-full"></div>
            <p className="text-gray-600 font-medium">Hello, I'm</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-portfolio-purple to-portfolio-blue">
            Right Siman Jena
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-portfolio-purple mb-6">
            Full Stack Developer
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg">
            MCA graduate with a strong foundation in software development, web technologies, and graphic design. 
            Passionate about creating elegant, efficient, and user-friendly digital solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-gradient-to-r from-portfolio-purple to-portfolio-blue hover:opacity-90 text-white transition-all shadow-lg shadow-portfolio-purple/20" 
              asChild
            >
              <a href="#portfolio">View My Work</a>
            </Button>
            <Button 
              variant="outline" 
              className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple/10 hover:text-portfolio-purple transition-all" 
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          
          <div className="flex items-center space-x-5 mt-8">
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
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2 flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-portfolio-purple to-portfolio-blue opacity-10 absolute -top-4 -left-4 animate-pulse"></div>
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10">
              <Avatar className="w-full h-full">
                <AvatarImage 
                  src="https://i.postimg.cc/jjdVMfN9/Right-Siman-Jena.jpg" 
                  alt="Right Siman Jena" 
                  className="w-full h-full object-cover"
                />
                <AvatarFallback className="text-3xl bg-portfolio-purple text-white">RSJ</AvatarFallback>
              </Avatar>
            </div>
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-white p-3 rounded-full shadow-lg z-20"
            >
              <div className="bg-gradient-to-br from-portfolio-yellow to-portfolio-orange w-16 h-16 rounded-full flex items-center justify-center text-white font-bold">
                MCA
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"
      >
        <p className="text-sm text-gray-500 mb-2">Scroll Down</p>
        <ArrowDown size={20} className="text-portfolio-purple" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
