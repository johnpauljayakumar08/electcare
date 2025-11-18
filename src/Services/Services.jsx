
import React, { useState, useEffect } from 'react';
import { Zap, Home, Building2, Wrench, Shield, Clock, Phone, Mail, MapPin, Star,Link as LucideLink,Cable,Headset,Cog,Cpu,HousePlug,FilePen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import repairImg from "../assets/repair.jpg";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import sparepartsImg from "../assets/spareparts1.jpg";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";
import img8 from "../assets/8.png";
import { motion } from 'framer-motion';
import ServicesCarousel from './checkingservices';
import './Services.css';
const Services = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeService, setActiveService] = useState(null);
const nav=useNavigate();
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      id: 1,
      icon: Wrench,
      title: "Repairing",
      description: "Breakdowns can affect productivity, which is why our repair service is focused on quick response and precision. Our skilled technicians diagnose faults accurately and resolve them with the right tools and expertise to restore your systems effectively.From minor repairs to complex issues, we ensure minimal downtime and reliable performance. Our goal is to provide lasting solutions that maintain the safety, efficiency, and durability of your equipment.",
      features: ["New Construction", "Panel Upgrades", "Outlet Installation", "Smart Home Integration"],
      image: repairImg,
    },
    {
      id: 2,
      icon: Building2,
      title: "Annual Maintenance Charges (AMC)",
      description: "Our AMC packages provide you with planned maintenance on a yearly basis at a predictable cost. With regular visits and inspections, we help reduce the risk of breakdowns and improve system performance.Customers benefit from priority support, cost savings, and peace of mind knowing their equipment is being looked after. AMC is a cost-effective way to ensure uninterrupted operations throughout the year.",
      features: ["Office Buildings", "Retail Spaces", "Industrial Facilities", "Emergency Systems"],
      image: img2,
    },
    {
      id: 3,
      icon: FilePen,
      title: "Comprehensive Maintenance Contract (CMC)",
      description: "Our CMC offers complete coverage for all your equipment needs, going beyond AMC. This includes routine servicing, repair work, and even replacement of parts when required.With CMC, you enjoy hassle-free operations as everything from labor to spares is taken care of under one agreement. It’s an all-in-one solution for those who want total reliability without unexpected expenses.",
      features: ["Troubleshooting", "Emergency Repairs", "Preventive Maintenance", "Code Compliance"],
      image: img3,
    },
    {
      id: 4,
      icon: Shield,
      title: "Genuine Spares Supply",
      description: "We provide only genuine and high-quality spare parts that match your equipment’s specifications. Using authentic spares ensures the safety, reliability, and long-lasting performance of your machinery.Our spares supply service guarantees the timely availability of critical parts, reducing downtime during repairs or replacements. With us, you can be confident that your systems will continue to perform optimally.",
      features: ["Safety Audits", "Code Inspections", "Certification", "Risk Assessment"],
      image: sparepartsImg,
    },
    {
      id: 5,
      icon: Cable,
      title: "Retrofitting Solutions",
      description: "We specialize in retrofitting solutions that modernize your existing systems. By upgrading outdated machinery with advanced components, we help improve efficiency and performance without requiring complete replacement.Retrofitting not only saves costs but also extends the usable life of your equipment. It’s a sustainable and smart approach to keep your systems up to date with the latest technology.",
      features: ["Safety Audits", "Code Inspections", "Certification", "Risk Assessment"],
      image: img4,
    },
    {
      id: 6,
      icon: Cpu,
      title: "Erection Support",
      description: "Proper installation is key to safe and efficient operations, and that’s where our erection support comes in. We handle the entire process of equipment erection with precision and care, ensuring correct alignment and setup.Our team follows industry best practices to guarantee safety and compliance during installation. From start to finish, we make sure your systems are installed correctly to deliver maximum performance.",
      features: ["Safety Audits", "Code Inspections", "Certification", "Risk Assessment"],
      image: img5,
    },
    {
      id: 7,
      icon: HousePlug,
      title: "On Site Support",
      description: "Our on-site support services bring technical expertise directly to your location. Whether it’s troubleshooting, repairs, or optimization, our specialists provide hands-on assistance tailored to your needs.This service helps reduce downtime and ensures quick problem resolution without the delays of equipment transport. With our team available on-site, you get practical solutions right where you need them.",
      features: ["Safety Audits", "Code Inspections", "Certification", "Risk Assessment"],
      image: img6,
    },
    {
      id: 8,
      icon: Cog,
      title: "Maintenance Support",
      description: "Our maintenance support covers everything from routine care to emergency response. With dedicated teams, we ensure that your equipment receives timely attention to prevent breakdowns and optimize performance.We focus on both preventive and corrective maintenance, giving you the flexibility to manage unexpected issues while maintaining consistent operations. Our support helps you achieve higher productivity with fewer interruptions.",
      features: ["Safety Audits", "Code Inspections", "Certification", "Risk Assessment"],
      image: img7,
    },
     {
      id: 9,
      icon: Headset,
      title: "Online Support",
      description: "With our online support, help is just a click away. We provide remote troubleshooting and expert guidance to resolve issues quickly, reducing the need for physical visits.This service saves time, minimizes downtime, and offers instant solutions for common technical problems. Our remote experts ensure that your team gets the support they need, anytime and anywhere.",
      features: ["Safety Audits", "Code Inspections", "Certification", "Risk Assessment"],
      image: img8,
    }
  ];

  const stats = [
    { number: "500+", label: "Project Completed" },
    { number: "400+", label: "Happy Clients" },
    { number: "11+", label: "Years Experience" },
    { number: "24/7", label: "Emergency Service" },
    { number: "100%", label: "Assured Genuine Spares" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br overflow-hidden ">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-red-600 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-80 h-80 bg-red-500 rounded-full opacity-5 animate-bounce"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-red-600 to-red-800 rounded-full opacity-5 animate-spin" style={{animationDuration: '20s'}}></div>
      </div>

      {/* Header */}
      {/* <header className={`relative z-10 transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
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
      </header> */}

      {/* Hero Section */}
      <section className={`relative z-10 py-20 transition-all duration-1200 delay-300 transform background-services ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="container ms-5">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 mt-30  bg-gradient-to-r from-red-500 via-red-900 to-red-600 bg-clip-text text-transparent animate-pulse">
            Feel the Excellence
          </h2>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl  leading-relaxed">
            Professional services with cutting-edge technology and unmatched expertise
          </p>
          <Link to="/contact">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
            <span className="relative z-10">Get Started Today</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button></Link>
     
        </div>
      </section>

      {/* Stats Section */}
      <section className={`relative z-10 py-16 transition-all duration-1000 delay-600 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
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
                  <div className="text-gray-400 text-xs group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      
       
    <ServicesCarousel/>
      {/* CTA Section */}
      <section className={`relative z-10 py-20 transition-all duration-1000 delay-1200 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-white opacity-10 rounded-full animate-bounce"></div>
            <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-white opacity-5 rounded-full animate-ping"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4  text-white">Ready to Get Started?</h3>
              <p className="text-xl mb-8 opacity-90 text-white">Contact us today for a free consultation and quote</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                 {/* <a href="mailto:venugopal@svgelectric.com"><button className="group px-8 py-4 bg-white text-red-600 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-lg flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                   +91 8870719804
                </button></a> */}
                <a href="mailto:venugopal@svgelectric.com">
  <button className="group px-8 py-4 bg-white text-red-600 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
    <Phone className="h-5 w-5 flex-shrink-0" />
    <span className="leading-none">+91 8870719804</span>
  </button>
</a>

              {/* <a href="mailto:venugopal@svgelectric.com"> <button className="group px-8 py-4 border-2 border-white text-white rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-red-600 hover:scale-105 flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Get Free Quote
                </button></a> */}

                <a href="mailto:venugopal@svgelectric.com">
  <button className="group px-8 py-3 border-2 border-white text-white rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-red-600 hover:scale-105 flex items-center justify-center gap-2">
    <Mail className="h-5 w-5 flex-shrink-0" />
    <span className="leading-none">Get Free Quote</span>
  </button>
</a>

              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
