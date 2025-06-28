import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;