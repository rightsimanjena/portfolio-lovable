
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      content: "Right delivered our e-commerce platform on time and with exceptional quality. His technical skills combined with a good eye for design resulted in a site that not only functions perfectly but looks outstanding too.",
      author: "Michael Brown",
      role: "CEO, RetailTech"
    },
    {
      content: "Working with Right on our learning management system was a pleasure. He understood our educational needs and created an intuitive platform that both teachers and students love using.",
      author: "Sarah Johnson",
      role: "Educational Director"
    },
    {
      content: "The exam management system Right built for our institution revolutionized how we conduct assessments. His attention to security and user experience made the transition from paper tests seamless.",
      author: "David Wilson",
      role: "University Administrator"
    }
  ];

  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
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
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-portfolio-purple font-semibold"
          >
            TESTIMONIALS
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-title text-center"
          >
            What People Say About Me
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, boxShadow: "0 10px 40px -10px rgba(0, 0, 0, 0.1)" }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative mb-8">
                <div className="absolute -top-4 -left-4">
                  <div className="p-2 bg-gray-100 rounded-full">
                    <Quote className="w-5 h-5 text-portfolio-purple" />
                  </div>
                </div>
                
                <div className="flex mb-4 ml-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>

              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-portfolio-purple to-portfolio-blue rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
