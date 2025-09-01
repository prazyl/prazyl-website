import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
// import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "PRĀZYL",
  "applicationCategory": "BusinessApplication",
  "description": "Professional insurance claims management software with automated workflows and document management in a fully customizable environment.",
  "url": "https://prazyl.com",
  "downloadUrl": "https://prazyl.app",
  "operatingSystem": "Web Browser",
  "offers": [
    {
      "@type": "Offer",
      "name": "Starter Plan",
      "price": "99",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "99",
        "priceCurrency": "USD",
        "unitText": "MONTH"
      }
    },
    {
      "@type": "Offer",
      "name": "Professional Plan",
      "price": "149",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "149",
        "priceCurrency": "USD",
        "unitText": "MONTH"
      }
    },
    {
      "@type": "Offer",
      "name": "Enterprise Plan",
      "price": "199",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "199",
        "priceCurrency": "USD",
        "unitText": "MONTH"
      }
    }
  ],
  "publisher": {
    "@type": "Organization",
    "name": "PRĀZYL, Inc.",
    "url": "https://prazyl.com"
  },
  "screenshot": "https://prazyl.com/screenshot.png"
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <PricingSection />
          {/* <TestimonialsSection /> */}
          <FAQSection />
        </main>
        <Footer />
      </div>
    </>
  );
}