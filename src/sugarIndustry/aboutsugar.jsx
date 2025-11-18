import React from "react";
import aboutImage from "../assets/svgpanel.jpeg";
import { motion } from "framer-motion";

export function AboutSugar() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 bg-white">
      
      {/* 🔴 Animated Bouncing Background Ball */}
      <motion.div
        className="absolute w-40 h-40 rounded-full bg-red-500 opacity-30 blur-2xl"
        animate={{
          y: ["0%", "100%", "0%"],
          x: ["0%", "30%", "-30%", "0%"],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        style={{
          top: "10%",
          left: "10%",
          zIndex: 0,
        }}
      />

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl text-center py-5 tracking-tighter mt-24 relative evolheading z-10">
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
       Empowering the Sugar Industry
      </h1>

      {/* Image and Text section */}
      <div className="w-full mt-8 sm:mt-10 flex flex-col lg:flex-row gap-8 max-w-7xl px-4 sm:px-8 md:px-12 z-10">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <div className="relative h-[400px] lg:h-full rounded-xl overflow-hidden shadow-xl">
            <img
              src={aboutImage}
              alt="SVG Electric & Control Products"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 text-sm sm:text-base md:text-lg text-justify">
          <p>
           At <b>Electcare Private Limited</b>, we are dedicated to powering the sugar industry with reliable electrical services, maintenance solutions, and genuine spare parts. With deep expertise in electrical systems and process automation, we ensure seamless operation across every stage of sugar production — from crushing and processing to refining and packaging. Our skilled team provides comprehensive maintenance, panel servicing, and on-site support to minimize downtime and enhance productivity. By combining technical excellence with a strong commitment to quality and customer satisfaction, Electcare helps sugar manufacturers achieve optimal efficiency, equipment longevity, and sustainable growth.
          </p>
        </div>
      </div>
    </div>
  );
}


