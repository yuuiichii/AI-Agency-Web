import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Rocket, Shield, Cpu } from 'lucide-react';
import AnimatedIcon from './AnimatedIcon';
import { FeatureCard } from './ui/FeatureCard';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Solutions',
    description: 'Leverage cutting-edge artificial intelligence to automate complex business processes.'
  },
  {
    icon: Rocket,
    title: 'Rapid Implementation',
    description: 'Get up and running quickly with our streamlined deployment process.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security measures to protect your sensitive data and operations.'
  },
  {
    icon: Cpu,
    title: 'Smart Integration',
    description: 'Seamlessly integrate with your existing systems and workflows.'
  }
];

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              icon={<AnimatedIcon Icon={feature.icon} />}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;