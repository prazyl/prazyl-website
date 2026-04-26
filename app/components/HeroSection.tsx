'use client';

import Link from 'next/link';
import { ArrowRight, FileText, Calendar, Mail, FolderOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 via-transparent to-transparent" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-medium mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            Now in Private Beta
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            <span className="text-white">Claims management</span>
            <br />
            <span className="text-teal-400">built for appraisers</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-[#a1a1aa] max-w-2xl mx-auto"
          >
            The modern platform for appraisers. Manage claims, schedule inspections,
            generate documents, and sync with Google or Microsoft 365 — all in one place.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="#waitlist"
              className="group flex items-center gap-2 px-8 py-4 text-base font-medium text-[#0a0a0a] bg-teal-400 hover:bg-teal-300 rounded-lg transition-all"
            >
              Join the Waitlist
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#features"
              className="px-8 py-4 text-base font-medium text-[#a1a1aa] hover:text-white border border-[#27272a] hover:border-[#3f3f46] rounded-lg transition-all"
            >
              See Features
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-[#71717a] text-sm"
          >
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Built for appraisers</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Google &amp; Microsoft 365 ready</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Direct access to the team</span>
            </div>
          </motion.div>
        </div>

        {/* Feature preview cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-6 hover:border-[#3f3f46] transition-colors">
            <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center mb-4">
              <FileText className="h-5 w-5 text-teal-400" />
            </div>
            <h3 className="font-medium text-white">Claims</h3>
            <p className="text-sm text-[#71717a] mt-1">One workspace per claim, end to end</p>
          </div>
          <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-6 hover:border-[#3f3f46] transition-colors">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center mb-4">
              <Calendar className="h-5 w-5 text-amber-400" />
            </div>
            <h3 className="font-medium text-white">Calendar</h3>
            <p className="text-sm text-[#71717a] mt-1">Schedule inspections with two-way sync</p>
          </div>
          <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-6 hover:border-[#3f3f46] transition-colors">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
              <Mail className="h-5 w-5 text-purple-400" />
            </div>
            <h3 className="font-medium text-white">Inbox</h3>
            <p className="text-sm text-[#71717a] mt-1">Gmail or Outlook, threaded to claims</p>
          </div>
          <div className="bg-[#18181b] border border-[#27272a] rounded-xl p-6 hover:border-[#3f3f46] transition-colors">
            <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center mb-4">
              <FolderOpen className="h-5 w-5 text-rose-400" />
            </div>
            <h3 className="font-medium text-white">Documents</h3>
            <p className="text-sm text-[#71717a] mt-1">Templates, e-signature, cloud sync</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
