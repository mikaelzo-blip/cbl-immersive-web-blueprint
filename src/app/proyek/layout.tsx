import type { Metadata } from 'next';
import { companyInfo } from '@/data/company';

export const metadata: Metadata = {
  title: 'Portofolio Pekerjaan',
  description: 'Portofolio pekerjaan teknis CBL yang disusun dari arsip internal dan ditampilkan tanpa data transaksi sensitif.',
  alternates: {
    canonical: `${companyInfo.seo.siteUrl}/proyek`,
  },
};

export default function PortfolioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
