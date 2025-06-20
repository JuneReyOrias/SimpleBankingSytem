import React from "react";
import { ShieldCheck, LockKeyhole, Eye, BellRing, AlarmClock } from "lucide-react";

const securityFeatures = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-700" />,
    title: "Advanced Encryption",
    description:
      "All transactions are protected with 256-bit encryption and real-time monitoring to prevent fraud.",
  },
  {
    icon: <LockKeyhole className="w-8 h-8 text-blue-700" />,
    title: "Two-Factor Authentication",
    description:
      "Add an extra layer of protection to your account using OTP or biometrics via our app.",
  },
  {
    icon: <Eye className="w-8 h-8 text-blue-700" />,
    title: "Real-Time Monitoring",
    description:
      "Our systems constantly scan for suspicious activity and unusual behavior across all accounts.",
  },
  {
    icon: <BellRing className="w-8 h-8 text-blue-700" />,
    title: "Instant Alerts",
    description:
      "Receive immediate SMS or email alerts for all transactions, login attempts, and updates.",
  },
  {
    icon: <AlarmClock className="w-8 h-8 text-blue-700" />,
    title: "24/7 Security Team",
    description:
      "Our dedicated security experts are available around the clock to investigate and respond to threats.",
  },
];

const Security = () => {
  return (
    <section id="security" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Your Security is <span className="text-blue-700">Our Priority</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            At BankPro, we implement cutting-edge technologies and expert-driven policies to protect your data, identity, and assets.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition"
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

export default Security;
