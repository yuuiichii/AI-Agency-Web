import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Sparkles, Zap } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import { useNavigate } from 'react-router-dom';
import { scrollToElement } from '../utils/scroll';

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    scrollToElement('contact-form');
  };

  const handleLearnMore = () => {
    navigate('/learn-more');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            className="flex justify-center mb-8"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Bot size={64} className="text-white" />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <Typewriter
              options={{
                strings: ['AI Automation', 'Future of Work', 'Smart Solutions'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI automation solutions that drive efficiency and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={handleGetStarted}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-purple-900 rounded-full font-bold text-lg flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Get Started
            </motion.button>
            
            <motion.button
              onClick={handleLearnMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;