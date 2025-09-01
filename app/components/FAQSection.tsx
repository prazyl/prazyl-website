'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How does the 60-day free trial work?",
    answer: "Your free trial gives you full access to all PRĀZYL features for 60 days. No credit card required to start. You can process unlimited claims, use all templates and automation features, and get full customer support during your trial period."
  },
  {
    question: "Can I switch between plans at any time?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. When you upgrade, you'll be charged the prorated difference immediately. When you downgrade, the change takes effect at your next billing cycle, and you keep your current features until then."
  },
  {
    question: "Is my data secure and compliant?",
    answer: "Absolutely. PRĀZYL uses enterprise-grade security with end-to-end encryption, regular security audits, and compliance with insurance industry standards including SOC 2 Type II. All data is backed up automatically and stored in secure, geographically distributed data centers."
  },
  {
    question: "Do you offer integrations with other software?",
    answer: "Yes, PRĀZYL integrates with popular business tools including Google Workspace, Microsoft 365, Outlook, Gmail, and various calendar applications. We also offer API access for custom integrations and are continuously adding new integrations based on customer requests."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer comprehensive support including email support for all plans and priority support for Professional and Enterprise Plans. We also provide onboarding assistance, training materials, and a detailed knowledge base."
  },
  {
    question: "Can I import my existing claims data?",
    answer: "Yes, we provide data migration assistance to help you import your existing claims, contacts, and documents. Our team will work with you to ensure a smooth transition from your current system to PRĀZYL."
  },
  {
    question: "Is PRĀZYL suitable for independent appraisers?",
    answer: "Absolutely! Our Starter plan is designed specifically for independent appraisers and small agencies. It provides all the essential tools you need to manage claims professionally while staying within budget."
  },
  // TODO: Enable when training programs are ready
  // {
  //   question: "Do you offer training for new users?",
  //   answer: "Yes, we provide comprehensive onboarding for all new customers, including live training sessions, video tutorials, and detailed documentation. Professional and Enterprise customers also get personalized training sessions with our team."
  // },
  {
    question: "Can I customize templates and workflows?",
    answer: "Yes, PRĀZYL allows you to create and customize email templates, document templates, and automation workflows. Professional and Enterprise plans offer advanced customization options including white-label branding."
  },
  {
    question: "What happens if I cancel my subscription?",
    answer: "You can cancel your subscription at any time. You'll continue to have access to your account until the end of your current billing period. We also provide data export options so you can download your information before your account closes."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
            FAQ
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Frequently Asked Questions
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-slate-400 mx-auto">
            Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, feel free to contact us.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors rounded-lg"
              >
                <span className="font-medium text-gray-900 dark:text-white text-lg">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 dark:text-slate-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 dark:text-slate-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700 dark:text-slate-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-gray-50 dark:bg-slate-800 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 dark:text-slate-400 mb-6">
            Our team is here to help you find the right solution for your needs.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a
              href="mailto:support@prazyl.com"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </a>
            {/* TODO: Enable when sales team is ready */}
            {/* <a
              href="mailto:support@prazyl.com"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-slate-600 text-base font-medium rounded-md text-gray-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
            >
              Contact Sales
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}