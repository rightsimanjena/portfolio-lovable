
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const ProcessSection = () => {
  const processes = [
    {
      number: "01",
      title: "Business Planning",
      description: "I start by understanding your business needs and project requirements through careful planning and research."
    },
    {
      number: "02",
      title: "Design Strategy",
      description: "Creating wireframes and visual designs that align with your brand and deliver an exceptional user experience."
    },
    {
      number: "03",
      title: "Grow Your Business",
      description: "Implementation and deployment with ongoing support to ensure your project achieves its business goals."
    }
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-portfolio-purple/5 to-portfolio-blue/5 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-portfolio-yellow/5 to-portfolio-orange/5 blur-3xl"></div>
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
            PROCESS
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-title text-center"
          >
            My Working Process
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {processes.map((process, index) => (
            <motion.div 
              key={index} 
              className="text-center relative z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="mb-6 w-20 h-20 bg-gradient-to-br from-portfolio-purple to-portfolio-blue rounded-full flex items-center justify-center mx-auto text-white shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-xl font-bold">{process.number}</span>
              </motion.div>
              
              <h3 className="text-xl font-bold mb-3">{process.title}</h3>
              <p className="text-gray-600">{process.description}</p>
              
              {index < processes.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[calc(50%+5rem)] w-[calc(100%-10rem)] flex items-center justify-center">
                  <div className="w-full border-t-2 border-dashed border-gray-200 relative">
                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 10, opacity: 1 }}
                      transition={{ 
                        repeat: Infinity, 
                        repeatType: "reverse", 
                        duration: 1.5 
                      }}
                    >
                      <ArrowDown className="text-portfolio-purple absolute top-1/2 right-0 transform -translate-y-1/2" size={20} />
                    </motion.div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Process background circle decorations */}
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, type: "spring" }}
          viewport={{ once: true }}
          className="absolute top-1/4 left-10 w-32 h-32 rounded-full border-2 border-dashed border-portfolio-purple/20 z-0"
        ></motion.div>
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, type: "spring" }}
          viewport={{ once: true }}
          className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full border-2 border-dashed border-portfolio-blue/20 z-0"
        ></motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
