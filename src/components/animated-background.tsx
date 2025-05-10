
import React, { useEffect } from "react";

export const AnimatedBackground = () => {
  useEffect(() => {
    // Create gradient animation using requestAnimationFrame for better performance
    let hue = 0;
    let animationFrameId: number;
    
    const animateGradient = () => {
      hue = (hue + 0.1) % 360;
      const gradientElement = document.getElementById('animated-gradient');
      if (gradientElement) {
        // Change the gradient colors based on the hue
        const primaryColor = `hsla(${hue}, 70%, 80%, 0.15)`;
        const secondaryColor = `hsla(${(hue + 60) % 360}, 80%, 70%, 0.1)`;
        const tertiaryColor = `hsla(${(hue + 180) % 360}, 75%, 75%, 0.15)`;
        
        gradientElement.style.background = `
          radial-gradient(circle at 10% 20%, ${primaryColor} 0%, transparent 30%),
          radial-gradient(circle at 70% 65%, ${secondaryColor} 0%, transparent 40%),
          radial-gradient(circle at 40% 80%, ${tertiaryColor} 0%, transparent 35%)
        `;
      }
      
      animationFrameId = requestAnimationFrame(animateGradient);
    };
    
    animationFrameId = requestAnimationFrame(animateGradient);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div id="animated-gradient" className="fixed inset-0 w-full h-full -z-50 overflow-hidden">
      {/* Animated gradient bubbles */}
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] rounded-full bg-brand-purple/10 dark:bg-brand-purple/5 blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[25vw] h-[25vw] rounded-full bg-brand-vivid-purple/10 dark:bg-brand-vivid-purple/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '0.7s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-[20vw] h-[20vw] rounded-full bg-brand-purple/10 dark:bg-brand-purple/5 blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-[22vw] h-[22vw] rounded-full bg-brand-vivid-purple/10 dark:bg-brand-vivid-purple/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};
