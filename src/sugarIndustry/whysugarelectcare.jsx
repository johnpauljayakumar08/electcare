

import React, { useState, useEffect } from 'react';
import { Wrench, Lightbulb, Shield } from 'lucide-react';

/**
 * @typedef {Object} Feature
 * @property {React.ReactNode} icon
 * @property {string} title
 * @property {string} bgColor
 * @property {string} textColor
 * @property {string} description
 */

const features = [
  {
    icon: <Wrench className="w-6 h-6" />,
    title: 'End-to-End Expertise',
    bgColor: 'bgprimary',
    textColor: 'text-white',
    description: 'Comprehensive electrical servicing — from installation and commissioning to preventive maintenance and repair — designed specifically for sugar manufacturing operations.'
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Customer-Focused Approach',
    bgColor: 'bgprimary',
    textColor: 'text-white',
    description: 'Fast response times, transparent communication, and tailored solutions built around your plant’s specific operational needs.'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Commitment to Quality and Reliability',
    bgColor: 'bgprimary',
    textColor: 'text-white',
    description: 'Fast response times, transparent communication, and tailored solutions built around your plant’s specific operational needs.'
  }
];

export default function WhySugarElectcare() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center textprimary mb-16">
           Why Choose Electcare Private Limited for the Sugar Industry?
          </h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Feature Buttons */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-full p-6 rounded-lg flex items-center gap-4 transition-all duration-500 transform ${
                    activeIndex === index
                      ? `${feature.bgColor} ${feature.textColor} scale-105 shadow-xl`
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <div className={`p-3 rounded-full ${
                    activeIndex === index ? 'bg-white bg-opacity-20' : 'bg-white'
                  }`}>
                    {feature.icon}
                  </div>
                  <span className="text-left font-semibold text-lg">
                    {feature.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Right Column - Description */}
            <div className="bg-white p-8 rounded-xl shadow-lg min-h-64 flex items-center">
              <div className="transition-all duration-700 ease-in-out transform">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {features[activeIndex].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}