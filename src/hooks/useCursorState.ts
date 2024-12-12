import { useState, useCallback, useEffect } from 'react';

interface Trail {
  x: number;
  y: number;
  id: number;
}

export const useCursorState = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [trails, setTrails] = useState<Trail[]>([]);
  const [trailCount, setTrailCount] = useState(0);

  const addTrail = useCallback((x: number, y: number) => {
    setTrailCount(prev => prev + 1);
    const newTrail = { x, y, id: trailCount };
    setTrails(prev => [...prev, newTrail]);
    setTimeout(() => {
      setTrails(prev => prev.filter(trail => trail.id !== newTrail.id));
    }, 500);
  }, [trailCount]);

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let throttleTimeout: number | null = null;

    const onMouseMove = (e: MouseEvent) => {
      if (!throttleTimeout) {
        throttleTimeout = window.setTimeout(() => {
          const distance = Math.hypot(e.clientX - lastX, e.clientY - lastY);
          if (distance > 20) {
            addTrail(e.clientX, e.clientY);
            lastX = e.clientX;
            lastY = e.clientY;
          }
          throttleTimeout = null;
        }, 50);
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') !== null ||
        target.closest('a') !== null ||
        target.classList.contains('interactive');
      
      setIsHovering(isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseout', () => setIsHovering(false));

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseout', () => setIsHovering(false));
      if (throttleTimeout) {
        clearTimeout(throttleTimeout);
      }
    };
  }, [addTrail]);

  return { isHovering, trails };
};