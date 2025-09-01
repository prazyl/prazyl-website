import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://prazyl.com'),
  title: {
    default: 'PRĀZYL - Insurance Claims Management Software',
    template: '%s | PRĀZYL'
  },
  description: 'Streamline your insurance claims process with PRĀZYL. Professional claims management software with automated workflows and document management in a fully customizable environment.',
  keywords: ['insurance claims', 'claims management', 'insurance software', 'claims processing', 'insurance workflow', 'document management', 'claims automation'],
  authors: [{ name: 'PRĀZYL' }],
  creator: 'PRĀZYL',
  publisher: 'PRĀZYL',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://prazyl.com',
    siteName: 'PRĀZYL',
    title: 'PRĀZYL - Insurance Claims Management Software',
    description: 'Streamline your insurance claims process with automated workflows and document management in a fully customizable environment.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PRĀZYL - Insurance Claims Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PRĀZYL - Insurance Claims Management Software',
    description: 'Streamline your insurance claims process with automated workflows and document management in a fully customizable environment.',
    images: ['/og-image.png'],
    creator: '@prazyl',
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://prazyl.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 
                             (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}