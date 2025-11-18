import React from "react";
import integrityimg from "../../src/assets/integrity.avif";
import innovationimg from "../../src/assets/manandmachine.gif";
import moonimg from "../../src/assets/repair.jpg";
import settingsimg from "../../src/assets/machine.gif";
import customerimg from "../../src/assets/settings-machines.gif";

import sustainabilityimg from "../../src/assets/controlpannel.avif";

import "./CoreValues.css";
const cards = [
  { 
    title: "Integrity", 
    img: integrityimg,
    description: "Building trust through transparent and honest practices"
  },
  { 
    title: "Innovation", 
    img: innovationimg,
    description: "Pioneering advanced solutions for tomorrow's challenges"
  },
  { 
    title: "Quality", 
    img: settingsimg,
    description: "Delivering excellence in every project and service"
  },
  { 
    title: "Idealogy", 
    img: customerimg,
    description: "Continuously advancing with cutting-edge technology"
  },
  { 
    title: "Customer Focus", 
    img: moonimg,
    description: "Valuing every relationship and partnership we build"
  },
  { 
    title: "Responsibility", 
    img: sustainabilityimg,
    description: "Committed to sustainable and ethical business practices"
  },
];

function Card({ title, img, description, index }) {
  return (
    <div className="group relative">
      {/* Card Container */}
      <div className="bg-zinc-900/80 border border-zinc-800/60 rounded-xl overflow-hidden hover:border-zinc-700/80 transition-all duration-300 h-full">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          {/* Index Number */}
          <div className="absolute top-4 right-4 w-8 h-8 bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50 rounded-lg flex items-center justify-center">
            <span className="text-zinc-400 text-sm font-medium">{String(index + 1).padStart(2, '0')}</span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            {description}
          </p>
          
          {/* Bottom Accent */}
          <div className="mt-4 pt-4 border-t border-zinc-800/60 group-hover:border-orange-500/30 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <div className="w-8 h-0.5 bg-zinc-700 group-hover:bg-orange-400 group-hover:w-16 transition-all duration-300 rounded-full"></div>
              <div className="w-2 h-2 bg-zinc-700 group-hover:bg-orange-400 rounded-full transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CoreValues() {
  return (
    <section className="py-20 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-zinc-800/50 border border-zinc-700/50 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-zinc-400 text-sm font-medium">Our Foundation</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Core Values
          </h1>
          
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Machines, devices that use power to apply forces and control movement, 
            are integral to modern society. They range from simple tools to complex 
            automated systems, enabling us to perform tasks more efficiently and with 
            greater precision.
          </p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Card key={index} {...card} index={index} />
          ))}
        </div>
        
       
      </div>
    </section>
  );
}