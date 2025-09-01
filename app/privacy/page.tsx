import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'PRĀZYL privacy policy - How we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-800 shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Privacy Policy
          </h1>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-slate-400 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-700 dark:text-slate-300 mb-6">
              We collect information you provide directly to us, information we obtain automatically when you use our services, and information from third parties.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-700 dark:text-slate-300 mb-6">
              We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Information Security
            </h2>
            <p className="text-gray-700 dark:text-slate-300 mb-6">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 dark:text-slate-300">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@prazyl.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                privacy@prazyl.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}