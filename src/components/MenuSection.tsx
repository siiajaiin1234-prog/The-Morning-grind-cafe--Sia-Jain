import React, { useState, useMemo } from 'react';
import { MENU_ITEMS } from '../data/menu';
import { MenuItem } from '../types/cafe';
import { Sparkles, Heart, Coffee } from 'lucide-react';

interface MenuSectionProps {
  onOpenReservation: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenReservation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [onlyFavorites, setOnlyFavorites] = useState<boolean>(false);

  const categories = ['All', 'Espresso Bar', 'Filter & Pour Over', 'Seasonal & Cold', 'Artisan Bakery', 'Brunch & Plates'];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchFavorites = !onlyFavorites || item.isHouseFavorite;
      return matchCategory && matchFavorites;
    });
  }, [selectedCategory, onlyFavorites]);

  return (
    <section id="menu" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#7C6E60] font-medium mb-3">
              <span>Seasonal Offerings</span>
              <span aria-hidden="true">·</span>
              <span>Updated Autumn 2026</span>
              <span aria-hidden="true">·</span>
              <span>Handcrafted Daily</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F1914] leading-tight">
              The Daily Mill Board
            </h2>
          </div>
          <p className="text-sm text-[#6B5F54] max-w-md">
            All espresso pulled as double shots. Oat, almond, and whole organic dairy available at no surcharge.
          </p>
        </div>

        {/* Filter Controls (Segmented clean buttons) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E8E2D9]">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-sm transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#2A231D] text-[#FAF8F5]'
                    : 'bg-white/80 text-[#594E44] hover:bg-[#EFE9E0] border border-[#E0D7CC]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setOnlyFavorites(!onlyFavorites)}
              className={`px-3 py-1.5 text-xs font-medium rounded-sm border transition-colors flex items-center gap-1.5 cursor-pointer ${
                onlyFavorites
                  ? 'bg-[#B05D3B] text-white border-[#B05D3B]'
                  : 'bg-white text-[#594E44] border-[#E0D7CC] hover:bg-[#F2ECE3]'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${onlyFavorites ? 'fill-white' : ''}`} />
              <span>House Favorites Only</span>
            </button>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white/80 p-6 rounded-md border border-[#E6E0D6] hover:border-[#C4B7A5] transition-all flex flex-col justify-between group shadow-2xs hover:shadow-xs"
            >
              <div>
                {/* Top line: Name & Price */}
                <div className="flex items-baseline justify-between gap-3 mb-2">
                  <h3 className="text-lg font-serif font-semibold text-[#1F1914] group-hover:text-[#8C5E3B] transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-mono text-base font-semibold text-[#2A231D] tabular-nums shrink-0">
                    {item.price}
                  </span>
                </div>

                {/* Subtitle / Origin / Meta */}
                {item.origin && (
                  <p className="text-xs text-[#8C6D4F] font-medium mb-2">
                    Origin: {item.origin}
                  </p>
                )}

                <p className="text-sm text-[#5C5045] leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Bottom Details: Tasting Notes & Dietary (Zero-Pill discipline) */}
              <div className="pt-3 border-t border-[#F2ECE3] flex flex-col gap-2">
                {item.tastingNotes && item.tastingNotes.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#7A6B5C]">
                    <span className="italic">Notes:</span>
                    {item.tastingNotes.map((note, idx) => (
                      <React.Fragment key={note}>
                        <span>{note}</span>
                        {idx < item.tastingNotes!.length - 1 && <span aria-hidden="true">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between text-xs text-[#8A7D70] pt-1">
                  <div className="flex items-center gap-2">
                    {item.dietary && item.dietary.map((d) => (
                      <span key={d} className="font-medium text-[#467852]">{d}</span>
                    ))}
                    {item.isSeasonal && (
                      <span className="text-[#B05D3B] font-medium flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Seasonal
                      </span>
                    )}
                  </div>
                  {item.isHouseFavorite && (
                    <span className="text-[#8C5E3B] font-medium text-xs">
                      ★ House Pick
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Menu Notice */}
        <div className="mt-12 p-6 bg-[#F4EFEB] rounded-md border border-[#E4DDD4] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-[#1F1914]">
              Planning a morning brunch or group gathering?
            </p>
            <p className="text-xs text-[#6E6359] mt-0.5">
              We take table reservations for parties of 4 to 12 guests with family-style pastry platters and Chemex service.
            </p>
          </div>
          <button
            onClick={onOpenReservation}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] bg-[#2A231D] hover:bg-[#43382F] rounded-sm transition-colors whitespace-nowrap"
          >
            Reserve Table
          </button>
        </div>
      </div>
    </section>
  );
};
