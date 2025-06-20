import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How secure is BankPro?",
    answer:
      "BankPro uses end-to-end encryption, real-time fraud detection, and multi-factor authentication to keep your data and funds safe.",
  },
  {
    question: "How can I open a BankPro account?",
    answer:
      "You can open an account online in under 5 minutes. Just click the 'Get Started' button, fill out your details, and verify your identity.",
  },
  {
    question: "What should I do if I forget my password?",
    answer:
      "Use the 'Forgot Password' option on the login page. We’ll email or text you a secure link to reset your credentials.",
  },
  {
    question: "Is there a mobile app for BankPro?",
    answer:
      "Yes! BankPro is available on both iOS and Android. Download it from the App Store or Google Play to bank anytime, anywhere.",
  },
  {
    question: "Are there hidden fees?",
    answer:
      "No. BankPro believes in transparency. All fees are clearly listed in your account dashboard—no surprises.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Frequently Asked <span className="text-blue-700">Questions</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
            Everything you need to know about using BankPro.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all rounded-lg"
              >
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-blue-700" />
                ) : (
                  <ChevronDown className="text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
