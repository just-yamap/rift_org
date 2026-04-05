import React from 'react';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import SignupSection from '../components/landing/SignupSection';
import DemoPreview from '../components/landing/DemoPreview';
import Vision from '../components/landing/Vision';
import HowItWorks from '../components/landing/HowItWorks';
import ProductSpecs from '../components/landing/ProductSpecs';
import Features from '../components/landing/Features';
import BusinessModel from '../components/landing/BusinessModel';
import Roadmap from '../components/landing/Roadmap';
import FAQ from '../components/landing/FAQ';
import Footer from '../components/landing/Footer';

const ATM_IMAGE = "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/8a2235161_image.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection atmImageUrl={ATM_IMAGE} />
      <SignupSection />
      <DemoPreview />
      <Vision />
      <HowItWorks />
      <ProductSpecs />
      <Features />
      <BusinessModel />
      <Roadmap />
      <FAQ />
      <Footer />
    </div>
  );
}