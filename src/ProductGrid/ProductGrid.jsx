import React from "react";
import imgpart from "../../src/assets/integrity.avif";
import machineimg from "../../src/assets/machine.gif";
import manandmachine from "../../src/assets/manandmachine.gif";
import repair from "../../src/assets/repair.jpg";
import controlpannel from "../../src/assets/controlpannel.avif";
import spanner from "../../src/assets/spanner.png";
import "./ProductGrid.css";
import { motion } from "framer-motion";
const ProductGrid = () => {
  return (
   <div className="entirebg min-h-screen p-4 sm:p-6">
     <div class="services-intro">
               <h1 className="text-4xl md:text-5xl font-bold text-center my-8 evolheading">
                <motion.div
                          className="relative mb-3 flex flex-col items-center "
                          initial={{ opacity: 1 }}
                         
                          
                        >
                          <div className="flex space-x-1 mb-1">
                            <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
                            <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
                            <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
                            <div className="w-14 h-[5px] bgprimary rounded-full"></div>
                          </div>
                        </motion.div>
        Our Core Values
        {/* <span className="block w-92 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mt-3 rounded-full"></span> */}
      </h1>
      </div>
  
  <p className="text-center max-w-4xl mx-auto text-black text-base sm:text-lg leading-relaxed mb-8 sm:mb-12">
    Machines, devices that use power to apply forces and control movement,
    are integral to modern society. They range from simple tools to complex
    automated systems, enabling us to perform tasks more efficiently and with
    greater precision.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
    {/* Featured Product */}
    <div
      className="md:col-span-2 relative overflow-hidden rounded-lg group h-60 sm:h-80"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110  "
        style={{ backgroundImage: `url(${imgpart})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      <div className="relative p-4 sm:p-6 flex flex-col h-full">
        <p className="text-xs sm:text-sm text-gray-300">Featured Product</p>
        <h2 className="text-xl sm:text-2xl font-semibold text-white">Innovation</h2>
        <p className="mt-2 text-xs sm:text-sm max-w-md text-gray-200 opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          Transform how your infrastructure thinks and evolves. Neural Core combines
          AI-driven automation with intelligent scaling to create a self-evolving system.
        </p>
        <button className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-red text-black rounded-sm px-3 py-2 transition-transform duration-300 hover:scale-110">
          →
        </button>
      </div>
    </div>

    {/* Product Lineup */}
    <div className="coreheader text-black rounded-lg sm:p-6 flex flex-col justify-between py-5">
      <p className="text-xs sm:text-sm  ">Idealogy</p>
      <h2 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">
        Platform Suite Neural-Powered Infrastructure
      </h2>
      <p className="text-xs sm:text-sm">
        They range from simple tools to complex automated systems, enabling us
        to perform tasks more efficiently and with greater precision.
      </p>
      <p className="mt-4 sm:mt-6 text-xs sm:text-sm">⚡ Service at your Doorstep</p>
    </div>

    {/* Reusable Cards */}
    {[
      { title: "Quality", img: machineimg },
      { title: "Commitment & Responsible", img: manandmachine },
      { title: "Team Work", img: repair },
      { title: "Customer Focus", img: controlpannel },
      { title: "Ethics", img: spanner },
    ].map((item, i) => (
      <div
        key={i}
        className="relative overflow-hidden rounded-lg group h-40 sm:h-52"
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110 filter group-hover:grayscale-0 "
          style={{ backgroundImage: `url(${item.img})` }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative p-3 sm:p-4">
          <h2 className="text-base sm:text-lg font-semibold text-white">{item.title}</h2>
        
        </div>
        <button className="absolute bottom-3 left-3 bg-red-500 text-black rounded-sm px-2 sm:px-3 py-1 sm:py-2 transition-transform duration-300 hover:scale-110">
          →
        </button>
      </div>
    ))}

    {/* Neural Core 4.0b */}
    <div className=" rounded-lg p-4 sm:p-6 flex flex-col justify-between border border-gray-700 shadow-xxl">
      <div>
        <h2 className="text-lg sm:text-xl font-semibold">SVG</h2>
        <p className="text-xs sm:text-sm text-gray-700 ">
          Quality and Service in one hand.
        </p>
        <p className="text-xs sm:text-sm mt-4 sm:mt-6 text-red-500">Development Progress</p>
        <h3 className="text-xl sm:text-2xl font-bold text-red-500">84.7%</h3>
      </div>
      <button className="mt-3 sm:mt-4 bg-red-500 text-black rounded-md px-3 self-end transition-transform duration-300 hover:scale-110">
        →
      </button>
    </div>
  </div>
</div>

  );
};


export default ProductGrid;



