import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
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
      
      
    </section>;
};
export default ProcessSection;