'use client';

import { 
  FileText, 
  Camera, 
  Shield, 
  BarChart3, 
  Mail, 
  Calendar,
  Zap,
  CheckCircle,
  Layout
} from 'lucide-react';

const features = [
  {
    name: 'Automated Workflows',
    description: 'Streamline your claims process with intelligent automation that reduces manual work and speeds up resolution times.',
    icon: Zap,
  },
  {
    name: 'Document Management',
    description: 'Centralized document storage with smart search, version control, and secure access for all claim-related files.',
    icon: FileText,
  },
  {
    name: 'Dynamic Document Templates',
    description: 'Create and customize document templates that automatically populate with claim data and adapt to your workflow needs.',
    icon: Layout,
  },
  {
    name: 'Digital Inspections',
    description: 'Capture inspection photos, document damaged components, and record detailed notes with our comprehensive mobile inspection tools.',
    icon: Camera,
  },
  {
    name: 'Email Integration',
    description: 'Send professional emails directly from the platform with customizable templates and automated follow-ups.',
    icon: Mail,
  },
  {
    name: 'Calendar Scheduling',
    description: 'Integrated calendar system for managing appointments, inspections, and important claim milestones.',
    icon: Calendar,
  },
  {
    name: 'Analytics & Reporting',
    description: 'Comprehensive dashboards and reports to track claim performance, costs, and team productivity.',
    icon: BarChart3,
  },
  {
    name: 'Security & Compliance',
    description: 'Enterprise-grade security with encryption, audit trails, and compliance with insurance industry standards.',
    icon: Shield,
  },
  {
    name: 'Task Management',
    description: 'Organize and prioritize tasks with automated reminders and deadline tracking for better claim resolution.',
    icon: CheckCircle,
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything you need to manage claims efficiently
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-slate-400 lg:mx-auto">
            PRĀZYL provides comprehensive tools designed specifically for insurance professionals to streamline their claims management process.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mb-4">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                  {feature.name}
                </h3>
                <p className="mt-2 text-base text-gray-500 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional features showcase */}
        <div className="mt-20 bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Built for Insurance Professionals
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Multi-tenant Architecture</p>
                    <p className="text-gray-500 dark:text-slate-400">Secure separation of data between organizations with role-based access control.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Custom Templates</p>
                    <p className="text-gray-500 dark:text-slate-400">Create and customize email templates, documents, and automated workflows.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Mobile Ready</p>
                    <p className="text-gray-500 dark:text-slate-400">Full mobile responsiveness for claims management on the go.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Integration Ready</p>
                    <p className="text-gray-500 dark:text-slate-400">Connect with Google Workspace, Microsoft 365, and other business tools.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg p-6 text-white">
              <h4 className="text-lg font-semibold mb-4">See PRĀZYL in Action</h4>
              <p className="mb-6 opacity-90">
                Schedule a personalized demo to see how PRĀZYL can transform your claims management process.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}