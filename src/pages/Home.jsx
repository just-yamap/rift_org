import React from 'react';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import SignupSection from '../components/landing/SignupSection';
import Vision from '../components/landing/Vision';
import HowItWorks from '../components/landing/HowItWorks';
import Features from '../components/landing/Features';
import TechStack from '../components/landing/TechStack';
import BusinessModel from '../components/landing/BusinessModel';
import Roadmap from '../components/landing/Roadmap';
import FAQ from '../components/landing/FAQ';
import Footer from '../components/landing/Footer';
import ATMWidget from '../components/landing/ATMWidget';
import InfoBar from '../components/landing/InfoBar';
import ContactBubble from '../components/landing/ContactBubble';
import RiftConnectSection from '../components/landing/RiftConnectSection';
import AssetsSection from '../components/landing/AssetsSection';
import PrivacySection from '../components/landing/PrivacySection';
import NativeBTCSection from '../components/landing/NativeBTCSection';
import InfrastructureSection from '../components/landing/InfrastructureSection';
import TransparencySection from '../components/landing/TransparencySection';
import FeeCalculator from '../components/landing/FeeCalculator';
import SupportedAssets from '../components/landing/SupportedAssets';
import KioskMap from '../components/landing/KioskMap';

const ATM_IMAGE = "https://media.base44.com/images/public/69bce5cb012b9c997937b65e/8a2235161_image.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection atmImageUrl={ATM_IMAGE} />
      <InfoBar />
      <FeeCalculator />
      <SignupSection />
      <Vision />
      <RiftConnectSection />
      <HowItWorks />
      <Features />
      <SupportedAssets />
      <KioskMap />
      <NativeBTCSection />
      <PrivacySection />
      <InfrastructureSection />
      <TechStack />
      <BusinessModel />
      <Roadmap />
      <TransparencySection />
      <FAQ />
      <Footer />
      <ATMWidget />
      <ContactBubble />
    </div>
  );
}