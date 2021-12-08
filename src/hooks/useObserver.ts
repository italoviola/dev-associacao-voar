import { useState, RefObject } from 'react';

export function useObserver(elementRef: RefObject<HTMLElement>) {
  const [isVisible, setIsVisible] = useState(false);

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    },
    { threshold: 0.3 }
  );

  if (elementRef.current) observer.observe(elementRef.current);

  return isVisible;
}
