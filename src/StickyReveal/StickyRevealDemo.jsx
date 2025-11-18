

import React, { useState, useEffect } from 'react';
import { Zap, Home, Building2, Wrench, Shield, Clock, Phone, Mail, MapPin, Star } from 'lucide-react';

const Services = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      id: 1,
      icon: Home,
      title: "Residential Wiring",
      description: "Complete home electrical installations and upgrades for modern living.",
      features: ["New Construction", "Panel Upgrades", "Outlet Installation", "Smart Home Integration"]
    },
    {
      id: 2,
      icon: Building2,
      title: "Commercial Solutions",
      description: "Professional electrical services for businesses and commercial properties.",
      features: ["Office Buildings", "Retail Spaces", "Industrial Facilities", "Emergency Systems"]
    },
    {
      id: 3,
      icon: Wrench,
      title: "Maintenance & Repair",
      description: "Expert troubleshooting and repair services to keep your systems running.",
      features: ["Troubleshooting", "Emergency Repairs", "Preventive Maintenance", "Code Compliance"]
    },
    {
      id: 4,
      icon: Shield,
      title: "Safety Inspections",
      description: "Comprehensive electrical safety audits and certification services.",
      features: ["Safety Audits", "Code Inspections", "Certification", "Risk Assessment"]
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "24/7", label: "Emergency Service" },
    { number: "100%", label: "Licensed & Insured" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-red-600 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-80 h-80 bg-red-500 rounded-full opacity-5 animate-bounce"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-red-600 to-red-800 rounded-full opacity-5 animate-spin" style={{animationDuration: '20s'}}></div>
      </div>

      {/* Header */}
      <header className={`relative z-10 transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <div className="container mx-auto px-6 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <Zap className="h-10 w-10 text-red-500 group-hover:text-red-400 transition-colors duration-300" />
                <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-20"></div>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
                ElectricPro Services
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-red-400 transition-colors duration-300 relative group">
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#about" className="hover:text-red-400 transition-colors duration-300 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="hover:text-red-400 transition-colors duration-300 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className={`relative z-10 py-20 transition-all duration-1200 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent animate-pulse">
            Power Your Future
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional electrical services with cutting-edge technology and unmatched expertise
          </p>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
            <span className="relative z-10">Get Started Today</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`relative z-10 py-16 transition-all duration-1000 delay-600 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-110"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
                  <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2 group-hover:text-red-400 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={`relative z-10 py-20 transition-all duration-1200 delay-900 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="container mx-auto px-6">
          <h3 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
            Our Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-red-500 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 cursor-pointer overflow-hidden"
                  onMouseEnter={() => setActiveService(service.id)}
                  onMouseLeave={() => setActiveService(null)}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Animated background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-800/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="relative p-4 bg-gradient-to-br from-red-600 to-red-700 rounded-xl mr-4 group-hover:from-red-500 group-hover:to-red-600 transition-all duration-300">
                        <Icon className="h-8 w-8 text-white" />
                        <div className="absolute inset-0 bg-white opacity-20 rounded-xl transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                      </div>
                      <h4 className="text-2xl font-bold text-white group-hover:text-red-300 transition-colors duration-300">
                        {service.title}
                      </h4>
                    </div>
                    
                    <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className={`transition-all duration-500 overflow-hidden ${activeService === service.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`relative z-10 py-20 transition-all duration-1000 delay-1200 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-white opacity-10 rounded-full animate-bounce"></div>
            <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-white opacity-5 rounded-full animate-ping"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-xl mb-8 opacity-90">Contact us today for a free consultation and quote</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group px-8 py-4 bg-white text-red-600 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-lg flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: (555) 123-4567
                </button>
                <button className="group px-8 py-4 border-2 border-white text-white rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-red-600 hover:scale-105 flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Get Free Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`relative z-10 py-12 border-t border-gray-800 transition-all duration-1000 delay-1500 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                <Zap className="h-8 w-8 text-red-500" />
                <span className="text-xl font-bold">ElectricPro Services</span>
              </div>
              <p className="text-gray-400">Powering your world with reliable electrical solutions.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-red-400">Contact Info</h5>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center justify-center md:justify-start">
                  <MapPin className="h-4 w-4 mr-2 text-red-500" />
                  123 Electric Ave, Power City
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <Phone className="h-4 w-4 mr-2 text-red-500" />
                  (555) 123-4567
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <Mail className="h-4 w-4 mr-2 text-red-500" />
                  info@electricpro.com
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-red-400">Business Hours</h5>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center justify-center md:justify-start">
                  <Clock className="h-4 w-4 mr-2 text-red-500" />
                  Mon-Fri: 8AM - 6PM
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <Star className="h-4 w-4 mr-2 text-red-500" />
                  24/7 Emergency Service
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2025 ElectricPro Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;
