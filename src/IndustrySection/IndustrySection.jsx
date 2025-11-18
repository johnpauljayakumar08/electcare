// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { GiSugarCane, GiClothes, GiChemicalDrop} from "react-icons/gi";
// import { MdLocalDrink } from "react-icons/md";
// import { FaIndustry,FaTint,FaCogs,FaRegFileAlt} from "react-icons/fa";
// import industryImg from "../assets/SVGINDUSTRY.jpeg";
// import sparePartsImg from "../assets/spareparts1.jpg";
// import repairImg from "../assets/repair.jpg";
// import controlPanelImg from "../assets/controlpannel.avif";
// // import image from "../assets/steelindustry.jpg";
// const industries = [
//   {
//     name: "Cement",
//     icon: <FaIndustry size={30} />,
//     imageurl: industryImg,
//     description: "The cement industry is vital in infrastructure, providing the foundation for modern construction. It plays a crucial role in shaping cities, building homes, roads, bridges, and industrial structures that drive economic growth. As a backbone of development, it supports urbanization and enhances the quality of life by enabling durable and sustainable construction solutions.",
//     features: ["VFD'S & DC Drives", "PLC & HMI", "Programming", "Commisioning", "Re-Commisioning", "General Electric Systems"],
//   },
//   {
//     name: "Sugar",
//     icon: <GiSugarCane size={30} />,
//     imageurl: controlPanelImg,
//     description: "Sugar industries process raw materials into refined sugar for beverages and food products.",
//     features: ["VFD'S & DC Drives", "PLC & HMI", "Programming", "Commisioning", "Re-Commisioning", "General Electric Systems"],
//   },
//   {
//     name: "Beverages",
//     icon: <MdLocalDrink  size={30} />,
//     imageurl: industryImg,
//     description: "The beverage industry produces and distributes drinks worldwide, from soft drinks to energy beverages.",
//     features: ["VFD'S & DC Drives", "PLC & HMI", "Programming", "Commisioning", "Re-Commisioning", "General Electric Systems"],
//   },
//   {
//     name: "Chemicals",
//     icon: <GiChemicalDrop size={30} />,
//     imageurl: controlPanelImg,
//     description: "The chemical industry drives innovation across pharmaceuticals, agriculture, and manufacturing.",
//     features: ["VFD'S & DC Drives", "PLC & HMI", "Programming", "Commisioning", "Re-Commisioning", "General Electric Systems"],
//   },
//   {
//     name: "Steel",
//     icon: <FaCogs size={30} />,
//     imageurl: industryImg,
//     description: "The Steel industry creates fabrics and garments, playing a major role in fashion and lifestyle.",
//     features: ["VFD'S & DC Drives", "PLC & HMI", "Programming", "Commisioning", "Re-Commisioning", "General Electric Systems"],
//   },
//   {
//     name: "Paper",
//     icon: <FaRegFileAlt size={30} />,
//     imageurl: repairImg,
//     description: "Paper industries provide essential materials for education, communication, and packaging.",
//     features: ["VFD'S & DC Drives", "PLC & HMI", "Programming", "Commisioning", "Re-Commisioning", "General Electric Systems"],
//   },
  
