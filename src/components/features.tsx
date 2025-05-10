
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
    <section id="features" className="py-20 px-6 md:px-10 lg:px-20 bg-secondary/30 dark:bg-secondary/10 theme-transition">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose <span className="gradient-text">CaptionCrafter</span>?
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            It's simple. We've designed CaptionCrafter to be your go-to social media assistant. 
            Whether you're posting for fun or business, get captions that increase engagement and make your posts shine.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-border reveal hover-lift hover-card ${index % 3 === 0 ? 'reveal-delay-1' : index % 3 === 1 ? 'reveal-delay-2' : 'reveal-delay-3'} relative overflow-hidden`}
            >
              {/* Border animation container */}
              <div className="absolute inset-0 rounded-lg border-2 border-brand-purple/0 transition-all duration-500 hover:border-brand-purple/70 opacity-0 hover:opacity-100"></div>
              <div className="mb-4 bg-brand-light-purple/50 dark:bg-brand-purple/20 p-3 inline-block rounded-lg animate-pulse-slow">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-foreground/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
