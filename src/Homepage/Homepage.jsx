import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import "./Homepage.css";
import RoundedNav from "../Navbar/RoundedNav.jsx";
export default function Homepage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const headingY = useTransform(scrollYProgress, [0, 0.8], ["0%", "-50%"]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const subheadingY = useTransform(scrollYProgress, [0, 0.8], ["50%", "0%"]);
  const subheadingOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);


  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);


  return (
    <div
      ref={ref}
      className="w-full min-h-screen overflow-hidden relative flex flex-col items-center justify-center"
    >
      <RoundedNav />


      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 sm:space-y-6"
        >
          {/* Heading */}
          <motion.h1
            style={{ y: headingY, opacity: headingOpacity }}
            className="font-extrabold
                       text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                       tracking-tight leading-tight"
          >
            <span className="text-[#ed2024] block">
              Welcome to{" "}
              <span className="inline-block hover:scale-105 transition-transform duration-200">
                ElectCare
              </span>
            </span>
          </motion.h1>
          {/* Subheading */}
          <motion.div className="mt-4 sm:mt-6">
            <motion.p
              style={{ y: subheadingY, opacity: subheadingOpacity }}
              className="text-[#ed2024] font-extrabold
                         text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
                         tracking-wide text-center sm:text-right"
            >
              Power Your Future
            </motion.p>
          </motion.div>
        </motion.div>
      </div>


      {/* Background image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/star-main.jpg)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />


      {/* Cloud - hidden on small devices */}
      <motion.img
        src="/cloud.png"
        alt="Cloud"
        className="hidden sm:block absolute w-[150px] sm:w-[200px] md:w-[450px] z-10"
        style={{
          left: "35%",
          top: "40%",
        }}
        animate={{ x: ["0%", "10%", "0%", "-10%", "0%"] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      />


      {/* Foreground mountain */}
      <div
        className="absolute inset-0 z-40 pointer-events-none"
        style={{
          backgroundImage: `url(/image-bottom.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />


      {/* Overlay */}
      <motion.div
        className="absolute inset-0 z-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%)",
        }}
      />
    </div>
  );
}



