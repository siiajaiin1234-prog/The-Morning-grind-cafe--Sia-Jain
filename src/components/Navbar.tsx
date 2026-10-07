import React, { useState, useEffect } from 'react';
import { Menu, X, Clock, Calendar, Coffee } from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check if open (7:00 AM - 6:00 PM local time)
    const now = new Date();
    const hour = now.getHours();
    setIsOpenNow(hour >= 7 && hour < 18);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D9] py-3.5 shadow-xs'
          : 'bg-[#FAF8F5]/80 backdrop-blur-xs border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Zone 1: Brand Title (Single text element wordmark) */}
        <a
          href="#home"
          className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-[#1E1915] hover:text-[#5B4636] transition-colors whitespace-nowrap"
        >
          The Morning Grind
        </a>

        {/* Zone 2: 4-6 Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4A423B]">
          <a
            href="#menu"
            className="hover:text-[#1E1915] transition-colors relative py-1 hover:underline underline-offset-4 decoration-[#B89B7A]"
          >
            Menu
          </a>
          <a
            href="#journal"
            className="hover:text-[#1E1915] transition-colors relative py-1 hover:underline underline-offset-4 decoration-[#B89B7A]"
          >
            The Journal
          </a>
          <a
            href="#story"
            className="hover:text-[#1E1915] transition-colors relative py-1 hover:underline underline-offset-4 decoration-[#B89B7A]"
          >
            Roastery & Story
          </a>
          <a
            href="#visit"
            className="hover:text-[#1E1915] transition-colors relative py-1 hover:underline underline-offset-4 decoration-[#B89B7A]"
          >
            Hours & Location
          </a>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs text-[#6E6359] border-r border-[#E2DAD0] pr-4">
            <span
              className={`inline-block w-2 h-2 rounded-full ${
                isOpenNow ? 'bg-[#3A7D44]' : 'bg-[#B05D3B]'
              }`}
            />
            <span className="whitespace-nowrap">
              {isOpenNow ? 'Open today until 6 PM' : 'Opens tomorrow 7 AM'}
            </span>
          </div>

          <button
            onClick={onOpenReservation}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] bg-[#2A231D] hover:bg-[#43382F] rounded-sm transition-colors whitespace-nowrap"
          >
            Reserve Table
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#2A231D] hover:text-[#5B4636] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E8E2D9] px-6 py-6 shadow-lg">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#2A231D]">
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#F0EBE3]"
            >
              Menu
            </a>
            <a
              href="#journal"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#F0EBE3]"
            >
              The Journal (10 Articles)
            </a>
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#F0EBE3]"
            >
              Roastery & Story
            </a>
            <a
              href="#visit"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#F0EBE3]"
            >
              Hours & Location
            </a>
          </nav>
          <div className="mt-6 pt-4 border-t border-[#E8E2D9] flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs text-[#6E6359]">
              <span
                className={`inline-block w-2 h-2 rounded-full ${
                  isOpenNow ? 'bg-[#3A7D44]' : 'bg-[#B05D3B]'
                }`}
              />
              <span>{isOpenNow ? 'Open today until 6 PM' : 'Opens tomorrow at 7 AM'}</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] bg-[#2A231D] rounded-sm"
            >
              Reserve a Table
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
