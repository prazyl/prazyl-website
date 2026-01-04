'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Shield } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#27272a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-blue-500">
            <Shield className="h-7 w-7" />
            <span className="text-xl font-bold tracking-wider">PRAZYL</span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-[#71717a] hover:text-white hover:bg-[#27272a] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-sm font-medium text-[#a1a1aa] hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-[#a1a1aa] hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="#faq" className="text-sm font-medium text-[#a1a1aa] hover:text-white transition-colors">
              FAQ
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="https://prazyl.app/auth/login"
              className="text-sm font-medium text-[#a1a1aa] hover:text-white transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="https://prazyl.app/auth/sign-up"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#18181b] border-t border-[#27272a]">
          <div className="px-4 py-6 space-y-4">
            <Link
              href="#features"
              className="block text-base font-medium text-[#a1a1aa] hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="block text-base font-medium text-[#a1a1aa] hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="block text-base font-medium text-[#a1a1aa] hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="pt-4 border-t border-[#27272a] space-y-3">
              <Link
                href="https://prazyl.app/auth/login"
                className="block text-base font-medium text-[#a1a1aa] hover:text-white transition-colors"
              >
                Sign in
              </Link>
              <Link
                href="https://prazyl.app/auth/sign-up"
                className="block w-full text-center px-4 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
