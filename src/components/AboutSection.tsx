
import { Check } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    "MCA Graduate from NIST University (2025)",
    "Proficient in full-stack web development",
    "Expert in both technical and creative software",
    "Experienced with AI tools and design applications"
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col items-center mb-12">
          <p className="text-portfolio-purple font-semibold">ABOUT ME</p>
          <h2 className="section-title text-center">Designing Solutions, Not Just Visuals</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative">
            <div className="w-full h-full bg-portfolio-blue opacity-10 absolute -top-4 -left-4 rounded-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Right Siman Jena"
              className="w-full max-h-[500px] object-cover rounded-3xl shadow-lg relative z-10"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">
              MCA Graduate & Full Stack Developer with Creative Expertise
            </h3>
            <p className="text-gray-600 mb-6">
              I'm Right Siman Jena, an MCA graduate from NIST University with a passion for creating 
              impactful digital solutions. My journey in technology is driven by a continuous learning 
              mindset and the desire to blend technical excellence with creative design.
            </p>
            <p className="text-gray-600 mb-8">
              What sets me apart is my dual expertise in both development and design - I'm not just a coder 
              who understands how things work, but also a designer who cares about how things look and feel. 
              This combination allows me to build solutions that are not only functional but also intuitive 
              and visually appealing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-portfolio-purple/10 flex items-center justify-center">
                      <Check size={14} className="text-portfolio-purple" />
                    </div>
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 bg-portfolio-purple text-white rounded-md hover:bg-portfolio-blue transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
