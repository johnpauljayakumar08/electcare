import React from 'react';
import './WDbanner.css';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function SugarBanner() {
  return (
    <div className="sugar-container hidden lg:block ">
      
      <div className="content ms-5">
           <h1
  className="hidden md:block text-3xl md:text-5xl font-bold mb-4 mt-50 pt-10 md:pt-0 text-white"
  style={{
    textShadow: `
      2px 2px 5px rgba(0,0,0,0.4),
      0 0 10px rgba(255,255,255,0.8),
      0 0 20px rgba(255,255,255,0.6)
    `
  }}
>Sugar Industry
</h1>
          <motion.div
                    className="relative mb-3 flex flex-col items-start"
                    initial={{ opacity: 1 }}
                   
                    
                  >
                    <div className="flex space-x-1 mb-1">
                      <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
                      <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
                      <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
                      <div className="w-14 h-[5px] bgprimary rounded-full"></div>
                    </div>
                  </motion.div>
          <h1 className="block md:hidden text-3xl md:text-6xl font-bold mb-1 md:pt-0 text-red-100  md:text-left">
Sugar Industry
</h1>
           <p className="hidden md:block text-lg md:text-2xl">
         "Powering sugar manufacturing with reliable electrical services, maintenance solutions, and genuine spare parts."
          </p>
           <p className="block md:hidden text-md md:text-xl">  
         "Powering sugar manufacturing with reliable electrical services, maintenance solutions, and genuine spare parts."
          </p>
         
           <Link to="/services">
            <button className="mt-3 md:mt-7 px-3 md:px-6 py-2 md:py-3 bg-[#f50000] opacity-70 rounded-lg shadow-md text-lg font-semibold">
              Know More
            </button>
        
          </Link>
      </div>
    </div>
  );
}

export default SugarBanner;
