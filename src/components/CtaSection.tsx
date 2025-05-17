
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-16 bg-portfolio-purple">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Got A Project? Let's Talk
            </h2>
            <p className="text-white/80 mb-0 max-w-lg">
              I'm open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <Button asChild className="bg-white text-portfolio-purple hover:bg-gray-100 px-8 py-6 text-lg">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
