'use client';

import React from 'react';
import { Category, Project, Language } from '@/types/catalogue';
import { UI_LABELS } from '@/data/catalogue';
import ProjectCard from './ProjectCard';
import { Clock } from 'lucide-react';

interface CategorySectionProps {
  category: Category;
  lang: Language;
  onReadMore: (project: Project, categoryTitle: string) => void;
}

export default function CategorySection({
  category,
  lang,
  onReadMore,
}: CategorySectionProps) {
  const t = UI_LABELS[lang];

  return (
    <section
      id={category.id}
      className="py-10 sm:py-12 border-b border-slate-200/80 last:border-b-0 scroll-mt-32"
    >
      {/* Row Header & Topic Description */}
      <div className="max-w-3xl mb-7">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#183333] tracking-tight">
            {category.title[lang]}
          </h2>
          {category.status === 'coming_soon' && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100/80 text-amber-900 border border-amber-200">
              <Clock className="w-3.5 h-3.5" />
              {t.comingSoonBadge}
            </span>
          )}
        </div>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {category.description[lang]}
        </p>
      </div>

      {/* Row Content: Coming Soon Banner OR Project Cards Grid */}
      {category.status === 'coming_soon' ? (
        <div className="w-full rounded-2xl border-2 border-dashed border-slate-300 bg-white/60 px-6 py-8 flex items-center justify-center text-center">
          <div className="flex flex-col sm:flex-row items-center gap-2.5 text-slate-500">
            <Clock className="w-5 h-5 text-slate-400 shrink-0" />
            <span className="text-sm sm:text-base font-medium">
              {t.comingSoonText}
            </span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              lang={lang}
              onReadMore={(proj) => onReadMore(proj, category.title[lang])}
            />
          ))}
        </div>
      )}
    </section>
  );
}