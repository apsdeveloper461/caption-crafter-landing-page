
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
  
  // Set up hover border animations for cards, buttons and interactive elements
  const setupHoverAnimations = () => {
    // Cards with animated borders
    const cards = document.querySelectorAll('.bg-card, .card, .hover-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.classList.add('hover-border-active');
      });
      card.addEventListener('mouseleave', () => {
        card.classList.remove('hover-border-active');
      });
    });
    
    // Buttons with animated borders (excluding utility buttons like theme toggle)
    const buttons = document.querySelectorAll('.hover-border-btn, .gradient-bg');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.classList.add('btn-border-active');
      });
      button.addEventListener('mouseleave', () => {
        button.classList.remove('btn-border-active');
      });
    });
    
    // General hover animations
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
  
  // Re-run hover animations on theme change to ensure they apply to newly rendered elements
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'class' && 
          (mutation.target === document.documentElement || mutation.target === document.body)) {
        setupHoverAnimations();
      }
    });
  });
  
  observer.observe(document.documentElement, { attributes: true });
  
  return () => {
    window.removeEventListener('scroll', reveal);
    observer.disconnect();
  };
};
