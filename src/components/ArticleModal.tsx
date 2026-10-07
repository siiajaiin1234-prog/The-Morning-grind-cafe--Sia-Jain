import React, { useState, useEffect } from 'react';
import { Article } from '../types/cafe';
import { X, Clock, Calendar, Share2, Check, ArrowLeft, ArrowRight, BookOpen, Bookmark } from 'lucide-react';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
  onSelectArticle: (article: Article) => void;
  allArticles: Article[];
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onSelectArticle,
  allArticles,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [fontSizeMultiplier, setFontSizeMultiplier] = useState<'normal' | 'large' | 'larger'>('normal');
  const [copiedLink, setCopiedLink] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    if (!article) return;

    // Handle ESC key to close
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    // Prevent body background scroll
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [article, onClose]);

  // Track scroll progress inside modal
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const progress = (target.scrollTop / (target.scrollHeight - target.clientHeight)) * 100;
    setScrollProgress(Math.min(100, Math.max(0, progress)));
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  if (!article) return null;

  // Find related articles (same category or next)
  const relatedArticles = allArticles
    .filter((a) => a.id !== article.id)
    .slice(0, 2);

  const getFontSizeClass = () => {
    switch (fontSizeMultiplier) {
      case 'large':
        return 'text-lg leading-relaxed';
      case 'larger':
        return 'text-xl leading-loose';
      default:
        return 'text-base leading-relaxed';
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-2 sm:p-4 md:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FAF8F5] text-[#221F1B] w-full max-w-4xl max-h-[92vh] rounded-lg shadow-2xl flex flex-col overflow-hidden border border-[#DED7CE]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Reading Progress Bar */}
        <div className="h-1 bg-[#E8E2D9] w-full relative">
          <div
            className="h-full bg-[#8C5E3B] transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Modal Header Actions Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-[#E8E2D9] bg-[#FAF8F5]/90 backdrop-blur-xs shrink-0">
          <div className="flex items-center gap-2 text-xs text-[#7C6E60]">
            <span className="font-semibold text-[#1F1914]">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Font size switcher */}
            <div className="flex items-center border border-[#E0D7CC] rounded-sm bg-white/70 text-xs">
              <button
                onClick={() => setFontSizeMultiplier('normal')}
                className={`px-2 py-1 ${fontSizeMultiplier === 'normal' ? 'bg-[#2A231D] text-white' : 'text-[#5E5246] hover:bg-[#EFE9E0]'}`}
                title="Normal text size"
              >
                A
              </button>
              <button
                onClick={() => setFontSizeMultiplier('large')}
                className={`px-2 py-1 ${fontSizeMultiplier === 'large' ? 'bg-[#2A231D] text-white' : 'text-[#5E5246] hover:bg-[#EFE9E0]'}`}
                title="Larger text size"
              >
                A+
              </button>
            </div>

            {/* Bookmark button */}
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className="p-1.5 rounded-sm hover:bg-[#EFEAE2] text-[#5E5246] transition-colors"
              title="Bookmark article"
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-[#8C5E3B] text-[#8C5E3B]' : ''}`} />
            </button>

            {/* Share button */}
            <button
              onClick={handleShare}
              className="p-1.5 rounded-sm hover:bg-[#EFEAE2] text-[#5E5246] transition-colors flex items-center gap-1 text-xs"
              title="Copy share link"
            >
              {copiedLink ? <Check className="w-4 h-4 text-[#3A7D44]" /> : <Share2 className="w-4 h-4" />}
              {copiedLink && <span className="text-[#3A7D44]">Copied</span>}
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-sm hover:bg-[#EFEAE2] text-[#2A231D] transition-colors ml-2"
              aria-label="Close article modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Article Body */}
        <div
          onScroll={handleScroll}
          className="overflow-y-auto px-6 sm:px-10 md:px-14 py-8 space-y-8"
        >
          {/* Article Header */}
          <div className="space-y-4">
            {/* Zero-Pill Metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-[#7C6E60] font-medium">
              <span>{article.category}</span>
              <span aria-hidden="true">·</span>
              <span>Published {article.publishedDate}</span>
              <span aria-hidden="true">·</span>
              <span>{article.readTime}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1F1914] leading-[1.15] text-balance">
              {article.title}
            </h1>

            <p className="text-lg md:text-xl text-[#52473D] font-serif italic leading-relaxed">
              {article.subtitle}
            </p>

            {/* Author Byline Card */}
            <div className="flex items-center gap-3.5 pt-4 border-t border-[#E8E2D9]">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-11 h-11 rounded-full object-cover border border-[#D9D0C3]"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="text-sm font-semibold text-[#1F1914]">{article.author.name}</p>
                <p className="text-xs text-[#7C6E60]">{article.author.role}</p>
              </div>
            </div>
          </div>

          {/* Featured Article Image */}
          <div className="rounded-md overflow-hidden border border-[#E0D7CC] shadow-xs">
            <div className="aspect-[16/9] w-full bg-[#E5DDCF] relative">
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {article.imageCaption && (
              <div className="p-3 bg-white/70 text-xs text-[#7C6E60] italic border-t border-[#EAE3D9]">
                {article.imageCaption}
              </div>
            )}
          </div>

          {/* Excerpt Lead */}
          <div className="p-5 bg-[#F4EFEB] rounded-md border-l-4 border-[#8C5E3B] text-base text-[#3E342B] font-medium leading-relaxed">
            {article.excerpt}
          </div>

          {/* In-depth Sections */}
          <div className="space-y-10">
            {article.sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                {section.heading && (
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1F1914] pt-2">
                    {section.heading}
                  </h2>
                )}

                <div className={`space-y-4 text-[#3E352C] ${getFontSizeClass()}`}>
                  {section.body.map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </div>

                {section.quote && (
                  <div className="my-6 p-6 bg-white/80 rounded-md border border-[#E8E2D9] relative">
                    <p className="font-serif italic text-xl md:text-2xl text-[#2A231D] leading-snug">
                      "{section.quote}"
                    </p>
                  </div>
                )}

                {section.specs && (
                  <div className="my-6 bg-[#F4EFEB] p-5 rounded-md border border-[#E2DAD0]">
                    <h3 className="text-xs uppercase tracking-wider text-[#7C6E60] font-semibold mb-3">
                      Extraction & Calibration Parameters
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      {section.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="p-2.5 bg-white rounded border border-[#E8E2D9]">
                          <span className="block text-[#7C6E60]">{spec.label}</span>
                          <span className="font-semibold text-[#1F1914] text-sm font-mono mt-0.5 block">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Tags (Zero-Pill: Clean unboxed inline list) */}
          <div className="pt-8 border-t border-[#E8E2D9] flex flex-wrap items-center gap-2 text-xs text-[#7C6E60]">
            <span className="font-semibold text-[#1F1914]">Topic Index:</span>
            {article.tags.map((tag, idx) => (
              <React.Fragment key={tag}>
                <span>#{tag}</span>
                {idx < article.tags.length - 1 && <span aria-hidden="true">·</span>}
              </React.Fragment>
            ))}
          </div>

          {/* Author Box */}
          <div className="p-6 bg-white/80 rounded-md border border-[#E8E2D9] flex flex-col sm:flex-row items-center gap-4">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-16 h-16 rounded-full object-cover border border-[#D9D0C3] shrink-0"
              referrerPolicy="no-referrer"
            />
            <div className="text-center sm:text-left">
              <p className="font-serif font-bold text-lg text-[#1F1914]">{article.author.name}</p>
              <p className="text-xs text-[#8C6D4F] mb-1.5">{article.author.role}</p>
              <p className="text-xs text-[#635548] leading-relaxed">
                Writing regularly for The Grind Journal on agricultural economics, extraction physics, and hospitality ethics. Based at our roastery bar.
              </p>
            </div>
          </div>

          {/* Related Articles Footer */}
          <div className="pt-8 border-t border-[#E8E2D9]">
            <h3 className="text-lg font-serif font-bold text-[#1F1914] mb-4">
              Continue Reading The Grind Journal
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectArticle(rel)}
                  className="p-4 bg-white/70 hover:bg-white rounded-md border border-[#E8E2D9] cursor-pointer transition-all hover:border-[#8C5E3B] group"
                >
                  <p className="text-xs text-[#7C6E60] mb-1">{rel.category} · {rel.readTime}</p>
                  <h4 className="font-serif font-semibold text-base text-[#1F1914] group-hover:text-[#8C5E3B] transition-colors line-clamp-2">
                    {rel.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
