import React, { useState } from 'react';
import { Mail, Check, Sparkles } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-20 bg-[#221B16] text-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
        <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-[#BFA68A] font-medium mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Friday Roast Dispatch</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight mb-4 text-balance">
          Fresh micro-lots, home brew formulas, and invite-only cuppings.
        </h2>

        <p className="text-sm text-[#C8BEB2] max-w-xl mx-auto leading-relaxed mb-8">
          Every Friday morning at 7:00 AM, our Head of Quality Julian writes a short letter with this week’s single-origin roast profiles, filter recipes, and new articles from The Grind Journal.
        </p>

        {isSubscribed ? (
          <div className="p-4 bg-[#2E241E] border border-[#48392F] rounded-md inline-flex items-center gap-2 text-sm text-[#97CBA3]">
            <Check className="w-4 h-4 text-[#72BD85]" />
            <span>You are on the list! Watch for Friday's first dispatch at 7:00 AM.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="w-full px-4 py-2.5 text-xs rounded-sm bg-[#2D241E] border border-[#483A30] text-[#FAF8F5] placeholder-[#9E9084] focus:outline-hidden focus:border-[#C4B7A5]"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1F1914] bg-[#E8DCCB] hover:bg-[#FFFFFF] rounded-sm transition-colors whitespace-nowrap cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-[11px] text-[#8C7D6F] mt-4">
          No spam, ever. Unsubscribe with one click anytime.
        </p>
      </div>
    </section>
  );
};
