'use client';

import React from 'react';
import { Language } from '@/types/catalogue';
import { UI_LABELS } from '@/data/catalogue';
import { Sun, Droplets, Wind } from 'lucide-react';

interface HeroSectionProps {
  lang: Language;
}

export default function HeroSection({ lang }: HeroSectionProps) {
  const t = UI_LABELS[lang];

  return (
    <section className="relative bg-[#183333] text-white overflow-hidden">
      {/* Split Background Effect (Drought Amber Left / Wildfire Ember Right) */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="w-full h-full opacity-45"
          style={{
            background:
              'linear-gradient(105deg, #5c3a21 0%, #3d2c1e 35%, #183333 52%, #4a2518 78%, #7a2e16 100%)',
          }}
        />
        {/* หากมีรูป hero-banner.jpg จริง สามารถเปิดใช้งาน tag <img> ด้านล่างนี้ได้เลย */}
        {/* <img src="/images/hero/hero-banner.jpg" alt="" className="w-full h-full object-cover opacity-35 mix-blend-overlay" /> */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#183333]/60 via-[#183333]/50 to-[#183333]/90" />
      </div>

      {/* Hero Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 pt-14 pb-24 sm:pt-20 sm:pb-28 text-center">
        <p className="inline-block text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase text-amber-200/90 mb-3">
          {t.heroBadge}
        </p>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-sm">
          {t.heroTitle}
        </h1>

        <p className="mt-2 text-lg sm:text-2xl font-bold tracking-wider text-emerald-200">
          {t.heroSubtitle}
        </p>

        {/* 3 Key Pillars matching the poster */}
        <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider">
            <Sun className="w-4 h-4 text-amber-300" />
            <span>{t.pillars.heat}</span>
          </div>
          <span className="hidden sm:inline text-white/30">|</span>
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider">
            <Droplets className="w-4 h-4 text-sky-300" />
            <span>{t.pillars.drought}</span>
          </div>
          <span className="hidden sm:inline text-white/30">|</span>
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider">
            <Wind className="w-4 h-4 text-orange-300" />
            <span>{t.pillars.pm25}</span>
          </div>
        </div>

        {/* <p className="mt-7 max-w-2xl mx-auto text-sm sm:text-base text-slate-200 leading-relaxed">
          {t.heroTagline}
        </p> */}
      </div>

      {/* Curved Wave Divider into Light Gray #F8F9FA */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-14 preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M0 35C320 75 560 0 920 25C1180 43 1340 55 1440 40V70H0V35Z"
            fill="#F8F9FA"
          />
        </svg>
      </div>
    </section>
  );
}