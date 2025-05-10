
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
  };

  window.addEventListener('scroll', reveal);
  
  // Initial check on load
  setTimeout(reveal, 100);
  
  return () => {
    window.removeEventListener('scroll', reveal);
  };
};
