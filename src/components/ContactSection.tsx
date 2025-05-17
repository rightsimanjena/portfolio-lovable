import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
const ContactSection = () => {
  return <section id="contact" className="section-padding bg-portfolio-purple/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-portfolio-purple/10 to-portfolio-blue/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-portfolio-yellow/10 to-portfolio-orange/10 blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center mb-16">
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="text-portfolio-purple font-semibold">
            GET IN TOUCH
          </motion.p>
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="section-title text-center">
            Let's Talk About Your Project
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="bg-gradient-to-br from-portfolio-purple to-portfolio-blue rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="mb-8">
              Feel free to reach out if you're interested in working together 
              or have any questions about my services.
            </p>
            
            <div className="space-y-6">
              <motion.div whileHover={{
              x: 5
            }} className="flex items-center">
                <div className="p-3 bg-white/10 rounded-full mr-4">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Mail me at</p>
                  <a href="mailto:contact@rightsiman.com" className="font-medium hover:underline">rightsimanjena14@gmail.com</a>
                </div>
              </motion.div>
              
              <motion.div whileHover={{
              x: 5
            }} className="flex items-center">
                <div className="p-3 bg-white/10 rounded-full mr-4">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-white/60">LinkedIn</p>
                  <a href="#" className="font-medium hover:underline">linkedin.com/in/rightsimanjena</a>
                </div>
              </motion.div>
              
              <motion.div whileHover={{
              x: 5
            }} className="flex items-center">
                <div className="p-3 bg-white/10 rounded-full mr-4">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-white/60">GitHub</p>
                  <a href="#" className="font-medium hover:underline">github.com/rightsimanjena</a>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-10 py-6 border-t border-white/20">
              <p className="font-medium mb-4">Follow me on social media</p>
              <div className="flex space-x-4">
                <motion.a whileHover={{
                y: -5,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
              }} href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a whileHover={{
                y: -5,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
              }} href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="bg-white rounded-xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                  <Input id="email" placeholder="Your Email" type="email" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-1">Subject</label>
                <Input id="subject" placeholder="How can I help you?" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                <Textarea id="message" placeholder="Let me know about your project..." className="min-h-[120px]" />
              </div>
              
              <motion.div whileHover={{
              scale: 1.03
            }} whileTap={{
              scale: 0.97
            }}>
                <Button className="bg-gradient-to-r from-portfolio-purple to-portfolio-blue w-full hover:shadow-lg transition-all">
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default ContactSection;