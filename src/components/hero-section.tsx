
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="py-20 px-6 md:px-10 lg:px-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-light-purple/20 to-transparent -z-10"></div>
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Supercharge Your Social Media with <span className="gradient-text">AI-Generated Captions!</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto lg:mx-0">
            Create attention-grabbing captions, in seconds, with just a few clicks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Button size="lg" className="gradient-bg text-white hover:opacity-90 font-bold text-lg">
              Try for Free
            </Button>
            
            <Button variant="outline" size="lg" className="font-medium text-lg">
              <Play size={18} className="mr-2" />
              See How It Works
            </Button>
          </div>
        </div>
        
        <div className="flex-1 animate-float">
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-brand-purple/20 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="CaptionCrafter on a device" 
              className="relative z-10 rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-vivid-purple/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
