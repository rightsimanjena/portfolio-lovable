
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
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col items-center mb-16">
          <p className="text-portfolio-purple font-semibold">TESTIMONIALS</p>
          <h2 className="section-title text-center">What People Say About Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex mb-4">
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

              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>

              <div className="flex items-center">
                <div className="w-10 h-10 bg-portfolio-purple/20 rounded-full flex items-center justify-center text-portfolio-purple font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
