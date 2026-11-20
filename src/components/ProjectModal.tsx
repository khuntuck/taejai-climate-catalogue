'use client';

import React, { useEffect } from 'react';
import { Project, Language } from '@/types/catalogue';
import { UI_LABELS } from '@/data/catalogue';
import { X, MapPin, ThermometerSun, ArrowUpRight } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  categoryTitle: string;
  lang: Language;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  categoryTitle,
  lang,
  onClose,
}: ProjectModalProps) {
  const t = UI_LABELS[lang];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image + Close Button */}
        <div className="relative aspect-video w-full bg-slate-100 shrink-0">
          <img
            src={project.imageUrl}
            alt={project.title[lang]}
            className="w-full h-full object-cover"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label={t.modalClose}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center shadow-md transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#3B7A57] mb-1.5">
              {categoryTitle}
            </p>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#183333] leading-snug">
              {project.title[lang]}
            </h3>
            <div className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
              <MapPin className="w-4 h-4 text-[#3B7A57]" />
              <span>
                {project.organization[lang]} · {project.location[lang]}
              </span>
            </div>
          </div>

          {/* Full Project Overview */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-slate-800 mb-2">
              {t.modalOverview}
            </h4>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {project.fullDescription[lang]}
            </p>
          </div>

          {/* Super El Niño Relevance Highlight Box */}
          <div className="rounded-xl bg-[#F8F9FA] border border-slate-200 p-4 sm:p-5">
            <div className="flex items-center gap-2 text-sm font-bold text-[#183333] mb-2">
              <ThermometerSun className="w-4 h-4 text-[#C85A32]" />
              <span>{t.modalElNino}</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              {project.elNinoRelevance[lang]}
            </p>
          </div>

          {/* Modal Footer Actions */}
          <div className="pt-2 flex flex-col-reverse sm:flex-row items-center justify-end gap-3 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              {t.modalClose}
            </button>
            <a
              href={project.taejaiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#3B7A57] hover:bg-[#2f6346] text-white font-semibold text-sm px-6 py-2.5 rounded-xl transition-colors shadow-sm"
            >
              <span>{t.modalDonate}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}