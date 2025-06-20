import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div>
            <a href="/" className="flex items-center mb-4">
              <img src="/images/banklogo.png" alt="Bank Logo" className="h-10 w-10 rounded-full" />
              <span className="ml-2 text-xl font-bold text-white">BankPro</span>
            </a>
            <p className="text-sm text-gray-400">
              Trusted digital banking made simple, secure, and seamless.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase">Company</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#careers" className="hover:text-white">Careers</a></li>
              <li><a href="#blog" className="hover:text-white">News & Updates</a></li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase">Help</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#support" className="hover:text-white">Support</a></li>
              <li><a href="#faq" className="hover:text-white">FAQs</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase">Legal</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#security" className="hover:text-white">Security</a></li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="text-center text-sm text-gray-400">
          © 2025 <a href="/" className="hover:underline font-semibold text-white">BankPro</a>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
