

// import React from "react";
// import aboutImage from "../assets/svgpanel.jpeg";
// import { motion } from "framer-motion";
// export function AboutPage() {
//   return (
//     <div className="min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4">
//       {/* Heading */}
//       <h1 className="text-4xl md:text-6xl text-center py-5 tracking-tighter mt-24 relative evolheading">
//        <motion.div
//                           className="relative mb-3 flex flex-col items-center "
//                           initial={{ opacity: 1 }}
                         
                          
//                         >
//                           <div className="flex space-x-1 mb-1">
//                             <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
//                             <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
//                             <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
//                             <div className="w-14 h-[5px] bgprimary rounded-full"></div>
//                           </div>
//                         </motion.div>
//         Who We Are
//         {/* Wire / line below heading */}
//         {/* <span className="block w-32 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto mt-3 rounded-full"></span> */}
//       </h1>

//       {/* Optional sparkle effect */}
//       {/* <SparklesCore /> */}

//       {/* Image and Text section */}
//       <div className="w-full px-4 mt-8 sm:mt-10 flex flex-col lg:flex-row gap-8 max-w-7xl px-4 sm:px-8 md:px-12">
//         {/* Image Section */}
//         <div className="lg:w-1/2">
//           <div className="relative h-[400px] lg:h-full rounded-xl overflow-hidden shadow-xl">
//             <img 
//               src={aboutImage}
//               alt="SVG Electric & Control Products" 
//               className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//             />
//           </div>
//         </div>

//         {/* Text Section */}
//         <div className="lg:w-1/2 text-sm sm:text-base md:text-lg text-justify">
//           <p>
//             Electcare Solutions, a proud part of the SVG Group, welcomes you. As an elite service provider, we dedicate ourselves to offering professional solutions for industrial automation and electrical panel services in wide range of industry sectors. we specialize in maintenance and support for multi-brand General Electrical Systems, VFDs, DC Drives, PLCs, HMIs, DCS, SCADA, Retrofitting solutions. Electcare Solutions has earned a reputation for providing reliable support and innovative approaches and dedicated to optimizing your operations dependability and efficiency. We dedicate ourselves to supporting you and your team with top-notch technology and outstanding customer service through our precision-driven approach.
//         </p>

//         {/* <p className="my-4">
//          SVG Electric specializes in manufacturing and supplying customized control and automation panels, along with design consulting, spares supply, repair, and maintenance services. Our offerings include drive repair, control panel repair, retrofitting, AMC, and complete industrial automation solutions for sugar, distillery, pulp & paper, cement, power, stone crusher, and commercial sectors.
//         </p>

//         <p className="my-4">
//           Our young and dynamic team delivers end-to-end automation solutions—from system design and programming to commissioning, training, and documentation—ensuring superior quality, reliability, and customer satisfaction.
//         </p> */}
//       </div>
//     </div>
//     </div>
//   );
// }







import React from "react";
import aboutImage from "../assets/svgpanel.jpeg";
import { motion } from "framer-motion";

export function AboutPage() {
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
        Who We Are
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
            Electcare Solutions, a proud part of the SVG Group, welcomes you. As
            an elite service provider, we dedicate ourselves to offering
            professional solutions for industrial automation and electrical
            panel services in wide range of industry sectors. We specialize in
            maintenance and support for multi-brand General Electrical Systems,
            VFDs, DC Drives, PLCs, HMIs, DCS, SCADA, and Retrofitting solutions.
            Electcare Solutions has earned a reputation for providing reliable
            support and innovative approaches dedicated to optimizing your
            operations’ dependability and efficiency. We dedicate ourselves to
            supporting you and your team with top-notch technology and
            outstanding customer service through our precision-driven approach.
          </p>
        </div>
      </div>
    </div>
  );
}


