
import { Check, Calendar, Edit, Save, Share } from "lucide-react";

const features = [
  {
    icon: <Edit className="w-6 h-6 text-brand-purple" />,
    title: "AI-Powered Captions",
    description: "Generate captions that are guaranteed to resonate with your audience."
  },
  {
    icon: <Check className="w-6 h-6 text-brand-purple" />,
    title: "Customizable Tones",
    description: "Funny, professional, emotional—tailor the mood for every post."
  },
  {
    icon: <Calendar className="w-6 h-6 text-brand-purple" />,
    title: "Hashtags & CTA Suggestions",
    description: "Get optimized hashtags and CTA to increase engagement."
  },
  {
    icon: <Save className="w-6 h-6 text-brand-purple" />,
    title: "Save & Reuse",
    description: "Save your favorite captions and reuse them whenever you need them."
  },
  {
    icon: <Share className="w-6 h-6 text-brand-purple" />,
    title: "Free Plan",
    description: "Get 5 captions/day absolutely free. No hidden costs!"
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 px-6 md:px-10 lg:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose <span className="gradient-text">CaptionCrafter</span>?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            It's simple. We've designed CaptionCrafter to be your go-to social media assistant. 
            Whether you're posting for fun or business, get captions that increase engagement and make your posts shine.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="mb-4 bg-brand-light-purple/50 p-3 inline-block rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
