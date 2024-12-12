import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, TrendingUp, Clock } from 'lucide-react';

const cases = [
  {
    title: 'Manufacturing Optimization',
    company: 'Global Manufacturing Corp',
    metrics: [
      { label: 'Efficiency Increase', value: '45%' },
      { label: 'Cost Reduction', value: '30%' },
      { label: 'Implementation Time', value: '3 months' }
    ],
    description: 'Implemented AI-driven predictive maintenance and quality control systems.',
    icon: Building2
  },
  {
    title: 'Financial Analysis Automation',
    company: 'FinTech Solutions Ltd',
    metrics: [
      { label: 'Processing Speed', value: '10x faster' },
      { label: 'Accuracy Rate', value: '99.9%' },
      { label: 'Cost Savings', value: '$2M/year' }
    ],
    description: 'Automated financial report analysis and risk assessment processes.',
    icon: TrendingUp
  },
  {
    title: 'Supply Chain Optimization',
    company: 'Global Logistics Inc',
    metrics: [
      { label: 'Delivery Time', value: '-40%' },
      { label: 'Inventory Costs', value: '-25%' },
      { label: 'Accuracy', value: '99.5%' }
    ],
    description: 'AI-powered supply chain optimization and demand forecasting.',
    icon: Clock
  }
];

const CaseStudies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
          <p className="text-xl text-gray-400">Real results from our AI automation solutions</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 rounded-xl p-6"
            >
              <div className="flex items-center mb-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4"
                >
                  <study.icon className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-white">{study.title}</h3>
                  <p className="text-purple-400">{study.company}</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6">{study.description}</p>
              
              <div className="grid grid-cols-3 gap-4">
                {study.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-400">{metric.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;