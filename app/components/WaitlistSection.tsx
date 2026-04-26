'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Users, MessageSquare } from 'lucide-react';

const perks = [
  {
    icon: Users,
    title: 'Direct line to the team',
    description:
      'Beta users talk to the people building Prazyl. Your feedback shapes what ships next.',
  },
  {
    icon: MessageSquare,
    title: 'No tier games',
    description:
      'Every beta user has full access to every feature — no upsells, no locked-out tools.',
  },
  {
    icon: Mail,
    title: 'Pricing locked in',
    description:
      'When pricing goes live, beta users get founder rates that grandfather forward.',
  },
];

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-teal-500/10 via-[#18181b] to-[#18181b] border border-teal-500/20 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-10">
            <p className="text-teal-400 font-semibold tracking-wide uppercase text-sm">
              Beta access
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
              Get on the waitlist
            </h2>
            <p className="mt-4 text-lg text-[#a1a1aa] max-w-2xl mx-auto">
              Prazyl is in private beta. We&apos;re onboarding appraisers in small batches so
              we can support every account properly. Tell us about your work and we&apos;ll be in touch.
            </p>
          </div>

          <div className="flex justify-center mb-10">
            <a
              href="mailto:support@prazyl.com?subject=Beta%20waitlist&amp;body=Hi%20Prazyl%20team%2C%0A%0AI%27d%20like%20to%20join%20the%20beta.%20Here%27s%20a%20bit%20about%20me%3A%0A%0A-%20Name%3A%0A-%20Years%20appraising%3A%0A-%20Lines%20of%20business%20%28property%2Fauto%2Fother%29%3A%0A-%20Current%20tools%3A%0A-%20Approximate%20monthly%20claim%20volume%3A%0A%0AThanks%21"
              className="group inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-[#0a0a0a] bg-teal-400 hover:bg-teal-300 rounded-lg transition-all"
            >
              Request Beta Access
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {perks.map((perk, index) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex w-10 h-10 rounded-lg bg-teal-500/10 text-teal-400 items-center justify-center mb-3">
                  <perk.icon className="h-5 w-5" />
                </div>
                <h3 className="text-white font-medium mb-1">{perk.title}</h3>
                <p className="text-sm text-[#71717a] leading-relaxed">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
