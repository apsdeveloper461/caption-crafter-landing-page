
const testimonials = [
  {
    quote: "CaptionCrafter saved me hours of brainstorming. It's my secret weapon for viral posts!",
    name: "Maya G.",
    role: "Instagram Influencer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
  },
  {
    quote: "I've tripled my engagement since I started using CaptionCrafter's hashtags and captions!",
    name: "Jon H.",
    role: "TikTok Creator",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
  },
  {
    quote: "This tool is a game-changer for my small business. Professional captions in seconds!",
    name: "Sarah T.",
    role: "Small Business Owner",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=100&auto=format&fit=crop"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-6 md:px-10 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our <span className="gradient-text">Users Are Saying</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Don't take our word for it — see why thousands of content creators trust CaptionCrafter 
            to power their social media presence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-100"
            >
              <div className="mb-4">
                {/* Quote marks */}
                <svg className="h-8 w-8 text-brand-purple/30" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 8v8c0 4.4-3.6 8-8 8h-2v-4h2c2.2 0 4-1.8 4-4v-8h4zm18 0v8c0 4.4-3.6 8-8 8h-2v-4h2c2.2 0 4-1.8 4-4v-8h4z"/>
                </svg>
              </div>
              
              <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-bold">{testimonial.name}</p>
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
