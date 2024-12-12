import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LucideIcon } from 'lucide-react';

interface ServiceProps {
  service: {
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
  };
  index: number;
}

const ServiceSection: React.FC<ServiceProps> = ({ service, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all duration-300"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4"
      >
        <service.icon className="w-6 h-6 text-white" />
      </motion.div>
      <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
      <p className="text-gray-400 mb-4">{service.description}</p>
      <ul className="space-y-2">
        {service.features.map((feature, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: index * 0.1 + idx * 0.1 }}
            className="flex items-center text-gray-300"
          >
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
            {feature}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceSection;