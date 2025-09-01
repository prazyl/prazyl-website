import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';

const navigation = {
  product: [
    { name: 'Features', href: '#features', active: true },
    { name: 'Pricing', href: '#pricing', active: true },
    { name: 'Integrations', href: '/integrations', active: false },
    { name: 'API Documentation', href: '/docs/api', active: false },
  ],
  support: [
    { name: 'Help Center', href: '/help', active: false },
    { name: 'Contact Support', href: 'mailto:support@prazyl.com', active: true },
    { name: 'System Status', href: '/status', active: false },
    { name: 'Training', href: '/training', active: false },
  ],
  company: [
    { name: 'About Us', href: '/about', active: false },
    { name: 'Careers', href: '/careers', active: false },
    { name: 'Blog', href: '/blog', active: false },
    { name: 'Press Kit', href: '/press', active: false },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy', active: false },
    { name: 'Terms of Service', href: '/terms', active: false },
    { name: 'Cookie Policy', href: '/cookies', active: false },
    { name: 'Data Processing', href: '/data-processing', active: false },
  ],
};

const social = [
  {
    name: 'X',
    href: 'https://x.com/prazyl',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/prazyl',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@prazyl',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-slate-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">PRĀZYL</span>
            </div>
            <p className="text-gray-400 text-base">
              Professional insurance claims management software that automates business workflows 
              and manages documents in a fully customizable environment.
            </p>
            {/* TODO: Enable when social media accounts are ready */}
            {/* <div className="flex space-x-6">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div> */}
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Product
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      {item.active ? (
                        <Link
                          href={item.href}
                          className="text-base text-gray-400 hover:text-white transition-colors"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <span className="text-base text-gray-500 cursor-not-allowed">
                          {item.name}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Support
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      {item.active ? (
                        <Link
                          href={item.href}
                          className="text-base text-gray-400 hover:text-white transition-colors"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <span className="text-base text-gray-500 cursor-not-allowed">
                          {item.name}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Company
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      {item.active ? (
                        <Link
                          href={item.href}
                          className="text-base text-gray-400 hover:text-white transition-colors"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <span className="text-base text-gray-500 cursor-not-allowed">
                          {item.name}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
                  Legal
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      {item.active ? (
                        <Link
                          href={item.href}
                          className="text-base text-gray-400 hover:text-white transition-colors"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <span className="text-base text-gray-500 cursor-not-allowed">
                          {item.name}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-300">Email</p>
                <a
                  href="mailto:support@prazyl.com"
                  className="text-base text-gray-400 hover:text-white transition-colors"
                >
                  support@prazyl.com
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-gray-400 mr-3" />
              <div>
                <p className="text-sm font-medium text-gray-300">Address</p>
                <p className="text-base text-gray-400">
                  Houston, TX<br />
                  United States
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-700 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <span className="text-gray-500 text-sm cursor-not-allowed">
              Sitemap
            </span>
            <span className="text-gray-500 text-sm cursor-not-allowed">
              Accessibility
            </span>
            <span className="text-gray-500 text-sm cursor-not-allowed">
              Security
            </span>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} PRĀZYL, Inc. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
}