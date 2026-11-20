'use client';

import React from 'react';
import { Language } from '@/types/catalogue';
import { UI_LABELS } from '@/data/catalogue';
import { Sprout } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onToggleLang: (lang: Language) => void;
}

export default function Navbar({ lang, onToggleLang }: NavbarProps) {
  const t = UI_LABELS[lang];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#183333]/95 backdrop-blur-md text-white border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-[#3B7A57] flex items-center justify-center text-white shadow-sm group-hover:bg-[#468f66] transition-colors">
            <Sprout className="w-4 h-4" />
          </div>
          <span className="font-bold tracking-wide text-sm sm:text-base">
            {t.siteTitle}
          </span>
        </a>

        {/* Language Toggle Pill */}
        <div
          className="inline-flex items-center bg-white/10 p-1 rounded-full border border-white/15"
          role="group"
          aria-label="Language Switcher"
        >
          <button
            type="button"
            onClick={() => onToggleLang('th')}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              lang === 'th'
                ? 'bg-white text-[#183333] shadow-sm'
                : 'text-white/80 hover:text-white'
            }`}
          >
            TH
          </button>
          <button
            type="button"
            onClick={() => onToggleLang('en')}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              lang === 'en'
                ? 'bg-white text-[#183333] shadow-sm'
                : 'text-white/80 hover:text-white'
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}