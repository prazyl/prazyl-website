'use client';

import { Copy, Check, ChevronRight, Code, Book, Key, Zap } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import Footer from '../../components/Footer';

const endpoints = [
  {
    category: 'Authentication',
    endpoints: [
      {
        method: 'POST',
        path: '/api/v1/auth/token',
        description: 'Generate access token',
        example: `curl -X POST https://api.prazyl.com/v1/auth/token \\
  -H "Content-Type: application/json" \\
  -d '{"client_id": "your_client_id", "client_secret": "your_secret"}'`,
      },
      {
        method: 'POST',
        path: '/api/v1/auth/refresh',
        description: 'Refresh access token',
        example: `curl -X POST https://api.prazyl.com/v1/auth/refresh \\
  -H "Authorization: Bearer your_refresh_token"`,
      },
    ],
  },
  {
    category: 'Claims',
    endpoints: [
      {
        method: 'GET',
        path: '/api/v1/claims',
        description: 'List all claims',
        example: `curl https://api.prazyl.com/v1/claims \\
  -H "Authorization: Bearer your_token" \\
  -H "Accept: application/json"`,
      },
      {
        method: 'GET',
        path: '/api/v1/claims/{id}',
        description: 'Get claim details',
        example: `curl https://api.prazyl.com/v1/claims/CL-2024-001 \\
  -H "Authorization: Bearer your_token"`,
      },
      {
        method: 'POST',
        path: '/api/v1/claims',
        description: 'Create new claim',
        example: `curl -X POST https://api.prazyl.com/v1/claims \\
  -H "Authorization: Bearer your_token" \\
  -H "Content-Type: application/json" \\
  -d '{
    "policy_number": "POL-123456",
    "incident_date": "2024-01-15",
    "description": "Vehicle collision",
    "estimated_amount": 5000
  }'`,
      },
      {
        method: 'PUT',
        path: '/api/v1/claims/{id}',
        description: 'Update claim',
        example: `curl -X PUT https://api.prazyl.com/v1/claims/CL-2024-001 \\
  -H "Authorization: Bearer your_token" \\
  -H "Content-Type: application/json" \\
  -d '{"status": "approved", "approved_amount": 4500}'`,
      },
      {
        method: 'DELETE',
        path: '/api/v1/claims/{id}',
        description: 'Delete claim',
        example: `curl -X DELETE https://api.prazyl.com/v1/claims/CL-2024-001 \\
  -H "Authorization: Bearer your_token"`,
      },
    ],
  },
  {
    category: 'Documents',
    endpoints: [
      {
        method: 'GET',
        path: '/api/v1/claims/{id}/documents',
        description: 'List claim documents',
        example: `curl https://api.prazyl.com/v1/claims/CL-2024-001/documents \\
  -H "Authorization: Bearer your_token"`,
      },
      {
        method: 'POST',
        path: '/api/v1/claims/{id}/documents',
        description: 'Upload document',
        example: `curl -X POST https://api.prazyl.com/v1/claims/CL-2024-001/documents \\
  -H "Authorization: Bearer your_token" \\
  -F "file=@/path/to/document.pdf" \\
  -F "type=estimate"`,
      },
      {
        method: 'GET',
        path: '/api/v1/documents/{id}',
        description: 'Download document',
        example: `curl https://api.prazyl.com/v1/documents/DOC-123456 \\
  -H "Authorization: Bearer your_token" \\
  -o document.pdf`,
      },
      {
        method: 'DELETE',
        path: '/api/v1/documents/{id}',
        description: 'Delete document',
        example: `curl -X DELETE https://api.prazyl.com/v1/documents/DOC-123456 \\
  -H "Authorization: Bearer your_token"`,
      },
    ],
  },
  {
    category: 'Reports',
    endpoints: [
      {
        method: 'POST',
        path: '/api/v1/reports/generate',
        description: 'Generate report',
        example: `curl -X POST https://api.prazyl.com/v1/reports/generate \\
  -H "Authorization: Bearer your_token" \\
  -H "Content-Type: application/json" \\
  -d '{
    "type": "monthly_summary",
    "start_date": "2024-01-01",
    "end_date": "2024-01-31",
    "format": "pdf"
  }'`,
      },
      {
        method: 'GET',
        path: '/api/v1/reports/{id}',
        description: 'Get report status',
        example: `curl https://api.prazyl.com/v1/reports/RPT-123456 \\
  -H "Authorization: Bearer your_token"`,
      },
      {
        method: 'GET',
        path: '/api/v1/reports/{id}/download',
        description: 'Download report',
        example: `curl https://api.prazyl.com/v1/reports/RPT-123456/download \\
  -H "Authorization: Bearer your_token" \\
  -o report.pdf`,
      },
    ],
  },
  {
    category: 'Webhooks',
    endpoints: [
      {
        method: 'GET',
        path: '/api/v1/webhooks',
        description: 'List webhooks',
        example: `curl https://api.prazyl.com/v1/webhooks \\
  -H "Authorization: Bearer your_token"`,
      },
      {
        method: 'POST',
        path: '/api/v1/webhooks',
        description: 'Create webhook',
        example: `curl -X POST https://api.prazyl.com/v1/webhooks \\
  -H "Authorization: Bearer your_token" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://your-app.com/webhook",
    "events": ["claim.created", "claim.updated"],
    "active": true
  }'`,
      },
      {
        method: 'DELETE',
        path: '/api/v1/webhooks/{id}',
        description: 'Delete webhook',
        example: `curl -X DELETE https://api.prazyl.com/v1/webhooks/WH-123456 \\
  -H "Authorization: Bearer your_token"`,
      },
    ],
  },
];

