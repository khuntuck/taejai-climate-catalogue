'use client';

import React from 'react';
import { Language } from '@/types/catalogue';
import { UI_LABELS } from '@/data/catalogue';

interface FooterProps {
  lang: Language;
}

const PARTNER_LOGOS = [
  { name: 'ChangeFusion', src: '/images/logos/changefusion.png' },
  { name: 'ECCA Family Foundation', src: '/images/logos/ecca.png' },
  { name: 'Taejai.com', src: '/images/logos/taejai.png' },
  { name: 'TaiTonSai', src: '/images/logos/taitonsai.png' },
];

export default function Footer({ lang }: FooterProps) {
  const t = UI_LABELS[lang];

  return (
    <footer className="bg-white border-t border-slate-200 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-xs sm:text-sm text-slate-500 mb-6">{t.footerNote}</p>

        {/* แสดงโลโก้ไซส์เท่ากันทุกใบ */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-3xl mx-auto items-center justify-items-center">
          {PARTNER_LOGOS.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              className="w-36 sm:w-40 h-auto object-contain"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </footer>
  );
}