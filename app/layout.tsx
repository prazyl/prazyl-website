import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://prazyl.com'),
  title: {
    default: 'PRAZYL - Claims Management for Independent Appraisers',
    template: '%s | PRAZYL'
  },
  description: 'The modern claims management platform built for independent appraisers. Manage claims, schedule inspections, and sync with Google — all in one place.',
  keywords: ['claims management', 'independent appraisers', 'insurance appraisers', 'claims software', 'inspection scheduling', 'google calendar sync', 'gmail integration'],
  authors: [{ name: 'PRAZYL' }],
  creator: 'PRAZYL',
  publisher: 'PRAZYL',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://prazyl.com',
    siteName: 'PRAZYL',
    title: 'PRAZYL - Claims Management for Independent Appraisers',
    description: 'The modern claims management platform built for independent appraisers. Manage claims, schedule inspections, and sync with Google.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PRAZYL - Claims Management for Independent Appraisers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PRAZYL - Claims Management for Independent Appraisers',
    description: 'The modern claims management platform built for independent appraisers. Manage claims, schedule inspections, and sync with Google.',
    images: ['/og-image.png'],
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
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
