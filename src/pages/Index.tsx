
import { useEffect, useState } from "react";
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
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Initialize scroll animations
    const cleanup = initScrollAnimation();
    return cleanup;
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen theme-transition overflow-x-hidden">
      {/* Header */}
      <header className="py-4 px-6 md:px-10 lg:px-20 flex justify-between items-center bg-background/80 dark:bg-background/70 backdrop-blur-sm sticky top-0 z-50 border-b theme-transition animate-slide-down">
        <div className="flex items-center">
          <h1 className="text-xl font-bold gradient-text">CaptionCrafter</h1>
        </div>
        
        {/* Navigation */}
        <nav className={`${isMobile ? (mobileMenuOpen ? 'flex' : 'hidden') : 'flex'} ${isMobile ? 'flex-col absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border p-5 space-y-4 shadow-lg' : 'items-center space-x-6'}`}>
          <a href="#how-it-works" onClick={closeMobileMenu} className="text-foreground/80 hover:text-brand-purple transition-colors">How It Works</a>
          <a href="#features" onClick={closeMobileMenu} className="text-foreground/80 hover:text-brand-purple transition-colors">Features</a>
          <a href="#testimonials" onClick={closeMobileMenu} className="text-foreground/80 hover:text-brand-purple transition-colors">Testimonials</a>
          <a href="#pricing" onClick={closeMobileMenu} className="text-foreground/80 hover:text-brand-purple transition-colors">Pricing</a>
          
          {/* Mobile menu buttons */}
          {isMobile ? (
            <div className="flex flex-col space-y-3 pt-2">
              <Button variant="outline" className="hover-scale w-full" onClick={closeMobileMenu}>Log in</Button>
              <Button className="gradient-bg text-white hover:opacity-90 hover-scale w-full" onClick={closeMobileMenu}>Sign up</Button>
              <div className="flex justify-center pt-2">
                <ThemeToggle />
              </div>
            </div>
          ) : (
            <>
              <Button variant="outline" className="ml-2 hover-scale">Log in</Button>
              <Button className="gradient-bg text-white hover:opacity-90 hover-scale">Sign up</Button>
              <ThemeToggle />
            </>
          )}
        </nav>
        
        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center space-x-3">
          <ThemeToggle />
          <Button variant="ghost" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </Button>
        </div>
      </header>

      {/* Main Content with animated background sections */}
      <main className="relative">
        {/* Animated gradient overlays */}
        <div className="absolute inset-0 w-full h-full -z-10 opacity-50 overflow-hidden animated-gradient-bg"></div>
        
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
