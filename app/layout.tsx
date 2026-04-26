import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://prazyl.com'),
  title: {
    default: 'Prazyl — Claims Management for Appraisers',
    template: '%s | Prazyl'
  },
  description: 'Claims management built for appraisers. One workspace per claim — scheduling, photos, documents, email, and invoicing in one place. Currently in private beta.',
  keywords: ['claims management', 'appraisers', 'insurance appraisers', 'claims software', 'inspection scheduling', 'appraiser software', 'symbility', 'xactimate'],
  authors: [{ name: 'Prazyl' }],
  creator: 'Prazyl',
  publisher: 'Prazyl',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://prazyl.com',
    siteName: 'Prazyl',
    title: 'Prazyl — Claims Management for Appraisers',
    description: 'Claims management built for appraisers. One workspace per claim — scheduling, photos, documents, email, and invoicing in one place.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prazyl — Claims Management for Appraisers',
    description: 'Claims management built for appraisers. One workspace per claim — scheduling, photos, documents, email, and invoicing in one place.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://prazyl.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.className} bg-[#0a0a0a]`}>
        {children}
      </body>
    </html>
  );
}
