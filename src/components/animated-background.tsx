
import React, { useEffect, useState } from "react";

export const AnimatedBackground = () => {
  const [balls, setBalls] = useState([
    { x: 20, y: 30, size: 40, speed: 1.5, direction: { x: 1, y: 1 }, color: "purple" },
    { x: 70, y: 65, size: 60, speed: 1.2, direction: { x: -1, y: 0.5 }, color: "blue" },
    { x: 40, y: 80, size: 50, speed: 1, direction: { x: 0.5, y: -1 }, color: "pink" },
    { x: 80, y: 20, size: 70, speed: 0.8, direction: { x: -0.7, y: -0.7 }, color: "teal" }
  ]);

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = 0;
    
    const animateBalls = (currentTime: number) => {
      // Calculate delta time for smooth animation regardless of frame rate
      const deltaTime = lastTime ? (currentTime - lastTime) / 16 : 1;
      lastTime = currentTime;
      
      setBalls(prev => prev.map(ball => {
        // Calculate new position based on speed, direction and delta time
        let newX = ball.x + (ball.speed * ball.direction.x * deltaTime * 0.2);
        let newY = ball.y + (ball.speed * ball.direction.y * deltaTime * 0.2);
        
        // Bounce off edges
        let newDirectionX = ball.direction.x;
        let newDirectionY = ball.direction.y;
        
        if (newX > 95 || newX < 5) {
          newDirectionX *= -1;
          newX = newX > 95 ? 95 : 5;
        }
        
        if (newY > 95 || newY < 5) {
          newDirectionY *= -1;
          newY = newY > 95 ? 95 : 5;
        }
        
        return {
          ...ball,
          x: newX,
          y: newY,
          direction: { x: newDirectionX, y: newDirectionY }
        };
      }));
      
      animationFrameId = requestAnimationFrame(animateBalls);
    };
    
    animationFrameId = requestAnimationFrame(animateBalls);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden">
      {balls.map((ball, index) => (
        <div 
          key={index}
          className="absolute rounded-full blur-3xl animate-pulse-slow"
          style={{
            left: `${ball.x}%`,
            top: `${ball.y}%`,
            width: `${ball.size}vw`,
            height: `${ball.size}vw`,
            background: getGradientForBall(ball.color),
            transition: 'none',
            opacity: 0.6
          }}
        />
      ))}
    </div>
  );
};

// Helper function to get different gradients for the balls
function getGradientForBall(color: string): string {
  switch(color) {
    case 'purple':
      return 'radial-gradient(circle, rgba(155,135,245,0.8) 0%, rgba(139,92,246,0.2) 70%)';
    case 'blue':
      return 'radial-gradient(circle, rgba(96,165,250,0.8) 0%, rgba(59,130,246,0.2) 70%)';
    case 'pink':
      return 'radial-gradient(circle, rgba(244,114,182,0.8) 0%, rgba(236,72,153,0.2) 70%)';
    case 'teal':
      return 'radial-gradient(circle, rgba(45,212,191,0.8) 0%, rgba(20,184,166,0.2) 70%)';
    default:
      return 'radial-gradient(circle, rgba(155,135,245,0.8) 0%, rgba(139,92,246,0.2) 70%)';
  }
}
