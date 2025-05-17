
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
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="flex flex-col items-center mb-16">
          <p className="text-portfolio-purple font-semibold">PROCESS</p>
          <h2 className="section-title text-center">My Working Process</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <div key={index} className="text-center relative">
              <div className="mb-6 w-16 h-16 bg-portfolio-purple/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-portfolio-purple font-bold">{process.number}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{process.title}</h3>
              <p className="text-gray-600">{process.description}</p>
              
              {index < processes.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+4rem)] w-[calc(100%-8rem)] flex items-center justify-center">
                  <div className="w-full border-t-2 border-dashed border-gray-200 relative">
                    <ArrowDown className="text-portfolio-yellow absolute top-1/2 right-0 transform -translate-y-1/2" size={20} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
