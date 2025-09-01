'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-slate-800 shadow-sm border-b border-gray-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              PRĀZYL
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white dark:bg-slate-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 dark:text-slate-400 dark:hover:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
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
          <nav className="hidden md:flex space-x-10">
            <Link href="#features" className="text-base font-medium text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white">
              Features
            </Link>
            <Link href="#pricing" className="text-base font-medium text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white">
              Pricing
            </Link>
            <Link href="#faq" className="text-base font-medium text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white">
              FAQ
            </Link>
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-4">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-300 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            <Link
              href="https://prazyl.app/login"
              className="whitespace-nowrap text-base font-medium text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white"
            >
              Sign in
            </Link>
            <Link
              href="https://prazyl.app/signup"
              className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-slate-800 divide-y-2 divide-gray-50 dark:divide-slate-700">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    PRĀZYL
                  </span>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white dark:bg-slate-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 dark:text-slate-400 dark:hover:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link
                    href="#features"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-slate-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="ml-3 text-base font-medium text-gray-900 dark:text-white">
                      Features
                    </span>
                  </Link>
                  <Link
                    href="#pricing"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-slate-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="ml-3 text-base font-medium text-gray-900 dark:text-white">
                      Pricing
                    </span>
                  </Link>
                  <Link
                    href="#faq"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-slate-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="ml-3 text-base font-medium text-gray-900 dark:text-white">
                      FAQ
                    </span>
                  </Link>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="flex items-center justify-between">
                <Link
                  href="https://prazyl.app/login"
                  className="text-base font-medium text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-slate-300"
                >
                  Sign in
                </Link>
                <button
                  onClick={toggleTheme}
                  className="p-2 text-gray-500 dark:text-slate-400 hover:text-gray-700 dark:hover:text-slate-300 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </button>
              </div>
              <div>
                <Link
                  href="https://prazyl.app/signup"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}