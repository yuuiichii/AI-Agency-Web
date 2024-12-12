import React from 'react';
import { motion } from 'framer-motion';

interface CursorShadowProps {
  x: number;
  y: number;
}

export const CursorShadow: React.FC<CursorShadowProps> = ({ x, y }) => {
  return (
    <motion.div
      className="cursor-shadow"
      style={{
        left: x,
        top: y,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
        x: 0,
        y: 0
      }}
      transition={{
        type: "spring",
        damping: 15,
        stiffness: 150,
        mass: 0.75
      }}
    />
  );
};