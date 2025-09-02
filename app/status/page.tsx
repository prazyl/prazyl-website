'use client';

import { Check, AlertCircle, X, Clock } from 'lucide-react';
import Link from 'next/link';
import Footer from '../components/Footer';

const services = [
  {
    name: 'Web Application',
    status: 'operational',
    uptime: '99.99%',
    responseTime: '52ms',
    description: 'Main PRĀZYL application platform',
  },
  {
    name: 'API Services',
    status: 'operational',
    uptime: '99.98%',
    responseTime: '28ms',
    description: 'REST API endpoints for integrations',
  },
  {
    name: 'Document Processing',
    status: 'operational',
    uptime: '99.97%',
    responseTime: '124ms',
    description: 'PDF generation and document management',
  },
  {
    name: 'Email Notifications',
    status: 'operational',
    uptime: '100%',
    responseTime: '8ms',
    description: 'Email delivery and notification system',
  },
  {
    name: 'File Storage',
    status: 'operational',
    uptime: '100%',
    responseTime: '45ms',
    description: 'Cloud storage for documents and files',
  },
  {
    name: 'Authentication Services',
    status: 'operational',
    uptime: '100%',
    responseTime: '31ms',
    description: 'User authentication and SSO',
  },
];

const incidents = [
  {
    id: 1,
    title: 'Scheduled Maintenance',
    status: 'scheduled',
    date: '2025-01-15',
    time: '2:00 AM - 4:00 AM CST',
    description: 'Routine database optimization and security updates',
  },
];

const statusColors = {
  operational: 'bg-green-500',
  degraded: 'bg-yellow-500',
  partial: 'bg-orange-500',
  major: 'bg-red-500',
  scheduled: 'bg-blue-500',
};

const statusIcons = {
  operational: Check,
  degraded: AlertCircle,
  partial: AlertCircle,
  major: X,
  scheduled: Clock,
};

export default function SystemStatus() {
  const allOperational = services.every(service => service.status === 'operational');
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 shadow-sm border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-gray-900 dark:text-white">PRĀZYL</span>
              <span className="ml-3 text-lg text-gray-500 dark:text-slate-400">System Status</span>
            </Link>
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Overall Status Banner */}
      <div className={`${allOperational ? 'bg-green-50 dark:bg-green-900/20' : 'bg-yellow-50 dark:bg-yellow-900/20'} border-b ${allOperational ? 'border-green-200 dark:border-green-800' : 'border-yellow-200 dark:border-yellow-800'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            {allOperational ? (
              <>
                <Check className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                <p className="text-green-800 dark:text-green-300 font-medium">
                  All Systems Operational
                </p>
              </>
            ) : (
              <>
                <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mr-2" />
                <p className="text-yellow-800 dark:text-yellow-300 font-medium">
                  Some Systems Experiencing Issues
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Services Grid */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Service Status
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = statusIcons[service.status as keyof typeof statusIcons];
              return (
                <div
                  key={service.name}
                  className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {service.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">
                        {service.description}
                      </p>
                    </div>
                    <div className={`${statusColors[service.status as keyof typeof statusColors]} rounded-full p-1`}>
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-slate-400">Status</span>
                      <span className="font-medium text-gray-900 dark:text-white capitalize">
                        {service.status}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-slate-400">Uptime (30d)</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {service.uptime}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-slate-400">Response Time</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {service.responseTime}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Scheduled Maintenance / Incidents */}
        {incidents.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Scheduled Maintenance
            </h2>
            <div className="space-y-4">
              {incidents.map((incident) => {
                const Icon = statusIcons[incident.status as keyof typeof statusIcons];
                return (
                  <div
                    key={incident.id}
                    className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6"
                  >
                    <div className="flex items-start">
                      <div className={`${statusColors[incident.status as keyof typeof statusColors]} rounded-full p-2 mr-4`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {incident.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-slate-400 mt-1">
                          {incident.date} | {incident.time}
                        </p>
                        <p className="text-gray-700 dark:text-slate-300 mt-2">
                          {incident.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Historical Uptime */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Historical Uptime
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-gray-200 dark:border-slate-700 p-6">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">99.98%</p>
                <p className="text-sm text-gray-600 dark:text-slate-400 mt-1">Last 30 days</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">99.97%</p>
                <p className="text-sm text-gray-600 dark:text-slate-400 mt-1">Last 90 days</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">99.99%</p>
                <p className="text-sm text-gray-600 dark:text-slate-400 mt-1">Last year</p>
              </div>
            </div>
          </div>
        </div>

        {/* Subscribe to Updates */}
        <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 dark:text-slate-400 mb-6">
            Get notified about scheduled maintenance and service incidents
          </p>
          <a
            href="mailto:support@prazyl.com?subject=Subscribe to Status Updates"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Subscribe to Updates
          </a>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-slate-700 text-center">
          <p className="text-sm text-gray-500 dark:text-slate-400">
            Last updated: {new Date().toLocaleString('en-US', { 
              timeZone: 'America/Chicago',
              dateStyle: 'medium',
              timeStyle: 'short'
            })} CST
          </p>
          <p className="text-sm text-gray-500 dark:text-slate-400 mt-2">
            For urgent issues, contact{' '}
            <a
              href="mailto:support@prazyl.com"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              support@prazyl.com
            </a>
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}