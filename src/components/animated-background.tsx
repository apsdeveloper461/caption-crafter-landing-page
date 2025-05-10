
import React, { useEffect, useState } from "react";

export const AnimatedBackground = () => {
  const [positions, setPositions] = useState([
    { x: 20, y: 30, size: 30, speed: 0.7, direction: 1 },
    { x: 70, y: 65, size: 25, speed: 0.5, direction: -1 },
    { x: 40, y: 80, size: 20, speed: 0.6, direction: 1 },
    { x: 80, y: 20, size: 35, speed: 0.4, direction: -1 },
    { x: 50, y: 50, size: 28, speed: 0.8, direction: 1 }
  ]);

  useEffect(() => {
    // Create gradient animation using requestAnimationFrame for better performance
    let hue = 0;
    let animationFrameId: number;
    let lastTime = 0;
    
    const animateGradient = (currentTime: number) => {
      // Calculate delta time for smooth animation regardless of frame rate
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;
      
      // Update hue for flowing color changes
      hue = (hue + 0.05) % 360;
      
      // Update positions of dancing gradients
      setPositions(prev => prev.map(bubble => {
        // Calculate new position based on speed and direction
        let newY = bubble.y + (0.01 * bubble.speed * bubble.direction * deltaTime / 16);
        
        // Reverse direction if reaching boundaries
        let newDirection = bubble.direction;
        if (newY > 95 || newY < 5) {
          newDirection *= -1;
          newY = newY > 95 ? 95 : 5;
        }
        
        // Slight x-axis movement for more interesting motion
        let newX = bubble.x + Math.sin(currentTime * 0.001 * bubble.speed) * 0.1;
        if (newX > 95) newX = 95;
        if (newX < 5) newX = 5;
        
        return {
          ...bubble,
          x: newX,
          y: newY,
          direction: newDirection
        };
      }));
      
      // Update main gradient colors
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
      {/* Dancing gradient bubbles */}
      {positions.map((bubble, index) => (
        <div 
          key={index}
          className="absolute rounded-full blur-3xl"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: `${bubble.size}vw`,
            height: `${bubble.size}vw`,
            background: `radial-gradient(circle, hsla(${(index * 60) % 360}, 70%, 75%, 0.15) 0%, transparent 70%)`,
            transition: 'left 2s cubic-bezier(0.4, 0, 0.2, 1), top 2s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
      ))}

      {/* Fixed animated gradient bubbles (for additional effect) */}
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] rounded-full bg-brand-purple/10 dark:bg-brand-purple/5 blur-3xl animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[25vw] h-[25vw] rounded-full bg-brand-vivid-purple/10 dark:bg-brand-vivid-purple/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '0.7s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-[20vw] h-[20vw] rounded-full bg-brand-purple/10 dark:bg-brand-purple/5 blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-[22vw] h-[22vw] rounded-full bg-brand-vivid-purple/10 dark:bg-brand-vivid-purple/5 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};
