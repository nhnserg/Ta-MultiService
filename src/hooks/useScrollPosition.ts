import { useState, useEffect } from 'react';

/**
 * Hook to track window scroll position
 * @param threshold - Scroll position threshold in pixels
 * @returns Boolean indicating if scroll position is beyond threshold
 */
export const useScrollPosition = (threshold = 50): boolean => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
};