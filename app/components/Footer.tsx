'use client';

import Link from 'next/link';
import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#27272a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-teal-400">
              <Shield className="h-6 w-6" />
              <span className="text-lg font-bold tracking-wider">PRAZYL</span>
            </Link>
            <p className="mt-4 text-[#71717a] text-sm max-w-md">
              Claims management built for independent appraisers. One workspace per claim,
              from assignment to invoice. Currently in private beta.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#features" className="text-[#71717a] hover:text-white text-sm transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#workflow" className="text-[#71717a] hover:text-white text-sm transition-colors">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="text-[#71717a] hover:text-white text-sm transition-colors">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-[#71717a] hover:text-white text-sm transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/#waitlist" className="text-[#71717a] hover:text-white text-sm transition-colors">
                  Join the waitlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-[#71717a] hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[#71717a] hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#27272a] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#52525b] text-sm">
            &copy; {new Date().getFullYear()} PRAZYL. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:hello@prazyl.com"
              className="text-[#71717a] hover:text-white text-sm transition-colors"
            >
              hello@prazyl.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
