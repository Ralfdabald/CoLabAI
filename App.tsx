import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { BackgroundEffects } from './components/ui/BackgroundEffects';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': any;
    }
  }
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-dark-bg selection:bg-brand-500/30 selection:text-brand-300">
      <BackgroundEffects />
      
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Features />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
      </div>

      {/* ElevenLabs Chat Widget */}
      <elevenlabs-convai agent-id="agent_2501keft323ffdav0ef55zb60pcx"></elevenlabs-convai>
    </div>
  );
}