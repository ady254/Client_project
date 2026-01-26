import { useState, useEffect } from 'react';

type ScrollDirection = 'up' | 'down' | 'none';

export function useScrollDirection(): ScrollDirection {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('none');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 0) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      } else {
        setScrollDirection('none');
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return scrollDirection;
}
