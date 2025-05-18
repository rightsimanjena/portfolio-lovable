
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Loader } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Form schema for validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Initialize form with react-hook-form and zod validation
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Initialize EmailJS with your public key
      emailjs.init("G7IiPRbOGvnBBTDDl");
      
      // Prepare template parameters
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message
      };
      
      // Send email using EmailJS
      await emailjs.send(
        "service_o79ley4",  // Service ID
        "template_p6bf7ev", // Template ID
        templateParams
      );
      
      // Show success toast
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        variant: "default"
      });
      
      // Reset form fields
      form.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      // Show error toast
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
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
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="name" className="block text-gray-700 mb-1">Name</FormLabel>
                        <FormControl>
                          <Input id="name" placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="email" className="block text-gray-700 mb-1">Email</FormLabel>
                        <FormControl>
                          <Input id="email" placeholder="Your Email" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="subject" className="block text-gray-700 mb-1">Subject</FormLabel>
                      <FormControl>
                        <Input id="subject" placeholder="How can I help you?" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="message" className="block text-gray-700 mb-1">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          id="message" 
                          placeholder="Let me know about your project..." 
                          className="min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <motion.div 
                  whileHover={{ scale: 1.03 }} 
                  whileTap={{ scale: 0.97 }}
                  className="w-full"
                >
                  <Button 
                    type="submit" 
                    className="bg-gradient-to-r from-portfolio-purple to-portfolio-blue w-full hover:shadow-lg transition-all"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </motion.div>
              </form>
            </Form>
            
          </motion.div>
        </div>
      </div>
    </section>;
};

export default ContactSection;
