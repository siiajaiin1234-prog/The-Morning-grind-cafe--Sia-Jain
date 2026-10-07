import React from 'react';
import { Coffee, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A1512] text-[#A6998C] py-14 border-t border-[#2A221C]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#2B231E]">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#home"
              className="text-2xl font-serif font-bold text-[#FAF8F5] block tracking-tight"
            >
              The Morning Grind
            </a>
            <p className="text-xs text-[#8A7C6E] leading-relaxed max-w-sm">
              Artisanal neighborhood coffee roastery, 72-hour scratch sourdough viennoiserie, and publication house. Established in the Old Foundry District.
            </p>
            <p className="text-xs text-[#6B5E52]">
              142 Millrace Alley · Tuesday – Sunday 7:00 AM – 6:00 PM
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]">
              Navigation
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#menu" className="hover:text-[#FAF8F5] transition-colors">
                  Seasonal Daily Menu
                </a>
              </li>
              <li>
                <a href="#journal" className="hover:text-[#FAF8F5] transition-colors">
                  The Grind Journal (10 Essays)
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#FAF8F5] transition-colors">
                  The Roastery & Sourdough Craft
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-[#FAF8F5] transition-colors">
                  Hours, Location & Transit
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Direct Orders */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#FAF8F5]">
              Direct Inquiry
            </p>
            <p className="text-xs text-[#8A7C6E] leading-relaxed">
              For wholesale coffee beans, catering, private cuppings, or editorial inquiries:
            </p>
            <p className="text-xs font-mono text-[#D4C4B2]">
              hello@themorninggrind.coffee
            </p>
            <p className="text-xs font-mono text-[#D4C4B2]">
              (555) 849-2041
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B5E52]">
          <p>© {new Date().getFullYear()} The Morning Grind Cafe & Roastery. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#A6998C] hover:text-[#FAF8F5] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
