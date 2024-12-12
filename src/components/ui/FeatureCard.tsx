import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  feature: {
    title: string;
    description: string;
  };
  icon: React.ReactNode;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature, icon }) => {
  return (
    <motion.div
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
      }}
      whileHover={{ 
        scale: 1.05,
        backgroundColor: 'rgba(107, 70, 193, 0.2)',
        boxShadow: '0 0 20px rgba(147, 51, 234, 0.3)'
      }}
      whileTap={{ scale: 0.95 }}
      className="group p-6 bg-gray-800 rounded-xl transition-all duration-300 cursor-pointer"
    >
      <motion.div 
        className="mb-4"
        whileHover={{ scale: 1.1 }}
      >
        {icon}
      </motion.div>
      <motion.h3 
        className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors"
      >
        {feature.title}
      </motion.h3>
      <motion.p 
        className="text-gray-400 group-hover:text-gray-300 transition-colors"
      >
        {feature.description}
      </motion.p>
    </motion.div>
  );
};