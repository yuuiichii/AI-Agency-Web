import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ContactForm from '../components/ContactForm';

const MainLayout = () => (
  <div className="bg-gray-900">
    <Hero />
    <Features />
    <ContactForm />
  </div>
);

export default MainLayout;