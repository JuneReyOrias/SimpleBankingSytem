import React, { useState } from 'react';
import { Menu, X, Eye, EyeOff } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpenAccountModal, setIsOpenAccountModal] = useState(false);
  const [isSignInModal, setIsSignInModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Security", href: "#security" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="flex items-center space-x-2">
              <img src="/images/banklogo.png" alt="Bank Logo" className="h-8 w-8 rounded-full" />
              <span className="text-xl font-bold text-blue-700 dark:text-white">BankPro</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} className="text-sm font-medium text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400">
                  {link.name}
                </a>
              ))}
              <button onClick={() => setIsOpenAccountModal(true)} className="px-4 py-2 bg-blue-700 text-white rounded-md text-sm hover:bg-blue-800 transition">Open Account</button>
              <button onClick={() => setIsSignInModal(true)} className="text-sm font-medium text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400">Sign In</button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 dark:text-gray-300">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 py-4 px-6">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="block py-2 text-gray-800 dark:text-white hover:text-blue-700 dark:hover:text-blue-400">
                {link.name}
              </a>
            ))}
            <button onClick={() => { setIsOpenAccountModal(true); setIsMenuOpen(false); }} className="block w-full mt-4 bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800">Open Account</button>
            <button onClick={() => { setIsSignInModal(true); setIsMenuOpen(false); }} className="block w-full mt-2 text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400">Sign In</button>
          </div>
        )}
      </nav>

      {/* Open Account Modal */}
      {isOpenAccountModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md relative">
            <button onClick={() => setIsOpenAccountModal(false)} className="absolute top-3 right-3 text-gray-500 hover:text-red-500"><X /></button>
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Open Your BankPro Account</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">A simple, secure process:</p>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>✅ Step 1: Fill out your personal details.</li>
              <li>✅ Step 2: Upload a valid government-issued ID.</li>
              <li>✅ Step 3: Verify your mobile via OTP.</li>
              <li>✅ Step 4: Set your credentials and submit.</li>
              <li>✅ Step 5: Account activated within 24 hours.</li>
            </ul>
            <div className="mt-4 text-xs p-3 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400">
              🔒 Security Tip: BankPro will never ask for your OTP or password. Ensure you are on <code className="font-mono">https://bankpro.ph</code>
            </div>
            <button className="w-full mt-5 bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800" onClick={() => alert('Redirecting to full application...')}>Start Application</button>
          </div>
        </div>
      )}

      {/* Sign In Modal */}
      {isSignInModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md relative">
            <button onClick={() => setIsSignInModal(false)} className="absolute top-3 right-3 text-gray-500 hover:text-red-500"><X /></button>
            <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Sign In to BankPro</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300">Email</label>
                <input type="email" placeholder="your@email.com" className="mt-1 w-full p-2 border rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white" />
              </div>
              <div className="relative">
                <label className="block text-sm text-gray-700 dark:text-gray-300">Password</label>
                <input type={showPassword ? "text" : "password"} placeholder="••••••••" className="mt-1 w-full p-2 pr-10 border rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white" />
                <button type="button" className="absolute right-2 top-8 text-gray-500" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                <label><input type="checkbox" className="mr-1" /> Remember me</label>
                <a href="#" className="text-blue-600 hover:underline dark:text-blue-400">Forgot Password?</a>
              </div>
              <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded-md hover:bg-blue-800">Sign In</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
