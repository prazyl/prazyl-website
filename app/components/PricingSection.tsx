'use client';

import { Check } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    price: 99,
    description: 'Essential tools for independent appraisers just getting started.',
    features: [
      'Up to 50 active claims',
      'Claims & contact management',
      'Photo inspections',
      'Basic document templates',
      'Calendar scheduling',
      'Email support',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    price: 149,
    description: 'Advanced features for growing appraisal businesses.',
    features: [
      'Unlimited claims',
      'Everything in Starter',
      'Google Calendar sync',
      'Gmail integration',
      'Custom email templates',
      'Workflow automations',
      'CSV import/export',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 199,
    description: 'Full platform access with all features unlocked.',
    features: [
      'Everything in Professional',
      'Google Drive sync',
      'Find Time Slot AI',
      'Custom document templates',
      'Advanced automations',
      'Custom workflow stages',
      'Dedicated support',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-[#18181b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-semibold tracking-wide uppercase text-sm"
          >
            Pricing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl sm:text-4xl font-bold text-white"
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-[#a1a1aa] max-w-2xl mx-auto"
          >
            Start with a 30-day free trial. No credit card required.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-[#0a0a0a] rounded-2xl p-8 ${
                plan.popular
                  ? 'border-2 border-blue-500 shadow-lg shadow-blue-500/10'
                  : 'border border-[#27272a]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="mt-2 text-[#71717a] text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">${plan.price}</span>
                <span className="text-[#71717a]">/month</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-[#a1a1aa] text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="https://prazyl.app/auth/sign-up"
                className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-colors ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-[#27272a] text-white hover:bg-[#3f3f46]'
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Beta notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-[#71717a] text-sm">
            Currently in beta. Early adopters get extended trial periods.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