//   {
//     name: "Water",
//     icon: <FaTint size={30}  />,
//     imageurl: sparePartsImg,
//     description: "Water Treatment Plant",
//     features: ["VFD'S & DC Drives", "PLC & HMI", "Programming", "Commisioning", "Re-Commisioning", "General Electric Systems"],
//   },
// ];
// export default function IndustrySection() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const activeIndustry = industries[activeIndex];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % industries.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
     
    
//           <div class="services-intro">
//                 <h1 className="text-4xl md:text-5xl font-light my-6 text-center tracking-tight pt-30 evolheading">
//                    <motion.div
//                                                               className="relative mb-3 flex flex-col items-center "
//                                                               initial={{ opacity: 1 }}
                                                             
                                                              
//                                                             >
//                                                               <div className="flex space-x-1 mb-1 mt-3">
//                                                                 <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
//                                                                 <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
//                                                                 <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
//                                                                 <div className="w-14 h-[5px] bgprimary rounded-full"></div>
//                                                               </div>
//                                                             </motion.div>
//             INDUSTRIES WE SERVE
//             {/* <span className="block w-42 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto  rounded-full"></span> */}
//           </h1>
//             </div>
//     <div className="flex flex-col lg:flex-row items-center justify-center gap-10 py-10 px-3 bg-gray-50"> 
//       <div className="lg:w-1/2 space-y-2">
//         {/* <AnimatePresence mode="wait">
//   <motion.h1
//     key={activeIndustry.name + "-title"}
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -20 }}
//     transition={{ duration: 0.3 }}
//     className="text-3xl pb-3 font-semibold text-red-600"
//   >
//     {activeIndustry.name}
//   </motion.h1>
//   <motion.div
//     key={activeIndustry.imageurl + "-image"}
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -20 }}
//     transition={{ duration: 0.3 }}
//     className="w-full h-64 mb-4 overflow-hidden rounded-lg shadow-lg"
//   >
//     {activeIndustry.imageurl && (
//       <img 
//         src={activeIndustry.imageurl} 
//         alt={activeIndustry.name} 
//         className="w-full h-full object-cover"
//       />
//     )}
//   </motion.div>
//   <motion.p
//     key={activeIndustry.name + "-desc"}
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -20 }}
//     transition={{ duration: 0.3 }}
//     className="text-gray-700 text-xl leading-relaxed mt-2 text-justify"
//   >
//     {activeIndustry.description}
//   </motion.p>
//   <h1><b>What We Serve</b></h1>
//   {activeIndustry.features && (
//     <motion.ul
//       key={activeIndustry.name + "-features"}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.3 }}
//       className="text-gray-700 text-xl leading-relaxed mt-2 text-justify"
//     >
//       {activeIndustry.features.map((feature) => (
//         <motion.li key={feature} className="list-disc ml-5">
//           {feature}
//         </motion.li>
//       ))}
//     </motion.ul>
//   )}
// </AnimatePresence> */}
//       </div>
//       <div className="relative sm:w-[300px] sm:h-[300px] w-[400px] h-[400px] flex items-center justify-center mt-8 lg:mt-0 lg:ml-8">
//         {/* Added mt-8 for vertical gap on mobile, lg:ml-8 for horizontal gap on desktop */}
//         <div className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] flex items-center justify-center"></div>
//         <motion.div
//           key={activeIndustry.name}
//           initial={{ scale: 0, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="absolute w-28 h-28 rounded-full border-2 border-green-400 flex items-center justify-center bg-white shadow-lg z-10"
//         >
//           {activeIndustry.icon}
//           <span className="absolute -bottom-8 text-sm font-medium text-gray-800">
//             {activeIndustry.name}
//           </span>
//         </motion.div>

//         {/* Outer Icons in Circle */}
//     {industries.map((industry, index) => {
//   if (index === activeIndex) return null; // skip active one

//   const outerCount = industries.length - 1;
//   const adjustedIndex = index > activeIndex ? index - 1 : index;

//   const angle = (adjustedIndex / outerCount) * 360;
//   const radian = (angle * Math.PI) / 180;
//   const radius = 140;
//   const x = Math.cos(radian) * radius;
//   const y = Math.sin(radian) * radius;

//   return (
//     <motion.div
//       key={industry.name}
//       onClick={() => setActiveIndex(index)}
//       layout   
//       animate={{ x, y }}
//       transition={{
//         type: "spring",
//         stiffness: 80,
//         damping: 15,
//       }}
//       whileHover={{ scale: 1.1 }}
//       className="absolute w-20 h-20 rounded-full border-2 border-red-300 flex items-center justify-center cursor-pointer bg-white shadow-md"
//     >
//       {industry.icon}
//     </motion.div>
//   );
// })}
//       </div>
//     </div>
//     </>
//   );
// }



