import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Wrench, Zap, Shield,Building2,Clock,Phone,Mail,MapPin,Star, Link as LucideLink,Cable,Headset,Cog,Cpu,HousePlug,FilePen} from "lucide-react";
// import { Zap, Home, Building2, Wrench, Shield, Clock, Phone, Mail, MapPin, Star,Link as LucideLink,Cable,Headset,Cog,Cpu,HousePlug,FilePen } from 'lucide-react';
import repairImg from "../assets/repair.jpg";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import sparepartsImg from "../assets/spareparts1.jpg";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";
import img7 from "../assets/7.png";
import img8 from "../assets/8.png";
// import { motion } from "framer-motion";
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

export default function ServicesCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextSlide = () => setIndex((prev) => (prev + 1) % services.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + services.length) % services.length);

  // Auto slide every 5 seconds
  useEffect(() => {
    if (!paused) {
      const interval = setInterval(() => nextSlide(), 5000);
      return () => clearInterval(interval);
    }
  }, [paused, index]);

  return (
    <section className="relative py-16 overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-red-500 bg-clip-text text-transparent">
            <motion.div
                      className="relative mb-3 flex flex-col items-center"
                      initial={{ opacity: 1 }}
                    >
                      <div className="flex space-x-1 mb-1">
                        <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
                        <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
                        <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
                        <div className="w-14 h-[5px] bgprimary rounded-full"></div>
                      </div>
                      </motion.div>
          Our Services
        </h1>

        <div
          className="relative flex items-center justify-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 150 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -150 }}
              transition={{ duration: 0.7 }}
              className={`w-full flex flex-col md:flex-row items-center justify-between gap-10 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text */}
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-red-600 rounded-xl mr-3">
                    {React.createElement(services[index].icon, {
                      className: "h-6 w-6 text-white",
                    })}
                  </div>
                  <h4 className="text-2xl font-bold text-red-600">
                    {services[index].title}
                  </h4>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {services[index].description}
                </p>

                <ul className="space-y-2">
                  {services[index].features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-600 text-base"
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={services[index].image}
                  alt={services[index].title}
                  className="w-full max-w-md h-100 object-cover rounded-lg shadow-md"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Navigation (arrows + dots inline) */}
        <div className="flex justify-center items-center mt-10 space-x-4">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="border border-gray-300 rounded-md p-2 hover:bg-red-500 hover:text-white transition mt-5"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="flex items-center space-x-2 mt-5">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === index ? "bg-red-600 w-6" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="border border-gray-300 rounded-md p-2 hover:bg-red-500 hover:text-white transition mt-5"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
