
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 flex items-center bg-gradient-to-b from-white to-[#f5f3ff]">
      <div className="container-custom grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1 animate-fade-in">
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-1 w-10 bg-portfolio-purple rounded-full"></div>
            <p className="text-gray-600 font-medium">Hello, I'm</p>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-dark mb-4">
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
            <Button className="bg-portfolio-purple hover:bg-portfolio-blue text-white" asChild>
              <a href="#portfolio">View My Work</a>
            </Button>
            <Button variant="outline" className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          
          <div className="flex items-center space-x-5 mt-8">
            <a href="#" className="text-gray-600 hover:text-portfolio-purple transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-portfolio-purple transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:contact@rightsiman.com" className="text-gray-600 hover:text-portfolio-purple transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-portfolio-purple to-portfolio-blue opacity-10 absolute -top-4 -left-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
              alt="Right Siman Jena" 
              className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-full border-4 border-white shadow-lg relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-full shadow-lg z-20">
              <div className="bg-portfolio-yellow w-16 h-16 rounded-full flex items-center justify-center text-portfolio-dark font-bold">
                MCA
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <p className="text-sm text-gray-500 mb-2">Scroll Down</p>
        <ArrowDown size={20} className="text-portfolio-purple" />
      </div>
    </section>
  );
};

export default HeroSection;
