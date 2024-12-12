import React from 'react';
import { motion } from 'framer-motion';

interface Trail {
  x: number;
  y: number;
  id: number;
}

interface CursorTrailProps {
  trails: Trail[];
}

export const CursorTrail: React.FC<CursorTrailProps> = ({ trails }) => {
  return (
    <>
      {trails.map(trail => (
        <motion.div
          key={trail.id}
          className="cursor-trail"
          initial={{ opacity: 0.5, scale: 1 }}
          animate={{ opacity: 0, scale: 0.2 }}
          exit={{ opacity: 0 }}
          style={{
            left: trail.x,
            top: trail.y,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </>
  );
};