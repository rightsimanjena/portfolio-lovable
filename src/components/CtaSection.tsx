
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CtaSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-portfolio-purple to-portfolio-blue relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Got A Project? Let's Talk
            </h2>
            <p className="text-white/80 mb-0 max-w-lg">
              I'm open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild className="bg-white text-portfolio-purple hover:bg-gray-100 px-8 py-6 text-lg font-semibold shadow-lg">
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
