import { useNavigate, useLocation } from 'react-router-dom';
import { useCallback } from 'react';

export default function useScrollToSection() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const scrollToSection = useCallback((id) => {
    const performScroll = () => {
      const section = document.getElementById(id);
      if (!section) return;
      
      const navbar = document.querySelector('.navbar');
      const offset = navbar?.getBoundingClientRect().height || 0;
      const top = section.offsetTop - offset;
      
      window.scrollTo({ top, behavior: 'smooth' });
    };
    
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      setTimeout(performScroll, 100);
    } else {
      performScroll();
    }
  }, [navigate, location.pathname]);
  
  return scrollToSection;
}

