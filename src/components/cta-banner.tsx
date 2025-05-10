
import { Button } from "@/components/ui/button";

export const CTABanner = () => {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-20 relative overflow-hidden theme-transition">
      <div className="absolute inset-0 gradient-bg opacity-90"></div>
      
      {/* Animated background elements */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 reveal">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-scale-in">
          Ready to Create Your First Caption?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Join thousands of content creators who are saving time and boosting engagement with CaptionCrafter.
        </p>
        <Button 
          size="lg" 
          className="bg-white text-brand-purple hover:bg-gray-100 font-bold text-lg px-8 py-6 hover-lift animate-slide-up" 
          style={{ animationDelay: '0.4s' }}
        >
          Try for Free — No Credit Card Required
        </Button>
      </div>
    </section>
  );
};
