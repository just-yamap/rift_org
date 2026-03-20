import React from 'react';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import SignupSection from '../components/landing/SignupSection';
import HowItWorks from '../components/landing/HowItWorks';
import Features from '../components/landing/Features';
import FAQ from '../components/landing/FAQ';
import Footer from '../components/landing/Footer';

const ATM_IMAGE = "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/89c804baa_generated_973640e9.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection atmImageUrl={ATM_IMAGE} />
      <SignupSection />
      <HowItWorks />
      <Features />
      <FAQ />
      <Footer />
    </div>
  );
}