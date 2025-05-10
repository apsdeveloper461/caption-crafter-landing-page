
import { useEffect } from "react";
import { HeroSection } from "@/components/hero-section";
import { HowItWorks } from "@/components/how-it-works";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { DemoSection } from "@/components/demo-section";
import { CTABanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { initScrollAnimation } from "@/utils/scrollAnimation";

const Index = () => {
  useEffect(() => {
    // Initialize scroll animations
    const cleanup = initScrollAnimation();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen theme-transition">
      {/* Header */}
      <header className="py-4 px-6 md:px-10 lg:px-20 flex justify-between items-center bg-background/80 dark:bg-background/70 backdrop-blur-sm sticky top-0 z-50 border-b theme-transition animate-slide-down">
        <div className="flex items-center">
          <h1 className="text-xl font-bold gradient-text">CaptionCrafter</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#how-it-works" className="text-foreground/80 hover:text-brand-purple transition-colors">How It Works</a>
          <a href="#features" className="text-foreground/80 hover:text-brand-purple transition-colors">Features</a>
          <a href="#testimonials" className="text-foreground/80 hover:text-brand-purple transition-colors">Testimonials</a>
          <a href="#pricing" className="text-foreground/80 hover:text-brand-purple transition-colors">Pricing</a>
          <Button variant="outline" className="ml-2 hover-scale">Log in</Button>
          <Button className="gradient-bg text-white hover:opacity-90 hover-scale">Sign up</Button>
          <ThemeToggle />
        </nav>
        
        <div className="md:hidden flex items-center space-x-3">
          <ThemeToggle />
          <Button variant="ghost">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <HeroSection />
        <HowItWorks />
        <Features />
        <Testimonials />
        <Pricing />
        <DemoSection />
        <CTABanner />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
