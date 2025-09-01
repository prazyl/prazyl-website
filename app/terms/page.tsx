import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'PRĀZYL terms of service - Legal terms and conditions for using our insurance claims management software.',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-800 shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Terms of Service
          </h1>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-slate-400 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Acceptance of Terms
            </h2>
            <p className="text-gray-700 dark:text-slate-300 mb-6">
              By accessing and using PRĀZYL, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Use License
            </h2>
            <p className="text-gray-700 dark:text-slate-300 mb-6">
              Permission is granted to temporarily use PRĀZYL for personal, non-commercial transitory viewing only.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Service Availability
            </h2>
            <p className="text-gray-700 dark:text-slate-300 mb-6">
              We strive to maintain 99.9% uptime but cannot guarantee uninterrupted service availability.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Contact Information
            </h2>
            <p className="text-gray-700 dark:text-slate-300">
              Questions about the Terms of Service should be sent to us at{' '}
              <a href="mailto:legal@prazyl.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                legal@prazyl.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}