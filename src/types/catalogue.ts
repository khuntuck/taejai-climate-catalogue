export type Language = 'en' | 'th';

export interface LocalizedText {
  en: string;
  th: string;
}

export interface Project {
  id: string;
  title: LocalizedText;
  organization: LocalizedText;
  location: LocalizedText;
  shortDescription: LocalizedText;
  fullDescription: LocalizedText;
  elNinoRelevance: LocalizedText;
  imageUrl: string;
  taejaiUrl: string;
}

export interface Category {
  id: string;
  number: string;
  shortLabel: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  status: 'active' | 'coming_soon';
  projects: Project[];
}