'use client';

import {
  FileText,
  Camera,
  FolderOpen,
  Calendar,
  Mail,
  Zap,
  Clock,
  Users,
  Receipt
} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    name: 'Claims Management',
    description: 'Track claims through customizable workflow stages. Add contacts, photos, documents, and notes all in one place.',
    icon: FileText,
    color: 'blue',
  },
  {
    name: 'Photo Inspections',
    description: 'Capture and organize inspection photos by category. Tag photos to specific claims for easy reference.',
    icon: Camera,
    color: 'green',
  },
  {
    name: 'Document Generation',
    description: 'Create professional documents from customizable templates with automatic merge fields.',
    icon: FolderOpen,
    color: 'purple',
  },
  {
    name: 'Calendar & Scheduling',
    description: 'Schedule inspections and appointments. Syncs with Google Calendar for seamless integration.',
    icon: Calendar,
    color: 'amber',
  },
  {
    name: 'Gmail Integration',
    description: 'View and manage emails directly in the app. Link correspondence to claims automatically.',
    icon: Mail,
    color: 'red',
  },
  {
    name: 'Workflow Automation',
    description: 'Set up automations to create tasks, send emails, or update claims when stages change.',
    icon: Zap,
    color: 'yellow',
  },
  {
    name: 'Find Time Slot',
    description: 'AI-powered scheduling finds optimal appointment times based on location and availability.',
    icon: Clock,
    color: 'cyan',
  },
  {
    name: 'Contacts & Companies',
    description: 'Manage policyholders, carriers, and contractors. Link contacts to claims with custom roles.',
    icon: Users,
    color: 'indigo',
  },
  {
    name: 'Invoicing',
    description: 'Create and track invoices with flat rate, hourly, or combined billing options.',
    icon: Receipt,
    color: 'emerald',
  },
];

const colorClasses: Record<string, string> = {
  blue: 'bg-blue-500/10 text-blue-500',
  green: 'bg-green-500/10 text-green-500',
  purple: 'bg-purple-500/10 text-purple-500',
  amber: 'bg-amber-500/10 text-amber-500',
  red: 'bg-red-500/10 text-red-500',
  yellow: 'bg-yellow-500/10 text-yellow-500',
  cyan: 'bg-cyan-500/10 text-cyan-500',
  indigo: 'bg-indigo-500/10 text-indigo-500',
  emerald: 'bg-emerald-500/10 text-emerald-500',
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
            className="text-blue-500 font-semibold tracking-wide uppercase text-sm"
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
            Everything you need to manage claims
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-[#a1a1aa] max-w-2xl mx-auto"
          >
            PRAZYL brings together all the tools independent appraisers need
            into one seamless platform.
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

        {/* Google Integration callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-3">
                Seamless Google Integration
              </h3>
              <p className="text-[#a1a1aa] text-lg">
                Connect once and sync everywhere. Your calendar, emails, and documents
                stay in sync with Google Workspace automatically.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center">
                <svg className="h-8 w-8" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-white font-medium">Calendar</div>
                <div className="text-white font-medium">Gmail</div>
                <div className="text-white font-medium">Drive</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
