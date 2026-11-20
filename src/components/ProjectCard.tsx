'use client';

import React from 'react';
import { Project, Language } from '@/types/catalogue';
import { UI_LABELS } from '@/data/catalogue';
import { MapPin, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  lang: Language;
  onReadMore: (project: Project) => void;
}

export default function ProjectCard({ project, lang, onReadMore }: ProjectCardProps) {
  const t = UI_LABELS[lang];

  return (
    <article className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col overflow-hidden">
      {/* Thumbnail Image */}
      <div className="relative aspect-video w-full bg-slate-100 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title[lang]}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        {/* Organization & Location */}
        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 mb-2">
          <MapPin className="w-3.5 h-3.5 text-[#3B7A57] shrink-0" />
          <span className="truncate">
            {project.organization[lang]} · {project.location[lang]}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-lg font-bold text-[#183333] leading-snug mb-2.5">
          {project.title[lang]}
        </h3>

        {/* Short Summary + Inline "Read more →" Text Link */}
        <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
          {project.shortDescription[lang]}{' '}
          <button
            type="button"
            onClick={() => onReadMore(project)}
            className="inline-flex items-center font-semibold text-[#183333] underline decoration-[#3B7A57]/60 underline-offset-4 hover:text-[#3B7A57] transition-colors cursor-pointer ml-1"
          >
            {t.readMore}
          </button>
        </p>

        {/* Primary Action Button Outside (Direct to Taejai.com) */}
        <div className="pt-2 mt-auto">
          <a
            href={project.taejaiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#3B7A57] hover:bg-[#2f6346] text-white font-semibold text-sm py-2.5 px-4 rounded-xl transition-colors shadow-xs"
          >
            <span>{t.donate}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </article>
  );
}