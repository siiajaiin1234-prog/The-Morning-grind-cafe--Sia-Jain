import React from 'react';
import roastingImg from '../assets/images/roasting_coffee_beans_1791399946536.jpg';
import baristaImg from '../assets/images/barista_pour_over_brew_1791399918754.jpg';

export const Story: React.FC = () => {
  return (
    <section id="story" className="py-20 md:py-28 bg-[#F4EFEB] border-b border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#7C6E60] font-medium mb-3">
            <span>Our Foundation</span>
            <span aria-hidden="true">·</span>
            <span>Est. 2018</span>
            <span aria-hidden="true">·</span>
            <span>Old Foundry</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F1914] leading-tight">
            We built a gathering house for people who cherish the details.
          </h2>
        </div>

        {/* 2-Column Split: Story & Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          <div className="lg:col-span-6 space-y-6 text-[#52473D] leading-relaxed text-base">
            <p>
              In 2018, we discovered an abandoned 19th-century copper stamping foundry nestled at the end of Millrace Alley. The floor was rough brick, morning sunlight poured through 14-foot steel-frame windows, and the air held the memory of honest manual work.
            </p>
            <p>
              We installed a restored 15kg cast-iron drum roaster right in the center of the room. We resolved that coffee should never be hidden behind confusing jargon or sterilized corporate counters. Instead, we made the entire process transparent: from green burlap sacks arriving from Huila and Yirgacheffe, to the gentle tick of First Crack, to the porcelain cup on your saucer.
            </p>
            <blockquote className="border-l-2 border-[#A88B70] pl-5 italic text-[#2A231D] font-serif text-xl my-6">
              "We believe a neighborhood cafe is not merely a transaction for caffeine—it is the town square of ideas, morning reunions, and quiet restoration."
            </blockquote>
            <p>
              Alongside our roaster, our bakery team arrives at 3:30 AM to mix wild sourdough levain and roll cultured butter sheets. We believe if you are going to serve coffee crafted with such discipline, the bread on the plate beside it must share that same standard of devotion at The Morning Grind.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden border border-[#DED7CE] shadow-xs">
              <div className="aspect-[4/3] bg-[#E2D8CC] relative">
                <img
                  src={roastingImg}
                  alt="Freshly roasted specialty coffee beans cooling in the stainless steel tray"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 bg-white/60">
                <p className="text-xs font-semibold text-[#1F1914]">Small Batch Roasting</p>
                <p className="text-xs text-[#73665A] mt-0.5">15kg cast-iron drum curves monitored to 0.1°C precision.</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden border border-[#DED7CE] shadow-xs mt-0 sm:mt-8">
              <div className="aspect-[4/3] bg-[#E2D8CC] relative">
                <img
                  src={baristaImg}
                  alt="Barista pouring a calibrated V60 pour over"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 bg-white/60">
                <p className="text-xs font-semibold text-[#1F1914]">The Pour-Over Bar</p>
                <p className="text-xs text-[#73665A] mt-0.5">Mineral-adjusted brewing water matched to bean solubility.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-[#DED7CE]">
          <div className="bg-white/40 p-6 rounded-md border border-[#E4DDD4]">
            <span className="text-xs font-mono text-[#8C7662]">01</span>
            <h3 className="text-xl font-serif font-bold text-[#1F1914] mt-2 mb-2">Direct Relationship Sourcing</h3>
            <p className="text-sm text-[#5E5246] leading-relaxed">
              We travel to origin annually, shaking hands with the producers who tend the trees. We sign multi-year purchase guarantees so farmers can invest in regenerative soil health.
            </p>
          </div>
          <div className="bg-white/40 p-6 rounded-md border border-[#E4DDD4]">
            <span className="text-xs font-mono text-[#8C7662]">02</span>
            <h3 className="text-xl font-serif font-bold text-[#1F1914] mt-2 mb-2">72-Hour Wild Sourdough</h3>
            <p className="text-sm text-[#5E5246] leading-relaxed">
              No commercial chemical yeast accelerators. Our viennoiserie and bread rely solely on wild yeast ferments, high-extraction stoneground grains, and organic dairy.
            </p>
          </div>
          <div className="bg-white/40 p-6 rounded-md border border-[#E4DDD4]">
            <span className="text-xs font-mono text-[#8C7662]">03</span>
            <h3 className="text-xl font-serif font-bold text-[#1F1914] mt-2 mb-2">The Open Table Tradition</h3>
            <p className="text-sm text-[#5E5246] leading-relaxed">
              Long communal oak tables designed to spark conversations between neighbors, writers, architects, and visitors. Everyone is welcome in our warm sanctuary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
