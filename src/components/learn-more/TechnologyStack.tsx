import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Cloud, Lock } from 'lucide-react';

const technologies = [
  {
    icon: Code,
    name: 'AI Frameworks',
    items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI']
  },
  {
    icon: Database,
    name: 'Data Processing',
    items: ['Apache Spark', 'Kafka', 'Elasticsearch', 'MongoDB']
  },
  {
    icon: Cloud,
    name: 'Cloud Platforms',
    items: ['AWS', 'Google Cloud', 'Azure', 'IBM Cloud']
  },
  {
    icon: Lock,
    name: 'Security Tools',
    items: ['OAuth 2.0', 'JWT', 'SSL/TLS', 'Encryption']
  }
];

const TechnologyStack = () => {
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
          <h2 className="text-4xl font-bold text-white mb-4">Our Technology Stack</h2>
          <p className="text-xl text-gray-400">Powered by industry-leading technologies</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6"
            >
              <div className="flex items-center mb-4">
                <tech.icon className="w-6 h-6 text-purple-500 mr-2" />
                <h3 className="text-xl font-bold text-white">{tech.name}</h3>
              </div>
              <ul className="space-y-2">
                {tech.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 + idx * 0.1 }}
                    className="text-gray-400"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;