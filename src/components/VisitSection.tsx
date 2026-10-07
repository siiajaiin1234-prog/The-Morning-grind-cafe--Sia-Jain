import React, { useState } from 'react';
import { MapPin, Clock, Wifi, Sparkles, Bike, Check, ExternalLink } from 'lucide-react';

export const VisitSection: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const hours = [
    { day: 'Monday', time: 'Closed (Roasting & Barista Lab)', isRoastDay: true },
    { day: 'Tuesday', time: '7:00 AM – 6:00 PM', isRoastDay: false },
    { day: 'Wednesday', time: '7:00 AM – 6:00 PM', isRoastDay: false },
    { day: 'Thursday', time: '7:00 AM – 6:00 PM', isRoastDay: false },
    { day: 'Friday', time: '7:00 AM – 6:00 PM', isRoastDay: false },
    { day: 'Saturday', time: '8:00 AM – 6:00 PM', isRoastDay: false },
    { day: 'Sunday', time: '8:00 AM – 6:00 PM', isRoastDay: false },
  ];

  const todayIndex = new Date().getDay(); // 0 is Sunday, 1 is Monday...
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayName = dayNames[todayIndex];

  const copyAddress = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('142 Millrace Alley, Old Foundry District');
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2500);
    }
  };

  return (
    <section id="visit" className="py-20 md:py-28 bg-[#F4EFEB] border-b border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#7C6E60] font-medium mb-3">
            <span>Find Our Door</span>
            <span aria-hidden="true">·</span>
            <span>Neighborhood Gathering</span>
            <span aria-hidden="true">·</span>
            <span>Sanctuary & Roastery</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F1914] leading-tight">
            Hours & Location
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Hours Card */}
          <div className="lg:col-span-5 bg-white/80 p-8 rounded-lg border border-[#E2DAD0] shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-[#EAE3D9] mb-6">
              <h3 className="text-xl font-serif font-semibold text-[#1F1914] flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#8C5E3B]" />
                Operating Schedule
              </h3>
              <span className="text-xs text-[#7C6E60] uppercase tracking-wider font-semibold">
                Kitchen closes 4 PM
              </span>
            </div>

            <div className="space-y-3">
              {hours.map((item) => {
                const isToday = item.day === todayName;
                return (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between py-2 px-3 rounded-sm text-xs transition-colors ${
                      isToday
                        ? 'bg-[#FAF8F5] border border-[#D9CEBF] font-semibold text-[#1F1914]'
                        : 'text-[#5C5045]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span>{item.day}</span>
                      {isToday && (
                        <span className="text-[10px] text-[#8C5E3B] font-bold uppercase tracking-wider">
                          (Today)
                        </span>
                      )}
                    </div>
                    <span className="font-mono text-xs">{item.time}</span>
                  </div>
                );
              })}
            </div>

            <p className="text-[11px] text-[#7C6E60] mt-6 italic">
              * Mondays are dedicated to roasting green arrivals, testing water mineral balance, and team calibration cuppings.
            </p>
          </div>

          {/* Location & Guidelines Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white/80 p-8 rounded-lg border border-[#E2DAD0] shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#EAE3D9] mb-6">
                <div>
                  <h3 className="text-xl font-serif font-semibold text-[#1F1914] flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#8C5E3B]" />
                    The Foundry Building
                  </h3>
                  <p className="text-xs text-[#7C6E60] mt-0.5">
                    142 Millrace Alley, Old Foundry District
                  </p>
                </div>

                <button
                  onClick={copyAddress}
                  className="px-3 py-1.5 text-xs font-medium rounded-sm border border-[#D9CEBF] bg-[#FAF8F5] hover:bg-[#EFE9E0] text-[#2A231D] transition-colors flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
                >
                  {copiedAddress ? <Check className="w-3.5 h-3.5 text-[#3A7D44]" /> : <ExternalLink className="w-3.5 h-3.5" />}
                  <span>{copiedAddress ? 'Address Copied!' : 'Copy Address'}</span>
                </button>
              </div>

              {/* Transit & Area Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#5C5045]">
                <div className="p-3 bg-[#FAF8F5] rounded border border-[#E8E2D9]">
                  <p className="font-semibold text-[#1F1914] mb-1">Transit & Walking</p>
                  <p>3 blocks from Central Canal Light Rail Station. Follow the brick promenade south.</p>
                </div>
                <div className="p-3 bg-[#FAF8F5] rounded border border-[#E8E2D9]">
                  <p className="font-semibold text-[#1F1914] mb-1">Parking & Loading</p>
                  <p>Free 2-hour parking in the Millrace alley courtyard lot. Dedicated loading bay for pickup.</p>
                </div>
              </div>

              {/* Neighborhood Amenities */}
              <div className="mt-6 pt-6 border-t border-[#EAE3D9] grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-xs text-[#5C5045]">
                  <Wifi className="w-4 h-4 text-[#8C5E3B]" />
                  <span>Fiber Wi-Fi at wood tables</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#5C5045]">
                  <Sparkles className="w-4 h-4 text-[#8C5E3B]" />
                  <span>Dog-friendly brick patio</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#5C5045]">
                  <Bike className="w-4 h-4 text-[#8C5E3B]" />
                  <span>Indoor cycle racks</span>
                </div>
              </div>
            </div>

            {/* Note on Laptop Policy */}
            <div className="p-5 bg-white/50 rounded-lg border border-[#E2DAD0] text-xs text-[#6B5F54] leading-relaxed">
              <strong className="text-[#1F1914] block mb-1">Our Atmosphere Policy:</strong>
              Laptops and creative work are welcome in the Sunlit Hall on weekdays until 3:00 PM. On weekends, our communal tables remain laptop-free spaces to encourage reading, conversation, and slow dining.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
