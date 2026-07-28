export type ProjectCategory =
  | 'kelistrikan-panel'
  | 'otomasi-kontrol'
  | 'mekanikal-presisi'
  | 'hvac-refrigerasi'
  | 'pompa-perairan'
  | 'pencahayaan-show';

export interface ProjectPhase {
  title: string;
  description: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
}

export interface ProjectVerification {
  sourceType: 'PO' | 'SPK';
  bastAvailable: boolean;
  deliveryNoteAvailable: boolean;
  bqAvailable: boolean;
  photosAvailable: boolean;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  sector: string;
  summary: string;
  challenge: string;
  phases: ProjectPhase[];
  results: string[];
  scope: string[];
  components: string[];
  icon: string;
  image: string;
  imageAlt: string;
  images?: {
    cover: string;
    gallery: ProjectImage[];
  };
  gallery: ProjectImage[];
  verification: ProjectVerification;
  featured?: boolean;
  period?: string;
  metrics?: ProjectMetric[];
}

export interface CategoryOption {
  id: 'all' | ProjectCategory;
  label: string;
}
