import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Landing/Hero';
import Features from '../components/Landing/Features';
import ContactForm from '../components/Landing/ContactForm';
import ElementLoader from '../components/ui/ELementLoader';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Features />
      <ContactForm />
    </div>
  );
}

export default Landing;