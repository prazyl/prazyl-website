'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'Is Prazyl available right now?',
    answer:
      "Prazyl is in private beta. We're onboarding independent appraisers in small batches so we can support every account properly. Join the waitlist and we'll reach out when we have a slot for you.",
  },
  {
    question: 'How much does it cost?',
    answer:
      "We're not publishing prices during beta. Beta users get full access to every feature with no tier gating, and when public pricing goes live they'll lock in founder rates that grandfather forward.",
  },
  {
    question: 'Who is Prazyl built for?',
    answer:
      "Independent insurance appraisers. The whole product is shaped around a one-person or small-team operation: managing your own caseload, your own schedule, your own clients. It is not a carrier or staff-adjuster tool.",
  },
  {
    question: 'How does Google or Microsoft 365 integration work?',
    answer:
      "Connect your Google Workspace or Microsoft 365 account once. Prazyl syncs your calendar two-way for inspection scheduling, threads email correspondence (Gmail or Outlook) onto the claim, and stores generated documents in Drive or OneDrive. Everything syncs in the background.",
  },
  {
    question: 'Where do my files actually live?',
    answer:
      "In your cloud — Google Drive, OneDrive, or Dropbox — organized into per-claim folders that Prazyl creates. Prazyl is not a file lockbox. If you ever leave, your files stay where they always were.",
  },
  {
    question: 'Is my data secure?',
    answer:
      "Yes. Prazyl uses encryption in transit and at rest, OAuth for cloud connections (we never store your Google or Microsoft password), and row-level security on every database table so accounts are isolated. We never sell or share your data.",
  },
  {
    question: 'Can I import existing claims?',
    answer:
      "Yes. Prazyl supports CSV import for claims and contacts. We'll help you map your columns the first time so you can start with your real data instead of a blank slate.",
  },
  {
    question: 'Can I customize templates and workflows?',
    answer:
      "Yes. Build email and document templates with merge fields, then trigger them from automations that watch claim conditions (stage changes, dates, contact updates). Conditional branches and escalation rules are supported.",
  },
  {
    question: 'What about Symbility, Xactimate, or other carrier tools?',
    answer:
      "Symbility Claims Workspace integration is in development — assignments and journal updates will sync directly into the claim. Xactimate macro pre-fill (parsing roof sketches into copy-paste blocks) is on the roadmap. We don't replace your estimating tool; we feed it the data it needs.",
  },
  {
    question: 'How do I get help?',
    answer:
      "During beta, every user has a direct line to the team building Prazyl. Email support@prazyl.com — you'll get a real response from someone who can actually fix the issue.",
  },
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
            className="text-teal-400 font-semibold tracking-wide uppercase text-sm"
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
            Email us directly. During beta, the team building Prazyl reads every message.
          </p>
          <a
            href="mailto:support@prazyl.com"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-[#0a0a0a] bg-teal-400 hover:bg-teal-300 transition-colors"
          >
            Email support@prazyl.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
