export interface CompanyInfo {
  legalName: string;
  shortName: string;
  address: string;
  addressParts: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  phone: string;
  phoneRaw: string;
  whatsappNumber: string;
  whatsappFormatted: string;
  email: string;
  serviceHours: string;
  seo: {
    siteUrl: string;
    defaultTitle: string;
    defaultDescription: string;
    ogImage: string;
  };
}

export interface CapabilityDetail {
  label: string;
  description: string;
}

export interface ServiceDivision {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string;
  capabilities: string[];
  capabilityDetails: CapabilityDetail[];
  commonConditions: string[];
}

export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface WorkProcessStep {
  stepNumber: number;
  title: string;
  description: string;
  details: string[];
}

export interface BrandItem {
  id: string;
  name: string;
  category: string;
  logoText: string;
  logoPath?: string;
  logoWidth?: number;
  logoHeight?: number;
  logoScale?: number;
  logoXOffset?: number;
  logoYOffset?: number;
}

export interface WhyUsPoint {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}
