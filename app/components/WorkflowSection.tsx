'use client';

import { motion } from 'framer-motion';
import { Inbox, ClipboardCheck, Camera, FileSignature, Send } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'New assignment lands',
    description:
      'Carrier email or Symbility assignment arrives. Prazyl creates the claim, parses the contact info, and threads the email correspondence to the claim automatically.',
    icon: Inbox,
    accent: 'teal',
  },
  {
    number: '02',
    title: 'Schedule the inspection',
    description:
      'Reach out to the policyholder, collect availability, and book the inspection. Prazyl finds slots that fit your route and pushes the appointment to your calendar.',
    icon: ClipboardCheck,
    accent: 'amber',
  },
  {
    number: '03',
    title: 'Inspect in the field',
    description:
      'Mobile-friendly photo capture, organized by category as you shoot. Notes, sketches, and reference docs all attach to the claim.',
    icon: Camera,
    accent: 'green',
  },
  {
    number: '04',
    title: 'Generate the report',
    description:
      'Pull from your template library, merge in claim data, and review the draft. Send for e-signature when contracts are involved.',
    icon: FileSignature,
    accent: 'purple',
  },
  {
    number: '05',
    title: 'Bill and close',
    description:
      'Track time as you go, generate the invoice from logged hours plus flat-rate items, and send. Automation handles the routine follow-ups.',
    icon: Send,
    accent: 'rose',
  },
];

const accentClasses: Record<string, { bg: string; text: string; border: string }> = {
  teal: { bg: 'bg-teal-500/10', text: 'text-teal-400', border: 'border-teal-500/30' },
  amber: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/30' },
  green: { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/30' },
  purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30' },
  rose: { bg: 'bg-rose-500/10', text: 'text-rose-400', border: 'border-rose-500/30' },
};

export default function WorkflowSection() {
  return (
    <section id="workflow" className="py-24 bg-[#18181b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-teal-400 font-semibold tracking-wide uppercase text-sm"
          >
            How it works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl sm:text-4xl font-bold text-white"
          >
            From assignment to invoice in one workspace
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-[#a1a1aa] max-w-2xl mx-auto"
          >
            Every claim flows through the same five stages. Prazyl keeps the context attached so you
            never have to dig through email or hunt for a file.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {steps.map((step, index) => {
            const accent = accentClasses[step.accent];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-[#0a0a0a] border ${accent.border} rounded-xl p-6 hover:border-opacity-60 transition-colors`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg ${accent.bg} ${accent.text} flex items-center justify-center`}
                  >
                    <step.icon className="h-6 w-6" />
                  </div>
                  <span className={`text-xs font-mono ${accent.text} opacity-50`}>
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-[#a1a1aa] text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
