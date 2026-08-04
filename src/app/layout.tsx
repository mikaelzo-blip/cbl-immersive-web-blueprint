import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsapp } from '@/components/ui/FloatingWhatsapp';
import { BackToTop } from '@/components/ui/BackToTop';
import { companyInfo } from '@/data/company';
import { serializeJsonLd } from '@/lib/json-ld';

export const metadata: Metadata = {
  metadataBase: new URL(companyInfo.seo.siteUrl),
  title: {
    default: companyInfo.seo.defaultTitle,
    template: `%s | ${companyInfo.shortName}`,
  },
  description: companyInfo.seo.defaultDescription,
  authors: [{ name: companyInfo.legalName }],
  creator: companyInfo.legalName,
  publisher: companyInfo.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: companyInfo.seo.siteUrl,
    title: companyInfo.seo.defaultTitle,
    description: companyInfo.seo.defaultDescription,
    siteName: companyInfo.legalName,
    images: [{ url: companyInfo.seo.ogImage, width: 1200, height: 630, alt: companyInfo.legalName }],
  },
  twitter: {
    card: 'summary_large_image',
    title: companyInfo.seo.defaultTitle,
    description: companyInfo.seo.defaultDescription,
    images: [companyInfo.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logo/cbl-logo.png',
    apple: '/logo/cbl-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${companyInfo.seo.siteUrl}/#organization`,
    name: companyInfo.legalName,
    alternateName: companyInfo.shortName,
    url: companyInfo.seo.siteUrl,
    logo: `${companyInfo.seo.siteUrl}/logo/cbl-logo.png`,
    email: companyInfo.email,
    telephone: companyInfo.phoneRaw,
    address: {
      '@type': 'PostalAddress',
      ...companyInfo.addressParts,
    },
  };

  return (
    <html lang="id" className="font-sans">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen antialiased selection:bg-[#0E6BA8] selection:text-white">
        <a href="#main-content" className="skip-link">
          Langsung ke konten utama
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsapp />
        <BackToTop />
      </body>
    </html>
  );
}
