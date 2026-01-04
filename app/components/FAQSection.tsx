'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "How does the 30-day free trial work?",
    answer: "Your free trial gives you full access to all PRAZYL features for 30 days. No credit card required to start. You can manage unlimited claims, use all integrations, and get full support during your trial."
  },
  {
    question: "Can I switch between plans at any time?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. When you upgrade, you'll get immediate access to new features. When you downgrade, the change takes effect at your next billing cycle."
  },
  {
    question: "Is my data secure?",
    answer: "Yes. PRAZYL uses industry-standard security practices including encryption in transit and at rest. Your data is stored securely and backed up regularly. We never share your data with third parties."
  },
  {
    question: "How does Google integration work?",
    answer: "Once you connect your Google account, PRAZYL syncs with Google Calendar for scheduling, Gmail for email correspondence, and Google Drive for document storage. All syncing happens automatically in the background."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer email support for all plans with priority support for Professional and Enterprise customers. During beta, all users have direct access to the development team for feedback and assistance."
  },
  {
    question: "Can I import my existing claims data?",
    answer: "Yes, PRAZYL supports CSV import for claims and contacts. You can bulk import your existing data and start working immediately. We provide import templates to make the process easy."
  },
  {
    question: "Is PRAZYL suitable for independent appraisers?",
    answer: "Absolutely. PRAZYL was built specifically for independent appraisers. Our Starter plan provides all the essential tools you need to manage claims professionally while staying within budget."
  },
  {
    question: "Can I customize templates and workflows?",
    answer: "Yes, you can create custom email templates with merge fields and set up automation workflows. Professional and Enterprise plans offer advanced customization including custom workflow stages."
  },
  {
    question: "What happens if I cancel my subscription?",
    answer: "You can cancel your subscription at any time. You'll continue to have access until the end of your billing period. We provide data export options so you can download your information."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-semibold tracking-wide uppercase text-sm"
          >
            FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl sm:text-4xl font-bold text-white"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-[#a1a1aa] max-w-2xl mx-auto"
          >
            Got questions? We&apos;ve got answers.
          </motion.p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-[#18181b] rounded-xl border border-[#27272a]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-[#1f1f23] transition-colors rounded-xl"
              >
                <span className="font-medium text-white text-base pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-[#71717a] flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#71717a] flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-[#a1a1aa] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-[#18181b] border border-[#27272a] rounded-2xl p-8"
        >
          <h3 className="text-xl font-semibold text-white mb-3">
            Still have questions?
          </h3>
          <p className="text-[#a1a1aa] mb-6">
            Our team is here to help you find the right solution for your needs.
          </p>
          <a
            href="mailto:support@prazyl.com"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Contact Support
          </a>
        </motion.div>
      </div>
    </section>
  );
}
