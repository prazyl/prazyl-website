'use client';

import { Check, Star } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Starter',
    price: 99,
    yearlyPrice: 940.50,
    description: 'Essential tools with unlimited claims processing for independent appraisers',
    features: [
      'Unlimited claims processing',
      '5 document templates',
      '1GB data storage',
      'Basic automation workflows',
      'Standard reporting',
      'Mobile app access',
      'Email support'
    ],
    cta: 'Start Free Trial',
    popular: false,
    stripeMonthlyPriceId: 'price_starter_monthly',
    stripeYearlyPriceId: 'price_starter_yearly',
  },
  {
    name: 'Professional',
    price: 149,
    yearlyPrice: 1341,
    description: 'Advanced templates, automation, and API access for growing agencies',
    features: [
      'Unlimited claims processing',
      '25 document templates',
      '10GB data storage',
      'Advanced automation workflows',
      '1,000 API calls/month',
      'Advanced reporting & analytics',
      'Calendar integration',
      'Team collaboration tools',
      'Priority support'
    ],
    cta: 'Start Free Trial',
    popular: true,
    stripeMonthlyPriceId: 'price_professional_monthly',
    stripeYearlyPriceId: 'price_professional_yearly',
  },
  {
    name: 'Enterprise',
    price: 199,
    yearlyPrice: 1691,
    description: 'Unlimited resources, custom workflows, and enterprise integrations',
    features: [
      'Unlimited claims processing',
      'Unlimited document templates',
      '100GB data storage',
      'Custom automation workflows',
      '10,000 API calls/month',
      'White-label customization',
      'Advanced analytics & BI',
      'Single Sign-On (SSO)',
      'Custom integrations',
      'Dedicated account manager'
    ],
    cta: 'Contact Sales',
    popular: false,
    stripeMonthlyPriceId: 'price_enterprise_monthly',
    stripeYearlyPriceId: 'price_enterprise_yearly',
  },
];

export default function PricingSection() {
  const handlePlanSelect = (plan: typeof plans[0], isYearly: boolean = false) => {
    if (plan.name === 'Enterprise') {
      // Redirect to contact form
      window.open('mailto:support@prazyl.com?subject=Enterprise Plan Inquiry', '_blank');
      return;
    }

    // For Starter and Professional, redirect to Stripe Checkout via your app
    const baseUrl = 'https://prazyl.app/signup';
    const priceId = isYearly ? plan.stripeYearlyPriceId : plan.stripeMonthlyPriceId;
    const planParam = plan.name.toLowerCase();
    const billingParam = isYearly ? 'yearly' : 'monthly';
    
    window.open(`${baseUrl}?plan=${planParam}&billing=${billingParam}&price_id=${priceId}`, '_blank');
  };

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-center sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-5 text-xl text-gray-500 dark:text-slate-400 sm:text-center">
            Choose the plan that fits your needs. All plans include a 60-day free trial.
          </p>
          
          {/* Billing Toggle */}
          <div className="mt-8 bg-gray-100 dark:bg-slate-800 rounded-lg p-1 sm:mx-auto">
            <div className="relative flex">
              <button className="relative w-1/2 py-2 px-3 text-sm font-medium text-gray-700 dark:text-slate-300 bg-white dark:bg-slate-700 rounded-md shadow-sm transition-all">
                Monthly
              </button>
              <button className="relative w-1/2 py-2 px-3 text-sm font-medium text-gray-500 dark:text-slate-400 rounded-md transition-all">
Yearly <span className="text-xs text-green-600 dark:text-green-400 ml-1">(Save up to 15%)</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl shadow-lg ${
                plan.popular
                  ? 'border-2 border-blue-600 dark:border-blue-400'
                  : 'border border-gray-200 dark:border-slate-700'
              } bg-white dark:bg-slate-800`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                <p className="mt-4 text-gray-500 dark:text-slate-400">{plan.description}</p>
                
                <div className="mt-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-extrabold text-gray-900 dark:text-white">
                      ${plan.price}
                    </span>
                    <span className="text-xl font-medium text-gray-500 dark:text-slate-400 ml-2">
                      /month
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
                    or ${plan.yearlyPrice} yearly (save {plan.name === 'Starter' ? '5%' : plan.name === 'Professional' ? '10%' : '15%'})
                  </p>
                </div>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 space-y-3">
                  <button
                    onClick={() => handlePlanSelect(plan, false)}
                    className={`w-full py-3 px-6 border border-transparent rounded-lg font-medium transition-colors ${
                      plan.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-800 dark:bg-slate-700 text-white hover:bg-gray-900 dark:hover:bg-slate-600'
                    }`}
                  >
                    {plan.cta}
                  </button>
                  
                  {plan.name !== 'Enterprise' && (
                    <button
                      onClick={() => handlePlanSelect(plan, true)}
                      className="w-full py-2 px-6 text-sm text-gray-600 dark:text-slate-400 hover:text-gray-800 dark:hover:text-slate-300 transition-colors"
                    >
Or save {plan.name === 'Starter' ? '5%' : '10%'} with yearly billing
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Free trial */}
        <div className="mt-16 bg-gray-50 dark:bg-slate-800 rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              60-Day Free Trial
            </h3>
            <p className="text-gray-600 dark:text-slate-400 text-lg">
              Try PRĀZYL risk-free for 60 days. Experience all features with no commitment 
              and no credit card required to get started.
            </p>
            <div className="mt-6 flex justify-center items-center space-x-8 opacity-60">
              <span className="text-sm font-medium text-gray-500 dark:text-slate-500">✓ No setup fees</span>
              <span className="text-sm font-medium text-gray-500 dark:text-slate-500">✓ Cancel anytime</span>
              <span className="text-sm font-medium text-gray-500 dark:text-slate-500">✓ 24/7 support</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}