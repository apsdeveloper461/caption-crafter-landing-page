
import { Check } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Enter Your Topic",
    description: "Tell us what your post is about (e.g., 'Coffee + Monday Vibes')"
  },
  {
    number: 2,
    title: "Choose Your Tone & Platform",
    description: "Pick the tone that fits your vibe and platform (Instagram, TikTok, LinkedIn)."
  },
  {
    number: 3,
    title: "Get Instant AI-Generated Captions",
    description: "Receive 3 unique, personalized captions ready to post — with hashtags and CTAs!"
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-6 md:px-10 lg:px-20 bg-background theme-transition">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Create Captions in <span className="gradient-text">3 Simple Steps</span>
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Create the best captions in minutes. No more spending hours on social media posts. 
            Just tell us your idea, pick your platform and tone, and let CaptionCrafter handle the rest!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className={`bg-card rounded-lg p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300 relative reveal hover-lift ${index === 0 ? 'reveal-delay-1' : index === 1 ? 'reveal-delay-2' : 'reveal-delay-3'}`}
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold animate-pulse-slow">
                {step.number}
              </div>
              
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">{step.title}</h3>
                <p className="text-foreground/80">{step.description}</p>
                
                {step.number < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-12 transform -translate-y-1/2">
                    <svg className="w-8 h-8 text-brand-purple animate-pulse-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center reveal">
          <p className="text-lg font-medium text-foreground">
            It's that simple! Start crafting captions in seconds.
          </p>
        </div>
      </div>
    </section>
  );
};
