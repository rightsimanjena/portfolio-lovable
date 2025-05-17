
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-portfolio-purple/5">
      <div className="container-custom">
        <div className="flex flex-col items-center mb-16">
          <p className="text-portfolio-purple font-semibold">GET IN TOUCH</p>
          <h2 className="section-title text-center">Let's Talk About Your Project</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-portfolio-purple rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="mb-8">
              Feel free to reach out if you're interested in working together 
              or have any questions about my services.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="p-3 bg-white/10 rounded-full mr-4">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-white/60">Mail me at</p>
                  <a href="mailto:contact@rightsiman.com" className="font-medium">
                    contact@rightsiman.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-3 bg-white/10 rounded-full mr-4">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-white/60">LinkedIn</p>
                  <a href="#" className="font-medium">
                    linkedin.com/in/rightsiman
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="p-3 bg-white/10 rounded-full mr-4">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-white/60">GitHub</p>
                  <a href="#" className="font-medium">
                    github.com/rightsiman
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-10 py-6 border-t border-white/20">
              <p className="font-medium mb-4">Follow me on social media</p>
              <div className="flex space-x-4">
                <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
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
              
              <Button className="bg-portfolio-purple w-full hover:bg-portfolio-blue transition-colors">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
