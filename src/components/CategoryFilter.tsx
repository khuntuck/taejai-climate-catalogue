'use client';

import React from 'react';
import { Category, Language } from '@/types/catalogue';
import { UI_LABELS } from '@/data/catalogue';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategoryId: string;
  lang: Language;
  onSelectCategory: (id: string) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategoryId,
  lang,
  onSelectCategory,
}: CategoryFilterProps) {
  const t = UI_LABELS[lang];

  return (
    <nav
      aria-label="Category Filter"
      className="sticky top-16 z-30 bg-[#F8F9FA]/95 backdrop-blur-md border-b border-slate-200/80 py-3.5"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0 sm:flex-wrap">
          <button
            type="button"
            onClick={() => onSelectCategory('all')}
            className={`shrink-0 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              selectedCategoryId === 'all'
                ? 'bg-[#183333] text-white shadow-sm'
                : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
            }`}
          >
            {t.filterAll}
          </button>

          {categories.map((cat) => {
            const isSelected = selectedCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#3B7A57] text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <span>{cat.shortLabel[lang]}</span>
                {cat.status === 'coming_soon' && (
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isSelected ? 'bg-amber-200' : 'bg-amber-500'
                    }`}
                    title="Coming Soon"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}