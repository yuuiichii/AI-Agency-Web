import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ServiceSection from '../components/learn-more/ServiceSection';
import TechnologyStack from '../components/learn-more/TechnologyStack';
import ProcessFlow from '../components/learn-more/ProcessFlow';
import CaseStudies from '../components/learn-more/CaseStudies';
import { Brain, Bot, Factory, Database, Cloud, Shield } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'Machine Learning Solutions',
    description: 'Custom ML models for predictive analytics, pattern recognition, and decision-making automation.',
    features: [
      'Predictive Maintenance',
      'Demand Forecasting',
      'Anomaly Detection',
      'Natural Language Processing'
    ]
  },
  {
    icon: Bot,
    title: 'Intelligent Process Automation',
    description: 'End-to-end automation of business processes using AI and RPA technologies.',
    features: [
      'Workflow Automation',
      'Document Processing',
      'Data Entry Automation',
      'Task Scheduling'
    ]
  },
  {
    icon: Factory,
    title: 'Industrial Automation',
    description: 'Smart manufacturing solutions powered by AI and IoT integration.',
    features: [
      'Quality Control',
      'Production Optimization',
      'Equipment Monitoring',
      'Supply Chain Automation'
    ]
  },
  {
    icon: Database,
    title: 'Data Analytics & AI',
    description: 'Transform raw data into actionable insights using advanced analytics and AI.',
    features: [
      'Big Data Processing',
      'Real-time Analytics',
      'Business Intelligence',
      'Data Visualization'
    ]
  },
  {
    icon: Cloud,
    title: 'Cloud AI Solutions',
    description: 'Scalable cloud-based AI services for enterprise applications.',
    features: [
      'Cloud Migration',
      'Serverless AI',
      'API Development',
      'Microservices Architecture'
    ]
  },
  {
    icon: Shield,
    title: 'AI Security & Compliance',
    description: 'Ensure your AI systems are secure, ethical, and compliant with regulations.',
    features: [
      'AI Governance',
      'Data Privacy',
      'Model Security',
      'Compliance Monitoring'
    ]
  }
];

const LearnMore = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-900 to-gray-900 opacity-90" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            AI Automation Excellence
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Transforming businesses through cutting-edge AI automation solutions
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceSection
              key={index}
              service={service}
              index={index}
            />
          ))}
        </div>
      </motion.div>

      {/* Technology Stack */}
      <TechnologyStack />

      {/* Process Flow */}
      <ProcessFlow />

      {/* Case Studies */}
      <CaseStudies />
    </div>
  );
};

export default LearnMore;