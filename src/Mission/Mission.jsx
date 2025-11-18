
// import React, { useEffect, useState, useRef } from "react";
// import "./Mission.css";
// export default function Mission() {
//   const [scrollPercent, setScrollPercent] = useState(0);
//   const missionRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (missionRef.current) {
//         const rect = missionRef.current.getBoundingClientRect();
//         const windowHeight = window.innerHeight;

//         let progress = 1 - rect.top / windowHeight;
//         progress = Math.min(Math.max(progress, 0), 1);
//         setScrollPercent(progress);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="relative min-h-screen text-white w-full 
//                     px-2 sm:px-10 md:px-20 lg:px-10 xl:px-40 py-10 overflow-hidden">
      
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//       >
//         <source src="./Earth.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Mission - Top Left */}
//       <div className="absolute top-10 left-10 z-10 max-w-lg">
//         <h2
//           ref={missionRef}
//           className="text-3xl sm:text-7xl md:text-6xl lg:text-5xl mb-4 text-red-600 font-extrabold"
//         >
//           MISSION
//         </h2>
//         <p className="text-base sm:text-lg md:text-md leading-relaxed font-bold">
//           Our Mission at Electcare Solutions is to deliver exceptional electrical services that enhance operational efficiency,
//           safety, and reliability for our clients. We are committed to providing innovative solutions, expert troubleshooting, and timely maintenance across industries, ensuring that every system we service operates at peak performance. By continuously advancing our knowledge and expertise, we strive to be a trusted partner, focused on delivering high-quality service, fostering long-term
//         </p>
//       </div>

//       {/* Vision - Bottom Right */}
//       <div className="absolute bottom-10  left-10 sm:right-0 md:right-10 z-10 max-w-lg text-left mt-10 md:pt-5">
//         <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-5xl mb-4 text-red-600 font-extrabold">
//           VISION
//         </h2>
//         <p className="text-base sm:text-lg md:text-md leading-relaxed font-bold">
//           Our vision at Electcare Solutions is to become a global leader in providing
//           exceptional electrical services, industrial automation support, and reliable
//           maintenance solutions. We aim to set industry standards through innovation, tailored service offerings, and a commitment to enhancing efficiency, reliability, and sustainability, empowering industries for long-term success and fostering growth for all stakeholders.
//         </p>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState, useRef } from "react";
import "./Mission.css";
import { motion } from "framer-motion";
export default function Mission() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const missionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (missionRef.current) {
        const rect = missionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        let progress = 1 - rect.top / windowHeight;
        progress = Math.min(Math.max(progress, 0), 1);
        setScrollPercent(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-white w-full px-4 sm:px-10 md:px-20 lg:px-10 xl:px-40 py-10 overflow-hidden bgmission">
      {/* Background Video */}
      {/* <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="./Earth.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* Mission */}
      <div className="relative lg:absolute lg:top-10 lg:left-10 max-w-lg mb-10 lg:mb-0 z-20">
        <h2
          ref={missionRef}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl mb-4 text-red-600 font-extrabold"
        >
          MISSION
          <motion.div
                          className="relative mb-3 flex flex-col items-start"
                          initial={{ opacity: 1 }}
                         
                          
                        >
                          <div className="flex space-x-1 mb-1 mt-3">
                            <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
                            <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
                            <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
                            <div className="w-14 h-[5px] bgprimary rounded-full"></div>
                          </div>
                        </motion.div>
          {/* <span className="block w-72 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto lg:ml-0 rounded-full"></span> */}
        </h2>
        <p className="text-base sm:text-lg md:text-md leading-relaxed font-bold text-left">
          Our Mission at Electcare Solutions is to deliver exceptional electrical services that enhance operational efficiency,
          safety, and reliability for our clients. We are committed to providing innovative solutions, expert troubleshooting, and timely maintenance across industries, ensuring that every system we service operates at peak performance. By continuously advancing our knowledge and expertise, we strive to be a trusted partner, focused on delivering high-quality service, fostering long-term.
        </p>
      </div>

      {/* Vision */}
      <div className="relative lg:absolute lg:bottom-10 lg:right-10 max-w-lg text-left z-20">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl mb-4 text-red-600 font-extrabold">
          VISION
          <motion.div
                          className="relative mb-3 flex flex-col items-start "
                          initial={{ opacity: 1 }}
                         
                          
                        >
                          <div className="flex space-x-1 mb-1 mt-3">
                            <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
                            <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
                            <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
                            <div className="w-14 h-[5px] bgprimary rounded-full"></div>
                          </div>
                        </motion.div>
          {/* <span className="block w-52 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto lg:ml-0 rounded-full"></span> */}
        </h2>
        <p className="text-base sm:text-lg md:text-md leading-relaxed font-bold text-left">
          Our vision at Electcare Solutions is to become a global leader in providing
          exceptional electrical services, industrial automation support, and reliable
          maintenance solutions. We aim to set industry standards through innovation, tailored service offerings, and a commitment to enhancing efficiency, reliability, and sustainability, empowering industries for long-term success and fostering growth for all stakeholders.
        </p>
      </div>
    </div>
  );
}
