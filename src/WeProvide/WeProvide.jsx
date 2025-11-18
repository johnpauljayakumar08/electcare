import React from "react";

const PanelServices = () => {
  const services = [
    {
      title: "Drive Panel",
      icon: "⚡",
      description: "Custom drive control solutions for efficient motor operation and advanced automation systems",
      badge: "Control"
    },
    {
      title: "PLC/HMI Panel",
      icon: "🖥️",
      description: "Programmable logic controllers with intuitive human-machine interfaces for seamless operation",
      badge: "Interface"
    },
    {
      title: "PCC",
      icon: "🔌",
      description: "Power control centers for reliable industrial power distribution and management",
      badge: "Power"
    },
    {
      title: "MCC",
      icon: "🔄",
      description: "Motor control centers providing centralized management for multiple motor operations",
      badge: "Management"
    },
    {
      title: "APFCR Panel",
      icon: "📊",
      description: "Active power factor correction solutions for optimized electrical efficiency",
      badge: "Efficiency"
    },
    {
      title: "AMF Panel",
      icon: "🔋",
      description: "Automatic mains failure backup systems ensuring uninterrupted power supply",
      badge: "Backup"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-zinc-800/50 border border-zinc-700/50 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-zinc-400 text-sm font-medium">Industrial Solutions</span>
          </div>
          
          <h2 className="text-5xl md:text-5xl font-extrabold text-white mb-4">
           OUR SOLUTIONS
          </h2>
          
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Expert solutions for industrial control systems with cutting-edge technology
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-zinc-900/80 border border-zinc-800/60 rounded-xl p-6 hover:border-zinc-700/80 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white group-hover:text-green-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <div className="text-zinc-500 text-sm bg-zinc-800/80 px-2 py-1 rounded-md border border-zinc-700/50">
                  {service.badge}
                </div>
              </div>
              
              {/* Description */}
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              
              {/* Icon and Status */}
              <div className="flex items-center justify-between pt-4 border-t border-zinc-800/60">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-zinc-800/60 rounded-lg flex items-center justify-center text-lg">
                    {service.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-zinc-500 text-xs">Available</span>
                  </div>
                </div>
                <button className="text-zinc-500 hover:text-white transition-colors duration-200">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
       
        
      </div>
    </section>
  );
};

export default PanelServices;