import { motion } from "framer-motion";
import { Quote } from "lucide-react";
const TestimonialsSection = () => {
  const testimonials = [{
    content: "Right delivered our e-commerce platform on time and with exceptional quality. His technical skills combined with a good eye for design resulted in a site that not only functions perfectly but looks outstanding too.",
    author: "Michael Brown",
    role: "CEO, RetailTech"
  }, {
    content: "Working with Right on our learning management system was a pleasure. He understood our educational needs and created an intuitive platform that both teachers and students love using.",
    author: "Sarah Johnson",
    role: "Educational Director"
  }, {
    content: "The exam management system Right built for our institution revolutionized how we conduct assessments. His attention to security and user experience made the transition from paper tests seamless.",
    author: "David Wilson",
    role: "University Administrator"
  }];
  return <section className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gradient-to-r from-portfolio-purple/5 to-portfolio-blue/5 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-gradient-to-r from-portfolio-yellow/5 to-portfolio-orange/5 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        

        
      </div>
    </section>;
};
export default TestimonialsSection;