import React from "react";
import { motion } from "framer-motion";

function RombassGrid() {
  return (
    <div className="flex flex-col items-center">
      {/* Top Rhombus */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        className="w-45 h-45 shadow-lg transform rotate-45 overflow-hidden rounded-2xl"
      >
        <video
          src="https://www.pexels.com/download/video/6208729/" // replace with your video path
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transform -rotate-45 scale-150"
        />
      </motion.div>

      {/* Bottom 2 Rhombuses */}
      <div className="flex justify-between w-full mt-4">
        {/* Left */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
          whileHover={{ scale: 1.1 }}
          className="w-45 h-45 shadow-lg transform rotate-45 overflow-hidden mr-10 rounded-2xl"
        >
          <video
            src="https://www.pexels.com/download/video/6755162/"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transform -rotate-45 scale-150"
          />
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
          whileHover={{ scale: 1.1 }}
          className="w-45 h-45 shadow-lg transform rotate-45 overflow-hidden ml-10 rounded-2xl"
        >
          <video
            src="https://www.pexels.com/download/video/24861249/"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transform -rotate-45 scale-150"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default RombassGrid;
