

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom";


const cardData = [
  {
    id: "01",
    number: "01",
    title: "Drive Panel",
    subtitle: "Custom drive control solutions for efficient motor operation and advanced automation systems.",
    description: "Control panel for motors",
    image: "/drive-panel.png",
    content: {
      title: "Efficient motor control and automation",
      description: "Custom drive control systems that enhance performance and ensure reliability in industrial automation.",
      features: ["Energy efficiency", "Automation ready", "Custom configurations", "High reliability"],
    },
  },
  {
    id: "02",
    number: "02",
    title: "PLC/HMI Panel",
    subtitle: "Programmable logic controllers with intuitive human-machine interfaces for seamless operation.",
    description: "Automation interface",
    image: "/plc-hmi-panel.png",
    content: {
      title: "Seamless control with PLC & HMI",
      description: "Combine automation control with user-friendly HMI for smooth operation and monitoring.",
      features: ["User-friendly interface", "Programmable logic", "Remote monitoring", "Custom automation"],
    },
  },
  {
    id: "03",
    number: "03",
    title: "PCC",
    subtitle: "Power control centers for reliable industrial power distribution and management.",
    description: "Power distribution system",
    image: "/pcc-panel.png",
    content: {
      title: "Reliable industrial power control",
      description: "Centralized power control ensuring safe and efficient distribution across industrial setups.",
      features: ["Centralized power", "Safe distribution", "Scalable design", "Robust protection"],
    },
  },
  {
    id: "04",
    number: "04",
    title: "MCC",
    subtitle: "Motor control centers providing centralized management for multiple motor operations.",
    description: "Motor management system",
    image: "/mcc-panel.png",
    content: {
      title: "Centralized motor management",
      description: "Efficiently control and monitor multiple motors with advanced MCC solutions.",
      features: ["Multiple motor support", "Centralized control", "Scalable systems", "Enhanced protection"],
    },
  },
  {
    id: "05",
    number: "05",
    title: "APFCR Panel",
    subtitle: "Active power factor correction solutions for optimized electrical efficiency.",
    description: "Power efficiency panel",
    image: "/apfcr-panel.png",
    content: {
      title: "Optimized electrical efficiency",
      description: "Improve system performance and reduce energy losses with APFCR technology.",
      features: ["Power factor correction", "Energy savings", "Automatic adjustment", "Improved efficiency"],
    },
  },
  {
    id: "06",
    number: "06",
    title: "AMF Panel",
    subtitle: "Automatic mains failure backup systems ensuring uninterrupted power supply.",
    description: "Backup power panel",
    image: "/amf-panel.png",
    content: {
      title: "Uninterrupted power backup",
      description: "Ensure continuous operations with automatic mains failure (AMF) systems.",
      features: ["Automatic switching", "Uninterrupted power", "Backup readiness", "System safety"],
    },
  },
];


export function Provide() {
  const [activeCard, setActiveCard] = useState("01")

  const activeCardData = cardData.find((card) => card.id === activeCard) || cardData[0]

  return (
    // <div className="w-full px-4 md:px-20 py-10 mx-auto bg-[#0c0d0e] text-white">
        <div className="w-full px-4 md:px-20 mx-auto">
      {/* <h1 className="text-3xl md:text-5xl font-light text-center py-5 text-[#888891] tracking-tighter"> */}
            <h1 className="text-3xl md:text-5xl font-light text-center py-10 tracking-tighter">
        Our Solutions
      </h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left side - Cards */}
        <div className="flex flex-col gap-4 w-full lg:w-80 overflow-x-auto lg:overflow-visible">
          {cardData.map((card) => (
            <div
              key={card.id}
              onClick={() => setActiveCard(card.id)}
              className={`
                relative cursor-pointer transition-all duration-500 ease-out rounded-lg overflow-hidden
                ${
                  activeCard === card.id
                    ? "bg-[#ff6347] min-h-[250px] lg:h-80 shadow-2xl transform scale-105"
                    : "bg-gray-100 h-16 lg:h-20 hover:scale-[1.02]"
                }
              `}
            >
              <div className="p-4 h-full flex flex-col justify-between">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs md:text-sm font-mono opacity-70">{card.number}</span>
                    <ChevronRight className="w-3 h-3 md:w-4 md:h-4 opacity-50" />
                  </div>
                </div>

                {/* Expanded Content */}
                <div
                  className={`transition-all duration-500 ${
                    activeCard === card.id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <h3 className="text-lg md:text-xl font-bold mb-1">{card.title}</h3>
                  <p className="text-xs md:text-sm opacity-90 leading-relaxed">{card.subtitle}</p>
                </div>

                {/* Collapsed Title */}
                {activeCard !== card.id && (
                  <h4 className="font-semibold text-sm md:text-base">{card.title}</h4>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Content */}
        <div className="flex-1 bg-gray-100 rounded-lg p-6 md:p-8 relative overflow-hidden min-h-[300px]">
          {/* Case Study label */}
          <div className="absolute top-4 right-4 text-[10px] md:text-xs font-mono flex items-center gap-2">
            Case Study
            <div className="w-6 md:w-8 h-px bg-gray-100"></div>
            <span>{activeCard}</span>
          </div>

          {/* Main content */}
          <div key={activeCard} className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 leading-tight">
              {activeCardData.content.title}
            </h2>
            <p className=" mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
              {activeCardData.content.description}
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mb-8">
              {activeCardData.content.features.map((feature, index) => (
                <div key={feature} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-[#ff6347] rounded-full mt-1"></div>
                  <p className="text-xs md:text-sm">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="absolute bottom-4 right-4">
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
              to="/services"
              className="bg-[#ff6347] text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-[#ff5722] transition-colors duration-300 text-sm md:text-base"
            >
              Explore Services in Depth
              <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
