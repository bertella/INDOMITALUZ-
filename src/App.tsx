import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutBand } from './components/AboutBand';
import { LiveGallery } from './components/LiveGallery';
import { BacklineSection } from './components/BacklineSection';
import { WorkModeSection } from './components/WorkModeSection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { initAnalytics } from './utils/analytics';

export default function App() {
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <div className="min-h-screen bg-[#191817] text-[#E9E0D0]">
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-sm focus:bg-[#B68B5A] focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:text-[#191817]"
      >
        Ir al contenido principal
      </a>

      <Navbar />

      <main id="contenido-principal">
        <Hero />
        <AboutBand />
        <LiveGallery />
        <BacklineSection />
        <WorkModeSection />
        <BookingSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
