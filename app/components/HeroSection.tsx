'use client';

import Link from 'next/link';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white dark:bg-slate-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white dark:text-slate-900 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Streamline Your</span>
                <span className="block text-blue-600 xl:inline"> Insurance Claims</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 dark:text-slate-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Professional claims management software that automates business workflows and manages documents in a fully customizable environment. Transform your insurance operations with PRĀZYL.
              </p>
              
              {/* Benefits */}
              <div className="mt-6 flex flex-col sm:flex-row sm:space-x-8 space-y-2 sm:space-y-0">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600 dark:text-slate-400">60-day free trial</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600 dark:text-slate-400">No setup fees</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-sm text-gray-600 dark:text-slate-400">Cancel anytime</span>
                </div>
              </div>

              <div className="mt-8 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    href="https://prazyl.app/signup"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors group"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-slate-800 hover:bg-blue-200 dark:hover:bg-slate-700 md:py-4 md:text-lg md:px-10 transition-colors group">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Demo
                  </button>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="mt-8">
                <p className="text-sm font-medium text-gray-500 dark:text-slate-400 tracking-wider uppercase">
                  Trusted by insurance professionals worldwide
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
          {/* Dashboard Preview */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-2xl p-6 m-8 max-w-md">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="flex-1 bg-gray-100 dark:bg-slate-700 rounded px-3 py-1">
                <span className="text-xs text-gray-500 dark:text-slate-400">prazyl.app/claims</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-4/5"></div>
              <div className="h-8 bg-blue-100 dark:bg-blue-900 rounded flex items-center px-3">
                <span className="text-xs text-blue-600 dark:text-blue-400">Active Claims</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-6 bg-gray-100 dark:bg-slate-700 rounded"></div>
                <div className="h-6 bg-gray-100 dark:bg-slate-700 rounded"></div>
              </div>
              <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-3/5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}