
import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

const TRAIL_COUNT = 8;

export const HeartCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Slightly tighter spring for better precision while maintaining a gentle feel
  const springConfig = { damping: 25, stiffness: 250 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Use clientX and clientY for viewport-fixed coordinates
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      setTrail((prev) => {
        const newTrail = [{ x: e.clientX, y: e.clientY, id: Date.now() }, ...prev];
        return newTrail.slice(0, TRAIL_COUNT);
      });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Main Heart */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          position: 'fixed',
          top: 0,
          left: 0,
        }}
        className="-translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        animate={{
          scale: isClicking ? 1.4 : isHovering ? 1.2 : 1,
          filter: isHovering ? 'drop-shadow(0 0 12px rgba(214, 90, 141, 0.8))' : 'none',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#8A1D4A"
          className="animate-pulse"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        
        {/* Click Ripple */}
        <AnimatePresence>
          {isClicking && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0.8 }}
              animate={{ scale: 3, opacity: 0 }}
              exit={{ opacity: 0 }}
              className="absolute w-8 h-8 rounded-full border border-secondary"
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* Trailing Hearts */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          initial={{ opacity: 0.6, scale: 0.8 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2"
          style={{
            x: point.x,
            y: point.y,
          }}
        >
          <svg
            width={12 - index}
            height={12 - index}
            viewBox="0 0 24 24"
            fill="#D65A8D"
            opacity={0.5 - index * 0.05}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};
