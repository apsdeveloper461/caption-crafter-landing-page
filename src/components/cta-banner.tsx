
import { Button } from "@/components/ui/button";

export const CTABanner = () => {
  return (
    <section className="py-16 px-6 md:px-10 lg:px-20 relative overflow-hidden theme-transition">
      {/* Professional gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple to-brand-vivid-purple opacity-90"></div>

      {/* Animated background elements */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div
        className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute -bottom-10 -right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-20 left-20 w-36 h-36 bg-white/10 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="max-w-4xl mx-auto text-center relative z-10 reveal">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-scale-in">
          Ready to Create Your First Caption?
        </h2>
        <p
          className="text-lg text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          Join thousands of content creators who are saving time and boosting
          engagement with CaptionCrafter.
        </p>
        <a href="https://captioncrafter.vercel.app/dashboard">
          <Button
            size="lg"
            className="bg-white text-brand-purple hover:bg-gray-100 font-bold text-lg px-8 py-6 hover-lift animate-slide-up group hover-border-btn relative overflow-hidden cursor-pointer"
            style={{ animationDelay: "0.4s" }}
          >
            <span>Try for Free — No Credit Card Required</span>
            <span className="absolute inset-0 rounded-md border-2 border-white opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"></span>
          </Button>
        </a>
      </div>
    </section>
  );
};
