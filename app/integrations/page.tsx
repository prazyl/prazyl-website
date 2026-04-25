'use client';

import { Check, Clock, ArrowRight, Search, Shield } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const categories = ['All', 'Calendar & Email', 'Storage', 'Carrier', 'Accounting', 'Payments'];

const integrations = [
  {
    name: 'Google Workspace',
    category: 'Calendar & Email',
    description: 'Two-way Google Calendar sync, Gmail in the app, Google Drive for claim files, and Google Tasks for follow-ups.',
    logo: 'google',
    features: [
      'Calendar two-way sync',
      'Gmail threaded to claims',
      'Google Drive folder per claim',
      'Google Tasks integration',
    ],
    status: 'available',
  },
  {
    name: 'Microsoft 365',
    category: 'Calendar & Email',
    description: 'Outlook calendar sync, Outlook email in the app, OneDrive for claim files, and Microsoft To Do for tasks.',
    logo: 'microsoft',
    features: [
      'Outlook Calendar sync',
      'Outlook email threaded to claims',
      'OneDrive folder per claim',
      'Microsoft To Do integration',
    ],
    status: 'available',
  },
  {
    name: 'Dropbox',
    category: 'Storage',
    description: 'Use Dropbox as your claim file storage. Per-claim folders are created and shared with the contacts you choose.',
    logo: 'dropbox',
    features: [
      'Per-claim folder creation',
      'Shared links for contacts',
      'Photo and document sync',
      'No vendor lock-in',
    ],
    status: 'available',
  },
  {
    name: 'Stripe',
    category: 'Payments',
    description: 'Accept payments and manage subscriptions. Used today for the platform itself; client-invoice payments planned.',
    logo: 'stripe',
    features: [
      'Subscription billing',
      'Secure checkout',
      'PCI-compliant',
      'Invoice payments (planned)',
    ],
    status: 'available',
  },
  {
    name: 'Symbility Claims Workspace',
    category: 'Carrier',
    description: 'Pull assignments, sync journal updates, and mirror status changes between Prazyl and Symbility.',
    logo: 'symbility',
    features: [
      'Assignment intake',
      'Journal mirroring',
      'Status sync',
      'Owner-controlled scope',
    ],
    status: 'coming-soon',
  },
  {
    name: 'Xactimate',
    category: 'Carrier',
    description: 'Macro pre-fill: parse roof-sketch PDFs and claim data into a copy-paste block ready for your Xactimate macro.',
    logo: 'xactimate',
    features: [
      'EagleView / Roofr / HOVER parsing',
      'Macro-ready output',
      'Replaces outsourced prep',
      'Per-claim history',
    ],
    status: 'coming-soon',
  },
  {
    name: 'QuickBooks',
    category: 'Accounting',
    description: 'Sync invoices and payments between Prazyl and QuickBooks for clean financial reporting.',
    logo: 'quickbooks',
    features: [
      'Invoice sync',
      'Payment tracking',
      'Customer mapping',
      'Tax preparation',
    ],
    status: 'coming-soon',
  },
];

const logoClasses: Record<string, string> = {
  google: 'bg-white',
  microsoft: 'bg-white',
  dropbox: 'bg-[#0061FF]/10',
  stripe: 'bg-[#635BFF]/10',
  symbility: 'bg-teal-500/10',
  xactimate: 'bg-amber-500/10',
  quickbooks: 'bg-emerald-500/10',
};

function LogoMark({ logo }: { logo: string }) {
  const baseClass = `w-12 h-12 rounded-lg flex items-center justify-center ${logoClasses[logo] || 'bg-[#27272a]'}`;
  switch (logo) {
    case 'google':
      return (
        <div className={baseClass}>
          <svg className="h-7 w-7" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
        </div>
      );
    case 'microsoft':
      return (
        <div className={baseClass}>
          <svg className="h-7 w-7" viewBox="0 0 24 24">
            <path fill="#F25022" d="M2 2h10v10H2z" />
            <path fill="#7FBA00" d="M12 2h10v10H12z" />
            <path fill="#00A4EF" d="M2 12h10v10H2z" />
            <path fill="#FFB900" d="M12 12h10v10H12z" />
          </svg>
        </div>
      );
    case 'dropbox':
      return (
        <div className={baseClass}>
          <svg className="h-7 w-7" viewBox="0 0 24 24">
            <path fill="#0061FF" d="M6 2L0 6l6 4 6-4-6-4zM18 2l-6 4 6 4 6-4-6-4zM0 14l6 4 6-4-6-4-6 4zM18 10l-6 4 6 4 6-4-6-4zM6 19l6 4 6-4-6-4-6 4z" />
          </svg>
        </div>
      );
    case 'stripe':
      return (
        <div className={baseClass}>
          <span className="text-[#635BFF] font-bold text-lg">stripe</span>
        </div>
      );
    case 'symbility':
      return (
        <div className={baseClass}>
          <span className="text-teal-400 font-bold text-sm">SYM</span>
        </div>
      );
    case 'xactimate':
      return (
        <div className={baseClass}>
          <span className="text-amber-400 font-bold text-sm">XACT</span>
        </div>
      );
    case 'quickbooks':
      return (
        <div className={baseClass}>
          <span className="text-emerald-400 font-bold text-sm">QB</span>
        </div>
      );
    default:
      return <div className={baseClass} />;
  }
}

