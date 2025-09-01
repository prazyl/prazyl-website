'use client';
/* eslint-disable @next/next/no-img-element */

import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    content: "PRĀZYL has revolutionized how we handle claims. What used to take weeks now takes days. The automation features alone have saved us countless hours of manual work.",
    author: "Sarah Mitchell",
    role: "Senior Claims Adjuster",
    company: "Premier Insurance Group",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
  },
  {
    content: "The document management system is fantastic. Everything is organized, searchable, and accessible from anywhere. Our team collaboration has improved dramatically.",
    author: "Michael Rodriguez",
    role: "Claims Manager",
    company: "Atlantic Insurance",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
  },
  {
    content: "As an independent adjuster, PRĀZYL has given me the tools to compete with larger firms. The professional templates and automated workflows make me look like a much bigger operation.",
    author: "Jennifer Chen",
    role: "Independent Insurance Adjuster",
    company: "Chen Adjusting Services",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
  },
  {
    content: "The analytics and reporting features give us insights we never had before. We can track our performance, identify bottlenecks, and make data-driven decisions.",
    author: "David Thompson",
    role: "VP of Operations",
    company: "Coastal Claims Solutions",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
  },
  {
    content: "Customer support is outstanding. The onboarding was smooth, and they're always available when we need help. The ROI has been incredible - we've seen a 40% increase in claim processing speed.",
    author: "Lisa Park",
    role: "Claims Director",
    company: "Midwest Insurance Partners",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
  },
  {
    content: "The mobile app is a game-changer for field work. I can update claims, upload photos, and communicate with clients right from the job site. It's made me so much more efficient.",
    author: "Robert Johnson",
    role: "Field Adjuster",
    company: "National Claims Network",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
  }
];

const stats = [
  { label: "Faster Claim Processing", value: "40%" },
  { label: "Reduction in Manual Work", value: "65%" },
  { label: "Customer Satisfaction", value: "98%" },
  { label: "Active Users", value: "10K+" }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Trusted by Insurance Professionals
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-slate-400 mx-auto">
            See what industry professionals are saying about PRĀZYL
          </p>
        </div>

        {/* Stats */}
        <div className="mt-16 bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-gray-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 relative"
            >
              <Quote className="h-8 w-8 text-blue-600 dark:text-blue-400 opacity-20 absolute top-4 right-4" />
              
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 dark:text-slate-300 text-base leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonial.avatar}
                  alt={testimonial.author}
                />
                <div className="ml-4">
                  <div className="text-base font-medium text-gray-900 dark:text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-slate-400">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-blue-600 dark:text-blue-400">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Join Thousands of Insurance Professionals
          </h3>
          <p className="text-xl opacity-90 mb-8">
            Experience the difference PRĀZYL can make in your claims management process
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a
              href="https://prazyl.app/signup"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
            >
              Start Your Free Trial
            </a>
            <button className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}