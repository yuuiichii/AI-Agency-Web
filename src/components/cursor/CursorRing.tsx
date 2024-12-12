import React from 'react';
import { motion } from 'framer-motion';

interface CursorRingProps {
  x: number;
  y: number;
  isHovering: boolean;
}

export const CursorRing: React.FC<CursorRingProps> = ({ x, y, isHovering }) => {
  return (
    <motion.div
      className="cursor-ring"
      animate={{
        x,
        y,
        scale: isHovering ? 1.5 : 1,
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 150,
        mass: 0.75,
      }}
    />
  );
};