import React from 'react';
import { ShieldCheck, Users, Globe2 } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">About <span className="text-blue-700">BankPro</span></h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Trusted, secure, and modern banking for every Filipino. BankPro is here to redefine your financial experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Mission */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md text-center">
            <ShieldCheck className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Secure by Design</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              BankPro follows top-tier security standards, including biometric access, end-to-end encryption, and fraud monitoring.
            </p>
          </div>

          {/* People-first */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md text-center">
            <Users className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">People-First Banking</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              We exist to serve communities. Whether you're starting a business or saving for the future, we're here to support you.
            </p>
          </div>

          {/* Nationwide Vision */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md text-center">
            <Globe2 className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Accessible Nationwide</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              From major cities to rural towns, BankPro's digital-first model brings banking closer to every Filipino.
            </p>
          </div>
        </div>

        {/* Extra section: story */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h4 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">Our Story</h4>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Founded in 2022, BankPro started with a mission: to make banking simple, secure, and accessible for all. Built by a passionate team of finance experts and technologists, BankPro is committed to pushing the boundaries of what digital banking can offer—without losing the human touch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
