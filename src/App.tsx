import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { MenuSection } from './components/MenuSection';
import { BlogSection } from './components/BlogSection';
import { VisitSection } from './components/VisitSection';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#221F1B] font-sans selection:bg-[#E2D5C3] selection:text-[#1F1914]">
      {/* Navigation */}
      <Navbar
        onOpenReservation={() => setIsReservationOpen(true)}
        activeSection={activeSection}
      />

      <main id="main-content">
        {/* Hero Section */}
        <Hero onOpenReservation={() => setIsReservationOpen(true)} />

        {/* The Grind Journal (Blog with minimum 10 articles) */}
        <BlogSection />

        {/* Menu Section */}
        <MenuSection onOpenReservation={() => setIsReservationOpen(true)} />

        {/* Story & Roastery */}
        <Story />

        {/* Visit, Hours & Location */}
        <VisitSection />

        {/* Newsletter Dispatch */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />

      {/* Reservation & Event Inquiry Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </div>
  );
}
