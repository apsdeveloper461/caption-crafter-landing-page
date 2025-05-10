
// Scroll animation utility
export const initScrollAnimation = () => {
  const reveal = () => {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });

    // Add border animation to visible items
    const cards = document.querySelectorAll('.card, .group');
    cards.forEach(card => {
      const isVisible = card.getBoundingClientRect().top < window.innerHeight;
      if (isVisible) {
        card.classList.add('animate-fade-in');
      }
    });
  };

  window.addEventListener('scroll', reveal);
  
  // Initial check on load
  setTimeout(reveal, 100);
  
  // Set up hover animations
  const setupHoverAnimations = () => {
    const hoverItems = document.querySelectorAll('.hover-card, .group');
    hoverItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.classList.add('hover-active');
      });
      item.addEventListener('mouseleave', () => {
        item.classList.remove('hover-active');
      });
    });
  };
  
  setupHoverAnimations();
  
  return () => {
    window.removeEventListener('scroll', reveal);
  };
};
