import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsapp } from '@/components/ui/FloatingWhatsapp';
import { BackToTop } from '@/components/ui/BackToTop';
import { companyInfo } from '@/data/company';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(companyInfo.seo.siteUrl),
  title: {
    default: companyInfo.seo.defaultTitle,
    template: `%s | ${companyInfo.shortName}`,
  },
  description: companyInfo.seo.defaultDescription,
  keywords: [
    'CV Cakrawala Buana Lestari',
    'CBL',
    'jasa teknik industri',
    'panel listrik Jakarta',
    'otomasi PLC HMI',
    'mekanikal presisi',
    'HVAC VRF chiller',
    'sistem pompa booster',
    'pencahayaan wahana air',
    'teknisi kelistrikan 24 jam',
  ],
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
  },
  twitter: {
    card: 'summary_large_image',
    title: companyInfo.seo.defaultTitle,
    description: companyInfo.seo.defaultDescription,
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
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${companyInfo.seo.siteUrl}/#organization`,
        name: companyInfo.legalName,
        alternateName: companyInfo.shortName,
        url: companyInfo.seo.siteUrl,
        email: companyInfo.email,
        telephone: companyInfo.phoneRaw,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Jl Papanggo 2C No. 38, Kel. Papanggo, Kec. Tanjung Priok',
          addressLocality: 'Jakarta Utara',
          postalCode: '14340',
          addressCountry: 'ID',
        },
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${companyInfo.seo.siteUrl}/#localbusiness`,
        name: companyInfo.legalName,
        telephone: companyInfo.phoneRaw,
        email: companyInfo.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Jl Papanggo 2C No. 38, Kel. Papanggo, Kec. Tanjung Priok',
          addressLocality: 'Jakarta Utara',
          postalCode: '14340',
          addressCountry: 'ID',
        },
        openingHours: 'Mo-Su 00:00-24:00',
        priceRange: '$$',
      },
    ],
  };

  return (
    <html lang="id" className={`${inter.variable} font-sans`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
