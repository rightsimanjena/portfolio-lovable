
import {
  Code,
  FileText,
  Image,
  Contact,
} from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      category: "Front-End",
      icon: <Code className="w-6 h-6 text-portfolio-purple" />,
      items: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React", "Responsive Design"]
    },
    {
      category: "Back-End",
      icon: <FileText className="w-6 h-6 text-portfolio-blue" />,
      items: ["PHP", "MySQL", "RESTful APIs", "Node.js", "Database Management", "Server Configuration"]
    },
    {
      category: "AI Tools",
      icon: <Contact className="w-6 h-6 text-portfolio-yellow" />,
      items: ["ChatGPT", "DALL·E", "AI Integration", "Automation", "Machine Learning Basics"]
    },
    {
      category: "Design",
      icon: <Image className="w-6 h-6 text-portfolio-orange" />,
      items: ["Photoshop", "Canva", "Illustrator", "UI/UX Design", "Visual Communication", "Brand Identity"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col items-center mb-16">
          <p className="text-portfolio-purple font-semibold">MY EXPERTISE</p>
          <h2 className="section-title text-center">Skills & Technologies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gray-100 rounded-lg mr-4">
                  {skill.icon}
                </div>
                <h3 className="font-bold text-xl">{skill.category}</h3>
              </div>
              
              <div className="space-y-2">
                {skill.items.map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-portfolio-purple rounded-full mr-2"></div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            My diverse skill set allows me to tackle projects from multiple angles, 
            bringing both technical expertise and creative vision to every challenge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
