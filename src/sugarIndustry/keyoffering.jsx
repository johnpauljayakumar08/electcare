import React from "react";
import { Wrench, Box, Truck, MagnetIcon } from 'lucide-react';
import './keyoffering.css';
import { GiMagnifyingGlass } from "react-icons/gi";

export function KeyOffering() {
  return (
    <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-5 max-w-6xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 bgprimary bg-clip-text text-transparent">
            Comprehensive Maintenance and Lifecycle Support
          </h2>
          <p className="text-center text-lg italic text-gray-600 mb-12 max-w-2xl mx-auto">
            We go beyond repairs — we ensure lasting performance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Wrench,
                title: "Preventive Maintenance",
                desc: "Regular system checks and predictive servicing to prevent failures and extend lifespan."
              },
              {
                icon: Box,
                title: "Technical Support & Training",
                desc: "Expert assistance and training to empower your team."
              },
              {
                icon: Truck,
                title: "Genuine Spare Parts Supply",
                desc: "Authentic, high-quality components ensuring durability and performance."
              },
              {
                icon: MagnetIcon,
                title: "On-Site Service & Troubleshooting",
                desc: "Fast diagnostics and corrective actions to reduce downtime."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <item.icon className="w-16 h-16 textprimary mx-auto mb-5" />
                <h3 className="text-xl font-semibold textprimary mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}