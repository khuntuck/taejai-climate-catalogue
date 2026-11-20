'use client';

import React, { useState } from 'react';
import { Language, Project } from '@/types/catalogue';
import { CATALOGUE_CATEGORIES } from '@/data/catalogue';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CategoryFilter from '@/components/CategoryFilter';
import CategorySection from '@/components/CategorySection';
import ProjectModal from '@/components/ProjectModal';
import Footer from '@/components/Footer';

export default function CataloguePage() {
  const [lang, setLang] = useState<Language>('en');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('all');
  const [activeModal, setActiveModal] = useState<{
    project: Project;
    categoryTitle: string;
  } | null>(null);

  const visibleCategories =
    selectedCategoryId === 'all'
      ? CATALOGUE_CATEGORIES
      : CATALOGUE_CATEGORIES.filter((cat) => cat.id === selectedCategoryId);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA]">
      <Navbar lang={lang} onToggleLang={setLang} />

      <HeroSection lang={lang} />

      <CategoryFilter
        categories={CATALOGUE_CATEGORIES}
        selectedCategoryId={selectedCategoryId}
        lang={lang}
        onSelectCategory={setSelectedCategoryId}
      />

      {/* Main Content: 1 Category = 1 Full-Width Row */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-4 sm:py-6">
        {visibleCategories.map((category) => (
          <CategorySection
            key={category.id}
            category={category}
            lang={lang}
            onReadMore={(project, categoryTitle) =>
              setActiveModal({ project, categoryTitle })
            }
          />
        ))}
      </main>

      <Footer lang={lang} />

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModal?.project ?? null}
        categoryTitle={activeModal?.categoryTitle ?? ''}
        lang={lang}
        onClose={() => setActiveModal(null)}
      />
    </div>
  );
}