import React from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';
import { useDeviceType } from '../hooks/useDeviceType';
import '../styles/cursor.css';

const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const isMobile = useDeviceType();

  if (isMobile) return null;

  return (
    <motion.div
      className="cursor-shadow"
      animate={{
        x,
        y,
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 300,
        mass: 0.5,
      }}
    />
  );
};

export default CustomCursor;