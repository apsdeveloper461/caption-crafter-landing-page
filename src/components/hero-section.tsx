
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="py-20 px-6 md:px-10 lg:px-20 relative overflow-hidden theme-transition">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-light-purple/30 via-transparent to-brand-purple/10 dark:from-brand-purple/10 dark:via-transparent dark:to-brand-vivid-purple/5 -z-10"></div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-brand-purple/10 dark:bg-brand-purple/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div
        className="absolute top-40 right-20 w-24 h-24 bg-brand-vivid-purple/10 dark:bg-brand-vivid-purple/5 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "1.3s" }}
      ></div>
      <div
        className="absolute bottom-20 right-10 w-40 h-40 bg-brand-vivid-purple/10 dark:bg-brand-vivid-purple/5 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-28 h-28 bg-brand-purple/10 dark:bg-brand-purple/5 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "0.7s" }}
      ></div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left space-y-6 animate-slide-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Supercharge Your Social Media with{" "}
            <span className="gradient-text">AI-Generated Captions!</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/80 max-w-xl mx-auto lg:mx-0">
            Create attention-grabbing captions, in seconds, with just a few
            clicks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a href="https://captioncrafter.vercel.app/dashboard">
              {" "}
              <Button
                size="lg"
                className="gradient-bg text-white hover:opacity-90 font-bold text-lg hover-lift hover-border-btn"
              >
                Try for Free
              </Button>
            </a>

            <Button
              variant="outline"
              size="lg"
              className="font-medium text-lg hover-scale hover-border-btn"
            >
              <Play size={18} className="mr-2" />
              See How It Works
            </Button>
          </div>
        </div>

        <div className="flex-1 perspective-container">
          <div className="relative w-full max-w-md mx-auto transform-3d">
            <div className="absolute inset-0 bg-brand-purple/20 rounded-full blur-3xl animate-pulse-slow"></div>
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="CaptionCrafter on a device"
              className="relative z-10 rounded-lg shadow-xl animate-float"
            />
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-vivid-purple/20 rounded-full blur-xl animate-pulse-slow"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
