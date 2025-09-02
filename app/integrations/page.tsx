'use client';

import { Check, ArrowRight, Search, Filter } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Footer from '../components/Footer';

const categories = [
  'All',
  'Accounting',
  'Communication',
  'Documents',
  'Storage',
  'Workflow',
];

const integrations = [
  {
    name: 'QuickBooks',
    category: 'Accounting',
    description: 'Sync invoices, payments, and financial data seamlessly',
    logo: '📊',
    features: [
      'Automatic invoice creation',
      'Payment tracking',
      'Financial reporting',
      'Tax preparation support',
    ],
    status: 'coming-soon',
  },
  {
    name: 'Xero',
    category: 'Accounting',
    description: 'Complete accounting integration for your business',
    logo: '💼',
    features: [
      'Real-time sync',
      'Multi-currency support',
      'Bank reconciliation',
      'Expense management',
    ],
    status: 'coming-soon',
  },
  {
    name: 'OneDrive',
    category: 'Storage',
    description: 'Secure Microsoft cloud storage for your documents',
    logo: '☁️',
    features: [
      'Automatic sync',
      'Office integration',
      'Version history',
      'Secure sharing',
    ],
    status: 'coming-soon',
  },
  {
    name: 'Slack',
    category: 'Communication',
    description: 'Get instant notifications and updates in Slack',
    logo: '💌',
    features: [
      'Custom notifications',
      'Channel integration',
      'Workflow automation',
      'File sharing',
    ],
    status: 'coming-soon',
  },
  {
    name: 'Google Drive',
    category: 'Storage',
    description: 'Store and sync documents with Google Drive',
    logo: '📁',
    features: [
      'Automatic backup',
      'File synchronization',
      'Collaborative editing',
      'Version control',
    ],
    status: 'coming-soon',
  },
  {
    name: 'Dropbox',
    category: 'Storage',
    description: 'Secure cloud storage for all your claim documents',
    logo: '📦',
    features: [
      'Automatic sync',
      'File recovery',
      'Team folders',
      'Advanced sharing',
    ],
    status: 'coming-soon',
  },
  {
    name: 'DocuSign',
    category: 'Documents',
    description: 'Electronic signatures for claims and contracts',
    logo: '✍️',
    features: [
      'E-signature workflows',
      'Template management',
      'Audit trails',
      'Mobile signing',
    ],
    status: 'coming-soon',
  },
  {
    name: 'Adobe Sign',
    category: 'Documents',
    description: 'Digital document workflows and signatures',
    logo: '📝',
    features: [
      'Form creation',
      'Signature workflows',
      'Document tracking',
      'Compliance tools',
    ],
    status: 'coming-soon',
  },
  {
    name: 'Zapier',
    category: 'Workflow',
    description: 'Connect PRĀZYL with 5000+ apps automatically',
    logo: '⚡',
    features: [
      'No-code automation',
      'Multi-step workflows',
      'Conditional logic',
      'Error handling',
    ],
    status: 'coming-soon',
  },
];

export default function Integrations() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredIntegrations = integrations.filter((integration) => {
    const matchesSearch = integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          integration.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || integration.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 shadow-sm border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">PRĀZYL</span>
              <span className="ml-3 text-lg text-gray-500 dark:text-slate-400">Integrations</span>
            </Link>
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Connect Your Entire Workflow
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Integrate PRĀZYL with your favorite tools to streamline claims processing, 
            automate workflows, and boost productivity across your entire organization.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search integrations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2 items-center">
              <Filter className="h-5 w-5 text-gray-500 dark:text-slate-400" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-slate-300 hover:bg-gray-300 dark:hover:bg-slate-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Integration Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredIntegrations.map((integration) => (
            <div
              key={integration.name}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-3xl mr-3">{integration.logo}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {integration.name}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-slate-400">
                      {integration.category}
                    </span>
                  </div>
                </div>
                {integration.status === 'coming-soon' && (
                  <span className="px-2 py-1 text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-full">
                    Coming Soon
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 dark:text-slate-400 mb-4">
                {integration.description}
              </p>

              <div className="space-y-2 mb-4">
                {integration.features.slice(0, 3).map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center ${
                  integration.status === 'available'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-200 dark:bg-slate-700 text-gray-500 dark:text-slate-400 cursor-not-allowed'
                }`}
                disabled={integration.status === 'coming-soon'}
              >
                {integration.status === 'available' ? (
                  <>
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </>
                ) : (
                  'Coming Soon'
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Custom Integration Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8 lg:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Need a Custom Integration?
            </h2>
            <p className="text-lg text-gray-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Our API allows you to build custom integrations with any system. 
              Access comprehensive documentation and developer resources to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                View API Documentation
              </button>
              <a
                href="mailto:support@prazyl.com?subject=Custom Integration Request"
                className="px-6 py-3 bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-300 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-gray-900 dark:text-white">50+</p>
            <p className="text-gray-600 dark:text-slate-400 mt-2">Available Integrations</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-gray-900 dark:text-white">10M+</p>
            <p className="text-gray-600 dark:text-slate-400 mt-2">API Calls Monthly</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-gray-900 dark:text-white">99.9%</p>
            <p className="text-gray-600 dark:text-slate-400 mt-2">API Uptime</p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}