const sdks = [
  { name: 'Node.js', icon: '🟢', status: 'Available' },
  { name: 'Python', icon: '🐍', status: 'Available' },
  { name: 'PHP', icon: '🐘', status: 'Coming Soon' },
  { name: 'Ruby', icon: '💎', status: 'Coming Soon' },
  { name: '.NET', icon: '🔷', status: 'Coming Soon' },
  { name: 'Java', icon: '☕', status: 'Coming Soon' },
];

export default function APIDocumentation() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('Authentication');

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
      case 'POST': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
      case 'PUT': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'DELETE': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 shadow-sm border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">PRĀZYL</span>
              <span className="ml-3 text-lg text-gray-500 dark:text-slate-400">API Documentation</span>
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
            PRĀZYL API Documentation
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Build powerful integrations with our RESTful API. Access claims data, 
            manage documents, and automate your insurance workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
              <Key className="h-5 w-5 mr-2" />
              Get API Key
            </button>
            <a
              href="#quick-start"
              className="px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors inline-flex items-center justify-center"
            >
              <Zap className="h-5 w-5 mr-2" />
              Quick Start Guide
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Start */}
        <section id="quick-start" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Quick Start</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-3 mr-4">
                  <Key className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">1. Get Your API Key</h3>
              </div>
              <p className="text-gray-600 dark:text-slate-400">
                Sign in to your PRĀZYL dashboard and navigate to Settings → API to generate your API credentials.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 dark:bg-green-900/30 rounded-full p-3 mr-4">
                  <Code className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">2. Make Your First Call</h3>
              </div>
              <p className="text-gray-600 dark:text-slate-400">
                Use your API key to authenticate and make your first API request to list claims.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded-full p-3 mr-4">
                  <Book className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">3. Explore Endpoints</h3>
              </div>
              <p className="text-gray-600 dark:text-slate-400">
                Browse our comprehensive API reference to discover all available endpoints and features.
              </p>
            </div>
          </div>
        </section>

        {/* Base URL */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Base URL</h2>
          <div className="bg-gray-900 dark:bg-slate-950 rounded-lg p-4">
            <code className="text-green-400">https://api.prazyl.com/v1</code>
          </div>
        </section>

        {/* Authentication */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Authentication</h2>
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
            <p className="text-gray-600 dark:text-slate-400 mb-4">
              All API requests require authentication using a Bearer token in the Authorization header:
            </p>
            <div className="bg-gray-900 dark:bg-slate-950 rounded-lg p-4">
              <code className="text-green-400">Authorization: Bearer your_api_token</code>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">API Endpoints</h2>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {endpoints.map((category) => (
              <button
                key={category.category}
                onClick={() => setSelectedCategory(category.category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-slate-300 hover:bg-gray-300 dark:hover:bg-slate-600'
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>

          {/* Endpoint List */}
          <div className="space-y-4">
            {endpoints
              .find(cat => cat.category === selectedCategory)
              ?.endpoints.map((endpoint, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <span className={`px-3 py-1 rounded-md text-sm font-medium ${getMethodColor(endpoint.method)}`}>
                        {endpoint.method}
                      </span>
                      <code className="ml-4 text-gray-700 dark:text-slate-300 font-mono">
                        {endpoint.path}
                      </code>
                    </div>
                    <button
                      onClick={() => copyToClipboard(endpoint.example)}
                      className="text-gray-500 hover:text-gray-700 dark:text-slate-400 dark:hover:text-slate-200"
                    >
                      {copiedCode === endpoint.example ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <Copy className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  <p className="text-gray-600 dark:text-slate-400 mb-4">
                    {endpoint.description}
                  </p>
                  <div className="bg-gray-900 dark:bg-slate-950 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-300 whitespace-pre">
                      <code>{endpoint.example}</code>
                    </pre>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* SDKs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">SDKs & Libraries</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {sdks.map((sdk) => (
              <div
                key={sdk.name}
                className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{sdk.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{sdk.name}</h3>
                      <p className={`text-sm ${
                        sdk.status === 'Available' 
                          ? 'text-green-600 dark:text-green-400' 
                          : 'text-yellow-600 dark:text-yellow-400'
                      }`}>
                        {sdk.status}
                      </p>
                    </div>
                  </div>
                  {sdk.status === 'Available' && (
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Rate Limits */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Rate Limits</h2>
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Starter</h3>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">1,000</p>
                <p className="text-gray-600 dark:text-slate-400">requests/hour</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Professional</h3>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">10,000</p>
                <p className="text-gray-600 dark:text-slate-400">requests/hour</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Enterprise</h3>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">Unlimited</p>
                <p className="text-gray-600 dark:text-slate-400">Custom limits</p>
              </div>
            </div>
          </div>
        </section>

        {/* Support */}
        <section className="mb-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Need Help?
          </h2>
          <p className="text-gray-600 dark:text-slate-400 mb-6">
            Our developer support team is here to help you build amazing integrations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:api@prazyl.com"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact API Support
            </a>
            <button className="px-6 py-3 bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-medium rounded-lg border border-gray-300 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors">
              Join Developer Community
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}