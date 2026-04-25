import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import WorkflowSection from './components/WorkflowSection';
import WaitlistSection from './components/WaitlistSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Prazyl",
  "applicationCategory": "BusinessApplication",
  "description": "Claims management built for independent appraisers. One workspace per claim — scheduling, photos, documents, email, and invoicing in one place. Currently in private beta.",
  "url": "https://prazyl.com",
  "operatingSystem": "Web Browser",
  "publisher": {
    "@type": "Organization",
    "name": "Prazyl, Inc.",
    "url": "https://prazyl.com"
  }
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-[#0a0a0a]">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <WorkflowSection />
          <WaitlistSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
