
import React, { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(true); // Always use pointer style
  const [isVisible, setIsVisible] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [moveTimeout, setMoveTimeout] = useState<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPrevPosition({ x: position.x, y: position.y });
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Set moving state
      setIsMoving(true);
      
      // Clear any existing timeout
      if (moveTimeout) clearTimeout(moveTimeout);
      
      // Set timeout to stop showing line after cursor stops moving
      const timeout = setTimeout(() => {
        setIsMoving(false);
      }, 300);
      
      setMoveTimeout(timeout);
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
      if (moveTimeout) clearTimeout(moveTimeout);
    };
  }, [position, moveTimeout]);

  if (!isVisible) return null;

  // Calculate angle and distance for the following line
  const angle = Math.atan2(position.y - prevPosition.y, position.x - prevPosition.x);
  const distance = Math.sqrt(Math.pow(position.x - prevPosition.x, 2) + Math.pow(position.y - prevPosition.y, 2));
  
  return (
    <>
      {/* Following line - appears when mouse is moving */}
      {isMoving && distance > 2 && (
        <div 
          className="fixed h-[8px] bg-gradient-to-r from-brand-purple/40 via-brand-purple/60 to-brand-vivid-purple pointer-events-none z-[9999] rounded-full"
          style={{ 
            left: `${prevPosition.x}px`, 
            top: `${prevPosition.y}px`, 
            width: `${Math.min(distance * 2, 150)}px`, // Increased width with a max limit
            transform: `rotate(${angle}rad)`,
            transformOrigin: '0 0',
            opacity: Math.min(distance / 40, 1), // Adjusted opacity calculation
            boxShadow: '0 0 10px rgba(155, 135, 245, 0.6)'
          }}
        ></div>
      )}
    </>
  );
};