import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  GiSugarCane,
  GiChemicalDrop,
} from "react-icons/gi";
import { MdLocalDrink } from "react-icons/md";
import { FaIndustry, FaTint, FaCogs, FaRegFileAlt } from "react-icons/fa";
import industryImg from "../assets/SVGINDUSTRY.jpeg";
import sparePartsImg from "../assets/spareparts1.jpg";
import repairImg from "../assets/repair.jpg";
import controlPanelImg from "../assets/controlpannel.avif";
const industries = [
  {
    name: "Cement",
    icon: <FaIndustry size={40} />,
    imageurl: industryImg,
    description:
      "The cement industry is vital in infrastructure, providing the foundation for modern construction. It plays a crucial role in shaping cities, building homes, roads, bridges, and industrial structures that drive economic growth.",
    features: [
      "VFD'S & DC Drives",
      "PLC & HMI",
      "Programming",
      "Commissioning",
      "Re-Commissioning",
      "General Electric Systems",
    ],
  },
  {
    name: "Sugar",
    icon: <GiSugarCane size={40} />,
    imageurl: controlPanelImg,
    description:
      "Sugar industries process raw materials into refined sugar for beverages and food products.",
    features: [
      "VFD'S & DC Drives",
      "PLC & HMI",
      "Programming",
      "Commissioning",
      "Re-Commissioning",
      "General Electric Systems",
    ],
  },
  {
    name: "Beverages",
    icon: <MdLocalDrink size={40} />,
    imageurl: industryImg,
    description:
      "The beverage industry produces and distributes drinks worldwide, from soft drinks to energy beverages.",
    features: [
      "VFD'S & DC Drives",
      "PLC & HMI",
      "Programming",
      "Commissioning",
      "Re-Commissioning",
      "General Electric Systems",
    ],
  },
  {
    name: "Chemicals",
    icon: <GiChemicalDrop size={40} />,
    imageurl: controlPanelImg,
    description:
      "The chemical industry drives innovation across pharmaceuticals, agriculture, and manufacturing.",
    features: [
      "VFD'S & DC Drives",
      "PLC & HMI",
      "Programming",
      "Commissioning",
      "Re-Commissioning",
      "General Electric Systems",
    ],
  },
  {
    name: "Steel",
    icon: <FaCogs size={40} />,
    imageurl: industryImg,
    description:
      "The Steel industry supports infrastructure, machinery, and technology manufacturing.",
    features: [
      "VFD'S & DC Drives",
      "PLC & HMI",
      "Programming",
      "Commissioning",
      "Re-Commissioning",
      "General Electric Systems",
    ],
  },
  {
    name: "Paper",
    icon: <FaRegFileAlt size={40} />,
    imageurl: repairImg,
    description:
      "Paper industries provide essential materials for education, communication, and packaging.",
    features: [
      "VFD'S & DC Drives",
      "PLC & HMI",
      "Programming",
      "Commissioning",
      "Re-Commissioning",
      "General Electric Systems",
    ],
  },
  {
    name: "Water",
    icon: <FaTint size={40} />,
    imageurl: sparePartsImg,
    description:
      "Water Treatment Plants ensure safe, clean water for industrial and domestic applications.",
    features: [
      "VFD'S & DC Drives",
      "PLC & HMI",
      "Programming",
      "Commissioning",
      "Re-Commissioning",
      "General Electric Systems",
    ],
  },
];

export default function IndustrySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const activeIndustry = industries[activeIndex];

  useEffect(() => {
    if (isHovering) return; // Stop animation when hovering
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % industries.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <div 
      className="py-16 px-5 bg-gray-50 flex flex-col items-center mt-6 background-industry"
    >
      {/* Heading */}
      <div className="text-center mb-10 ">
        <motion.div
          className="relative mb-3 flex flex-col items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex space-x-1 mb-2 mt-3">
            <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
            <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
            <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
            <div className="w-14 h-[5px] bgprimary rounded-full"></div>
          </div>
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight evolheading">
          INDUSTRIES WE SERVE
        </h1>
      </div>

      {/* Centered Circle Animation */}
      <div 
        className="relative w-[400px] h-[400px] flex items-center justify-center my-12"
      >
        {/* Active Industry in Center */}
        <motion.div
          key={activeIndustry.name}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute w-36 h-36 rounded-full   flex flex-col items-center justify-center bg-white shadow-xl"
        >
          {activeIndustry.icon}
          <span className="mt-2 text-base font-semibold text-gray-700">
            {activeIndustry.name}
          </span>
        </motion.div>

        {/* Other industries around circle */}
        {industries.map((industry, index) => {
          if (index === activeIndex) return null;
          const outerCount = industries.length - 1;
          const adjustedIndex = index > activeIndex ? index - 1 : index;
          const angle = (adjustedIndex / outerCount) * 360;
          const rad = (angle * Math.PI) / 180;
          const radius = 180;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;
          return (
            <motion.div
              key={industry.name}
              onClick={() => setActiveIndex(index)}
              animate={{ x, y }}
              transition={{ type: "spring", stiffness: 80, damping: 12 }}
              whileHover={{ scale: 1.1 }}
              className="absolute w-24 h-24 rounded-full border-2 border-gray-300 flex items-center justify-center cursor-pointer bg-white shadow-md"
            >
              {industry.icon}
            </motion.div>
          );
        })}
      </div>

      {/* Below Section - Full Grid Layout */}
      <div 
        className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-6"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Image */}
        <motion.div
          key={activeIndustry.imageurl}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-100 rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src={activeIndustry.imageurl}
            alt={activeIndustry.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          key={activeIndustry.name + "-text"}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold evolheading mb-4">
            {activeIndustry.name}
            <motion.div
          className="relative mb-3 flex flex-col items-start"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex space-x-1 mb-2 mt-3">
            <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
            <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
            <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
            <div className="w-14 h-[5px] bgprimary rounded-full"></div>
          </div>
        </motion.div>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4 text-justify">
            {activeIndustry.description}
          </p>
          <h3 className="text-xl font-bold mb-2">What We Serve:</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {activeIndustry.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          {activeIndustry.name === "Sugar" && (
            <Link to="/sugarindustry">
              <button className="mt-6 px-6 py-2 bgprimary text-white font-semibold rounded-lg hover:shadow-lg transition-shadow duration-300">
                View More
              </button>
            </Link>
          )}
        </motion.div>
      </div>
    </div>
  );
}
