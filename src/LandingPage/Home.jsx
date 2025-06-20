import React, { useState, useEffect } from 'react';

const images = [
  "/images/credit-card-payment-buy-sell-products-service.jpg",
  "/images/event-2.jpg",
  "/images/event-3.jpg",
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id='home' className="pt-20 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10">
        
        {/* LEFT: BankPro Intro */}
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
            Empowering Your Future <br />
            <span className="text-blue-700 dark:text-blue-400">with BankPro</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Modern banking, simplified. Manage your finances with confidence and security—anytime, anywhere.
          </p>
          <a
            href="#open-account"
            className="inline-block px-8 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-lg rounded-xl shadow-md transition duration-300"
          >
            Get Started
          </a>
        </div>

        {/* RIGHT: Slideshow */}
        <div className="w-full lg:w-[450px] relative rounded-2xl overflow-hidden shadow-2xl bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 order-1 lg:order-2">
          <img
            src={images[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="w-full h-[400px] object-cover transition-all duration-1000 ease-in-out"
          />
          <div className="absolute bottom-0 w-full bg-black/50 text-white text-sm p-3 text-center">
            <span className="font-medium">Upcoming Event {currentSlide + 1}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
