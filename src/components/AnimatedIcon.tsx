import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AnimatedIconProps {
  Icon: LucideIcon;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ Icon }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.2,
        rotate: 5,
        transition: { duration: 0.2 }
      }}
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center transform-gpu"
    >
      <Icon className="w-6 h-6 text-white" />
    </motion.div>
  );
};

export default AnimatedIcon;