export default function Integrations() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredIntegrations = integrations.filter((integration) => {
    const matchesSearch =
      integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      integration.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || integration.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const availableCount = integrations.filter((i) => i.status === 'available').length;
  const comingSoonCount = integrations.filter((i) => i.status === 'coming-soon').length;

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />

      {/* Hero */}
      <div className="pt-32 pb-16 bg-gradient-to-b from-teal-500/10 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 text-sm mb-4 transition-colors"
          >
            ← Back to home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Works with your existing stack
          </h1>
          <p className="text-lg text-[#a1a1aa] max-w-3xl mx-auto">
            Prazyl plugs into the tools you already use — Google Workspace, Microsoft 365, Dropbox —
            so files, calendar, and email stay where they live. Carrier integrations and accounting
            connectors are next.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#71717a]" />
              <input
                type="text"
                placeholder="Search integrations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-[#27272a] rounded-lg bg-[#18181b] text-white placeholder-[#71717a] focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500 transition-colors outline-none"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-teal-400 text-[#0a0a0a]'
                      : 'bg-[#18181b] border border-[#27272a] text-[#a1a1aa] hover:text-white hover:border-[#3f3f46]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Integration Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredIntegrations.map((integration) => (
            <div
              key={integration.name}
              className="bg-[#18181b] rounded-xl border border-[#27272a] p-6 hover:border-[#3f3f46] transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <LogoMark logo={integration.logo} />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{integration.name}</h3>
                    <span className="text-sm text-[#71717a]">{integration.category}</span>
                  </div>
                </div>
                {integration.status === 'available' ? (
                  <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-teal-500/10 text-teal-400 border border-teal-500/30 rounded-full">
                    <Check className="h-3 w-3" /> Live
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded-full">
                    <Clock className="h-3 w-3" /> Coming Soon
                  </span>
                )}
              </div>

              <p className="text-[#a1a1aa] text-sm mb-4 leading-relaxed">{integration.description}</p>

              <div className="space-y-2">
                {integration.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#a1a1aa]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredIntegrations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#71717a]">No integrations match your filters.</p>
          </div>
        )}

        {/* Status counts */}
        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-2 max-w-2xl mx-auto">
          <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-6 text-center">
            <p className="text-3xl font-bold text-teal-400">{availableCount}</p>
            <p className="text-sm text-[#a1a1aa] mt-1">Live integrations</p>
          </div>
          <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-6 text-center">
            <p className="text-3xl font-bold text-amber-400">{comingSoonCount}</p>
            <p className="text-sm text-[#a1a1aa] mt-1">In development</p>
          </div>
        </div>

        {/* Suggest an integration */}
        <div className="mt-16 bg-gradient-to-r from-teal-500/10 to-purple-600/10 border border-teal-500/20 rounded-2xl p-8 lg:p-12 text-center">
          <div className="inline-flex w-12 h-12 rounded-full bg-teal-500/20 text-teal-400 items-center justify-center mb-4">
            <Shield className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Need an integration we don&apos;t have?</h2>
          <p className="text-[#a1a1aa] mb-6 max-w-2xl mx-auto">
            Tell us what you use day-to-day. We prioritize integrations based on what beta users
            actually need, not what makes a long marketing list.
          </p>
          <a
            href="mailto:hello@prazyl.com?subject=Integration%20request"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-400 hover:bg-teal-300 text-[#0a0a0a] font-medium rounded-lg transition-colors"
          >
            Suggest an integration
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
