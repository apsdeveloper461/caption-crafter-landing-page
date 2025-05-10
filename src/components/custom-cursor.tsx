
import React, { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPrevPosition({ x: position.x, y: position.y });
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if cursor is over a clickable element
      const target = e.target as HTMLElement;
      const clickableElements = ['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'];
      const isClickable = 
        clickableElements.includes(target.tagName) || 
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.closest('a, button, input, select, textarea, [role="button"]');
      
      setIsPointer(!!isClickable);
    };
    
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Add event listeners
    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Clean up event listeners when component unmounts
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [position]);

  if (!isVisible) return null;

  // Calculate angle and distance for the following line
  const angle = Math.atan2(position.y - prevPosition.y, position.x - prevPosition.x);
  const distance = Math.sqrt(Math.pow(position.x - prevPosition.x, 2) + Math.pow(position.y - prevPosition.y, 2));
  
  return (
    <>
      {/* Main cursor circle */}
      <div 
        className={`fixed pointer-events-none z-[9999] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`, 
          transform: 'translate(-50%, -50%)' 
        }}
      >
        <div className={`rounded-full bg-brand-purple/30 backdrop-blur-sm border border-brand-purple/50 transition-all duration-200 ${isPointer ? 'w-10 h-10 animate-pulse-slow' : 'w-8 h-8'}`}></div>
      </div>

      {/* Cursor dot */}
      <div 
        className="fixed w-2 h-2 rounded-full bg-brand-purple pointer-events-none z-[10000] transition-opacity duration-300" 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`, 
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 1 : 0
        }}
      ></div>

      {/* Cursor trail */}
      <div 
        className="fixed w-8 h-8 rounded-full bg-brand-purple/20 pointer-events-none z-[9998] transition-opacity duration-500 animate-pulse-slow" 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`, 
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 0.5 : 0,
          transitionDelay: '50ms'
        }}
      ></div>
      
      {/* Following line - appears when mouse is moving */}
      {distance > 5 && (
        <div 
          className="fixed h-[2px] bg-gradient-to-r from-brand-purple/30 to-brand-purple/70 pointer-events-none z-[9997]" 
          style={{ 
            left: `${prevPosition.x}px`, 
            top: `${prevPosition.y}px`, 
            width: `${distance}px`,
            transform: `rotate(${angle}rad)`,
            transformOrigin: '0 0',
            opacity: Math.min(distance / 100, 0.7)
          }}
        ></div>
      )}
    </>
  );
};
