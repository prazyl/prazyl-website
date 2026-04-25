'use client';

import {
  FileText,
  Camera,
  FolderOpen,
  Calendar,
  Mail,
  Zap,
  PenLine,
  Users,
  Receipt,
  Cloud,
  Clock,
  Building2,
} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    name: 'Claims Workspace',
    description: 'Every claim becomes its own workspace — contacts, photos, documents, emails, tasks, and notes in one place.',
    icon: FileText,
    color: 'teal',
  },
  {
    name: 'Photo Inspections',
    description: 'Capture photos in the field, organize by category, and sync to your cloud automatically. AI-assisted categorization learns your conventions.',
    icon: Camera,
    color: 'green',
  },
  {
    name: 'Document Generation',
    description: 'Generate professional reports from templates with merge fields. Edit, review, and finalize without leaving the claim.',
    icon: FolderOpen,
    color: 'purple',
  },
  {
    name: 'E-Signature',
    description: 'Send contracts and authorization forms for signature. Status tracked on the claim, signed PDF stored alongside other documents.',
    icon: PenLine,
    color: 'pink',
  },
  {
    name: 'Calendar & Scheduling',
    description: 'Book inspections with two-way Google Calendar or Outlook sync. Multi-invitee scheduling collects availability and books when everyone confirms.',
    icon: Calendar,
    color: 'amber',
  },
  {
    name: 'Embedded Email',
    description: 'Read and send Gmail or Outlook directly inside the app. Threads attach to the claim. Drafts, follow-up flags, and delayed send included.',
    icon: Mail,
    color: 'red',
  },
  {
    name: 'Workflow Automation',
    description: 'Trigger tasks, emails, and stage changes when claim conditions match. AND/OR logic, conditional branches, and escalation rules.',
    icon: Zap,
    color: 'yellow',
  },
  {
    name: 'Time Tracking & Invoicing',
    description: 'Track time against claims, then generate invoices with flat-rate, hourly, or combined billing. QuickBooks sync coming soon.',
    icon: Receipt,
    color: 'emerald',
  },
  {
    name: 'Cloud Storage',
    description: 'Files live in your Google Drive, OneDrive, or Dropbox — not locked inside Prazyl. Folders organized per claim, shared with contacts when you want.',
    icon: Cloud,
    color: 'sky',
  },
  {
    name: 'Find Time Slot',
    description: 'Pick the next inspection slot based on location, drive time, and existing appointments. Built for appraisers who route their own day.',
    icon: Clock,
    color: 'cyan',
  },
  {
    name: 'Contacts & Companies',
    description: 'Track policyholders, carriers, contractors, and vendors. Link contacts to claims with custom roles. Folder sharing automation included.',
    icon: Users,
    color: 'indigo',
  },
  {
    name: 'Carrier Integrations',
    description: 'Symbility Claims Workspace integration coming soon — pull assignments, journal updates, and status changes directly into the claim.',
    icon: Building2,
    color: 'blue',
  },
];

const colorClasses: Record<string, string> = {
  teal: 'bg-teal-500/10 text-teal-400',
  blue: 'bg-blue-500/10 text-blue-400',
  green: 'bg-green-500/10 text-green-400',
  purple: 'bg-purple-500/10 text-purple-400',
  pink: 'bg-pink-500/10 text-pink-400',
  amber: 'bg-amber-500/10 text-amber-400',
  red: 'bg-red-500/10 text-red-400',
  yellow: 'bg-yellow-500/10 text-yellow-400',
  cyan: 'bg-cyan-500/10 text-cyan-400',
  sky: 'bg-sky-500/10 text-sky-400',
  indigo: 'bg-indigo-500/10 text-indigo-400',
  emerald: 'bg-emerald-500/10 text-emerald-400',
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-teal-400 font-semibold tracking-wide uppercase text-sm"
          >
            Features
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl sm:text-4xl font-bold text-white"
          >
            Everything an appraiser needs, nothing they don&apos;t
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-[#a1a1aa] max-w-2xl mx-auto"
          >
            Prazyl replaces the spreadsheet, the file folders, the calendar app, the email client,
            and the document tool — with one workspace built around the claim.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-[#18181b] border border-[#27272a] rounded-xl p-6 hover:border-[#3f3f46] transition-colors"
            >
              <div className={`w-12 h-12 rounded-lg ${colorClasses[feature.color]} flex items-center justify-center mb-4`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.name}
              </h3>
              <p className="text-[#a1a1aa] text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Workspace integrations callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-teal-500/10 to-purple-600/10 border border-teal-500/20 rounded-2xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-3">
                Bring your own workspace
              </h3>
              <p className="text-[#a1a1aa] text-lg">
                Prazyl works with the tools you already use. Connect Google Workspace or
                Microsoft 365 once, and your calendar, email, and files stay in sync.
                Files live in your Drive, OneDrive, or Dropbox — yours, not ours.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 bg-[#18181b]/60 backdrop-blur rounded-lg px-4 py-3 border border-[#27272a]">
                <svg className="h-7 w-7" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-white font-medium">Google Workspace</span>
              </div>
              <div className="flex items-center gap-3 bg-[#18181b]/60 backdrop-blur rounded-lg px-4 py-3 border border-[#27272a]">
                <svg className="h-7 w-7" viewBox="0 0 24 24">
                  <path fill="#F25022" d="M2 2h10v10H2z"/>
                  <path fill="#7FBA00" d="M12 2h10v10H12z"/>
                  <path fill="#00A4EF" d="M2 12h10v10H2z"/>
                  <path fill="#FFB900" d="M12 12h10v10H12z"/>
                </svg>
                <span className="text-white font-medium">Microsoft 365</span>
              </div>
              <div className="flex items-center gap-3 bg-[#18181b]/60 backdrop-blur rounded-lg px-4 py-3 border border-[#27272a]">
                <svg className="h-7 w-7" viewBox="0 0 24 24">
                  <path fill="#0061FF" d="M6 2L0 6l6 4 6-4-6-4zM18 2l-6 4 6 4 6-4-6-4zM0 14l6 4 6-4-6-4-6 4zM18 10l-6 4 6 4 6-4-6-4zM6 19l6 4 6-4-6-4-6 4z"/>
                </svg>
                <span className="text-white font-medium">Dropbox</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
