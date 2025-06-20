import React from 'react';
import { CreditCard, Lock, Smartphone, Banknote, PiggyBank, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: "Secure Transactions",
    description: "Bank-grade encryption ensures your funds and data are always safe.",
    icon: <Lock className="w-8 h-8 text-blue-700" />,
  },
  {
    title: "Mobile Banking",
    description: "Access your bank anytime, anywhere with our smart mobile app.",
    icon: <Smartphone className="w-8 h-8 text-blue-700" />,
  },
  {
    title: "Online Payments",
    description: "Seamless bill payments, fund transfers, and e-commerce checkout.",
    icon: <CreditCard className="w-8 h-8 text-blue-700" />,
  },
  {
    title: "High Interest Savings",
    description: "Grow your savings with our competitive interest rates.",
    icon: <PiggyBank className="w-8 h-8 text-blue-700" />,
  },
  {
    title: "Loan Services",
    description: "Apply for personal, auto, and business loans effortlessly.",
    icon: <Banknote className="w-8 h-8 text-blue-700" />,
  },
  {
    title: "Fraud Protection",
    description: "Advanced monitoring and real-time alerts protect your account.",
    icon: <ShieldCheck className="w-8 h-8 text-blue-700" />,
  },
];

const Features = () => {
  return (
    <section id='features' className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
          Why Choose <span className="text-blue-700">BankPro</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 text-lg max-w-2xl mx-auto">
          Bank smarter with modern features designed to simplify, secure, and enhance your financial life.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-6 text-left hover:shadow-xl transition duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
