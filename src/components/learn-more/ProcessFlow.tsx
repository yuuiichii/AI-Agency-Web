import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Lightbulb, Code, Cpu, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Lightbulb,
    title: 'Analysis',
    description: 'We analyze your business processes and identify automation opportunities'
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Our team develops custom AI solutions tailored to your needs'
  },
  {
    icon: Cpu,
    title: 'Implementation',
    description: 'Seamless integration of AI systems into your existing workflow'
  },
  {
    icon: CheckCircle,
    title: 'Optimization',
    description: 'Continuous monitoring and optimization of AI performance'
  }
];

const ProcessFlow = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
          <p className="text-xl text-gray-400">How we implement AI automation solutions</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gray-800 rounded-xl p-6 h-full">
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4"
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-purple-500" />
                  </div>
                )}
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;