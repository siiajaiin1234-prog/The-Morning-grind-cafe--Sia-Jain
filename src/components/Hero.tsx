import React from 'react';
import { ArrowRight, Compass, Sparkles, MapPin } from 'lucide-react';
import heroImg from '../assets/images/cafe_hero_interior_1791399904397.jpg';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section id="home" className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top Kicker - Editorial Unboxed metadata */}
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-[#7C6E60] font-medium mb-4">
          <span>Neighborhood Micro-Roaster</span>
          <span aria-hidden="true">·</span>
          <span>Scratch Viennoiserie</span>
          <span aria-hidden="true">·</span>
          <span>Old Foundry District</span>
        </div>

        {/* Headline & Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-10 md:mb-14">
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#1F1914] leading-[1.08] tracking-tight text-balance">
              Crafted with patience. Poured with quiet intention.
            </h1>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-end space-y-4">
            <p className="text-base text-[#594E44] leading-relaxed">
              We roast single-origin coffees in 15kg cast-iron drums, laminate our sourdough pastries for 72 hours, and publish honest essays on the craft of slow living.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#menu"
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] bg-[#2A231D] hover:bg-[#43382F] rounded-sm transition-colors inline-flex items-center gap-2"
              >
                Explore Menu
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={onOpenReservation}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#2A231D] border border-[#2A231D] hover:bg-[#2A231D]/5 rounded-sm transition-colors"
              >
                Book Table
              </button>
            </div>
          </div>
        </div>

        {/* Hero Visual Anchor */}
        <div className="relative rounded-lg overflow-hidden shadow-md border border-[#E8E2D9]">
          <div className="aspect-[16/9] w-full relative bg-[#E8E0D5]">
            <img
              src={heroImg}
              alt="The sunlit interior of The Morning Grind Cafe showing rustic oak tables, living greenery, and brass espresso bar"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Subtle contrast scrim for bottom overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 flex flex-col md:flex-row md:items-end justify-between gap-4 text-white">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#E8DCCB] mb-1">
                  Daily Sanctuary & Micro-Roastery
                </p>
                <h2 className="text-xl md:text-2xl font-serif font-semibold">
                  142 Millrace Alley · Tuesday through Sunday 7 AM – 6 PM
                </h2>
              </div>
              <div className="flex items-center gap-6 text-xs text-[#E8DCCB]">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D4B594]" />
                  <span>Historic Brick Foundry</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4B594]" />
                  <span>Dog-Friendly Heated Courtyard</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Attributes Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-b border-[#E8E2D9] pb-10">
          <div>
            <span className="block text-xs uppercase tracking-wider text-[#7C6E60] font-medium">Origin Integrity</span>
            <span className="text-lg md:text-xl font-serif font-semibold text-[#1F1914] mt-0.5 block">100% Direct Farm Trade</span>
            <p className="text-xs text-[#7C6E60] mt-1">Paying 280% above standard commodity market rates.</p>
          </div>
          <div>
            <span className="block text-xs uppercase tracking-wider text-[#7C6E60] font-medium">Roasting Philosophy</span>
            <span className="text-lg md:text-xl font-serif font-semibold text-[#1F1914] mt-0.5 block">Light-Nordic Curve</span>
            <p className="text-xs text-[#7C6E60] mt-1">Preserving origin terroir, fruit esters, and florals.</p>
          </div>
          <div>
            <span className="block text-xs uppercase tracking-wider text-[#7C6E60] font-medium">Bakehouse Standard</span>
            <span className="text-lg md:text-xl font-serif font-semibold text-[#1F1914] mt-0.5 block">72-Hour Wild Levain</span>
            <p className="text-xs text-[#7C6E60] mt-1">Slow cold fermentation with 84% butterfat Normandy butter.</p>
          </div>
          <div>
            <span className="block text-xs uppercase tracking-wider text-[#7C6E60] font-medium">The Publication</span>
            <span className="text-lg md:text-xl font-serif font-semibold text-[#1F1914] mt-0.5 block">The Grind Journal</span>
            <p className="text-xs text-[#7C6E60] mt-1">10 in-depth essays, recipes, and coffee science guides.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
