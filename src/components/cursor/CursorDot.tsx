import React from 'react';
import { motion } from 'framer-motion';

interface CursorDotProps {
  x: number;
  y: number;
  isHovering: boolean;
}

export const CursorDot: React.FC<CursorDotProps> = ({ x, y, isHovering }) => {
  return (
    <motion.div
      className="cursor-dot"
      animate={{
        x,
        y,
        scale: isHovering ? 1.2 : 1,
      }}
      transition={{
        type: "spring",
        damping: 30,
        stiffness: 200,
        mass: 0.5,
      }}
    />
  );
};