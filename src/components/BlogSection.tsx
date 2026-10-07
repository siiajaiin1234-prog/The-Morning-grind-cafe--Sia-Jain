import React, { useState, useMemo } from 'react';
import { ARTICLES } from '../data/articles';
import { Article } from '../types/cafe';
import { Search, Clock, ArrowRight, BookOpen, Filter } from 'lucide-react';
import { ArticleModal } from './ArticleModal';

export const BlogSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const categories = [
    'All',
    'Brewing Guides',
    'Origins & Farms',
    'Roastery Notes',
    'Seasonal & Cold',
    'Bakery & Pairings',
    'Cafe Culture',
  ];

  // Filter articles based on search & category
  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchCat = selectedCategory === 'All' || article.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.subtitle.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.tags.some((t) => t.toLowerCase().includes(q)) ||
        article.author.name.toLowerCase().includes(q);

      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Featured article is the first one or the marked featured
  const featuredArticle = useMemo(() => {
    return ARTICLES.find((a) => a.featured) || ARTICLES[0];
  }, []);

  return (
    <section id="journal" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#7C6E60] font-medium mb-3">
              <span>The Publication</span>
              <span aria-hidden="true">·</span>
              <span>10 In-Depth Articles</span>
              <span aria-hidden="true">·</span>
              <span>Coffee Science & Culture</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1F1914] leading-tight">
              The Grind Journal
            </h2>
          </div>
          <p className="text-sm text-[#6B5F54] max-w-md">
            Long-form essays on fluid extraction dynamics, high-altitude harvests, sourdough fermentation chemistry, and neighborhood cafe life.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E8E2D9]">
          {/* Category Tabs */}
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

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-[#8C7D6F] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search essays, methods, beans..."
              className="w-full pl-9 pr-3 py-1.5 text-xs rounded-sm bg-white/90 border border-[#E0D7CC] text-[#2A231D] placeholder-[#9E9084] focus:outline-hidden focus:border-[#2A231D] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#8C7D6F] hover:text-[#2A231D]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Counter & Status */}
        <div className="flex items-center justify-between text-xs text-[#7C6E60] mb-8">
          <span>
            Showing {filteredArticles.length} of {ARTICLES.length} published essays
          </span>
          {selectedCategory !== 'All' && (
            <span>Filtered by: {selectedCategory}</span>
          )}
        </div>

        {/* Empty state if search returns nothing */}
        {filteredArticles.length === 0 ? (
          <div className="py-16 text-center bg-white/50 rounded-lg border border-[#E8E2D9] p-8">
            <BookOpen className="w-8 h-8 text-[#9E9084] mx-auto mb-3" />
            <p className="text-base font-serif font-semibold text-[#1F1914]">
              No articles match your query "{searchQuery}"
            </p>
            <p className="text-xs text-[#7C6E60] mt-1 mb-4">
              Try searching for "pour-over", "Colombia", "sourdough", or reset your category.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] bg-[#2A231D] rounded-sm"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {/* If no search query and 'All' category is active, highlight the Featured Lead Article */}
            {selectedCategory === 'All' && !searchQuery && (
              <div
                onClick={() => setActiveArticle(featuredArticle)}
                className="bg-white/80 rounded-lg border border-[#E2DAD0] hover:border-[#BFA892] transition-all overflow-hidden cursor-pointer shadow-xs hover:shadow-md group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto relative bg-[#E8DFD3] overflow-hidden">
                    <img
                      src={featuredArticle.coverImage}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-[#2A231D]/90 backdrop-blur-xs text-[#FAF8F5] px-2.5 py-1 text-[11px] uppercase tracking-wider font-semibold rounded-xs">
                      Featured Cover Story
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      {/* Zero-Pill Unboxed Metadata */}
                      <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-[#7C6E60] font-medium mb-3">
                        <span>{featuredArticle.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>{featuredArticle.readTime}</span>
                        <span aria-hidden="true">·</span>
                        <span>{featuredArticle.publishedDate}</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1F1914] group-hover:text-[#8C5E3B] transition-colors leading-tight mb-3">
                        {featuredArticle.title}
                      </h3>

                      <p className="text-sm text-[#5C5045] leading-relaxed mb-6">
                        {featuredArticle.excerpt}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-[#F0EBE3] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={featuredArticle.author.avatar}
                          alt={featuredArticle.author.name}
                          className="w-9 h-9 rounded-full object-cover border border-[#D9D0C3]"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <p className="text-xs font-semibold text-[#1F1914]">
                            {featuredArticle.author.name}
                          </p>
                          <p className="text-[11px] text-[#7C6E60]">
                            {featuredArticle.author.role}
                          </p>
                        </div>
                      </div>

                      <span className="text-xs font-semibold uppercase tracking-wider text-[#8C5E3B] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Read Essay <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Articles Grid (all 10 articles accessible) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles
                // If on homepage lead view, omit lead to avoid duplicate, otherwise show all matching
                .filter((art) => !(selectedCategory === 'All' && !searchQuery && art.id === featuredArticle.id))
                .map((art) => (
                  <article
                    key={art.id}
                    onClick={() => setActiveArticle(art)}
                    className="bg-white/80 rounded-md border border-[#E6E0D6] hover:border-[#C4B7A5] transition-all flex flex-col justify-between overflow-hidden cursor-pointer group shadow-2xs hover:shadow-xs"
                  >
                    <div>
                      {/* Article Image */}
                      <div className="aspect-[4/3] w-full bg-[#E5DDCF] overflow-hidden relative">
                        <img
                          src={art.coverImage}
                          alt={art.title}
                          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      <div className="p-6">
                        {/* Zero-Pill Unboxed Metadata */}
                        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-[#7C6E60] font-medium mb-2.5">
                          <span>{art.category}</span>
                          <span aria-hidden="true">·</span>
                          <span>{art.readTime}</span>
                        </div>

                        <h3 className="text-xl font-serif font-bold text-[#1F1914] group-hover:text-[#8C5E3B] transition-colors leading-snug mb-2 line-clamp-2">
                          {art.title}
                        </h3>

                        <p className="text-xs text-[#5C5045] leading-relaxed line-clamp-3 mb-4">
                          {art.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Footer Byline */}
                    <div className="px-6 pb-6 pt-3 border-t border-[#F4EFEB] flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={art.author.avatar}
                          alt={art.author.name}
                          className="w-7 h-7 rounded-full object-cover border border-[#D9D0C3]"
                          referrerPolicy="no-referrer"
                        />
                        <span className="font-medium text-[#2A231D]">{art.author.name}</span>
                      </div>

                      <span className="text-[#8C5E3B] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Read →
                      </span>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        )}
      </div>

      {/* Reader Modal */}
      <ArticleModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
        onSelectArticle={(article) => setActiveArticle(article)}
        allArticles={ARTICLES}
      />
    </section>
  );
};
