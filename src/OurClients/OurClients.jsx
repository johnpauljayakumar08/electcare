// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// import client1 from "../assets/Inovance.png";
// import client2 from "../assets/ABB Logo.png";
// import client3 from "../assets/SiemensLogo.png";
// import client4 from "../assets/Danfoss-Logo.png";
// import client5 from "../assets/omron-logo.png";
// import client6 from "../assets/Weintek-LOGO.png";
// import client7 from "../assets/Schneiders.png";
// import client8 from "../assets/Eaton.png";
// import client9 from "../assets/MitsubishiElectric.png";
// import client10 from "../assets/polycab.jpg";

// const clients = [
//   { src: client1, alt: "Inovance" },
//   { src: client2, alt: "ABB" },
//   { src: client3, alt: "Siemens" },
//   { src: client4, alt: "Danfoss" },
//   { src: client5, alt: "Omron" },
//   { src: client6, alt: "Weintek" },
//   { src: client7, alt: "Schneiders" },
//   { src: client8, alt: "Eaton" },
//   { src: client9, alt: "Mitsubishi" },
//   { src: client10, alt: "Polycab" },
// ];

// export default function OurClients() {
//   const [index, setIndex] = useState(0);
//   const [visible, setVisible] = useState(5);
//   const total = clients.length;

//   // Handle responsive logo count
//   useEffect(() => {
//     const updateVisible = () => {
//       if (window.innerWidth < 640) setVisible(1); // mobile
//       else if (window.innerWidth < 1024) setVisible(2); // tablet
//       else setVisible(4); // desktop
//     };
//     updateVisible();
//     window.addEventListener("resize", updateVisible);
//     return () => window.removeEventListener("resize", updateVisible);
//   }, []);

//   // Auto-slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [index]);

//   const handleNext = () => {
//     setIndex((prev) => (prev + 1) % total);
//   };

//   const handlePrev = () => {
//     setIndex((prev) => (prev - 1 + total) % total);
//   };

//   // Get visible logos
//   const visibleClients = [];
//   for (let i = 0; i < visible; i++) {
//     visibleClients.push(clients[(index + i) % total]);
//   }

//   return (
//     <div className="py-20 bg-[#FEFFED] relative overflow-hidden">
//       {/* --- Heading --- */}
//       <div className="text-center mb-12">
//         <div className="flex flex-col items-center mb-3">
//           <div className="flex space-x-1 mb-1">
//             <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
//             <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
//             <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
//             <div className="w-14 h-[5px] bgprimary rounded-full"></div>
//           </div>
//         </div>
//         <h2 className="text-4xl font-bold evolheading">Our Partners</h2>
//       </div>

//       {/* --- Carousel --- */}
//       <div className="relative flex justify-center items-center">
//         {/* Left Arrow */}
//         {/* <button
//           onClick={handlePrev}
//           className="absolute left-6 md:left-10 text-white bg-white/20 hover:bg-white/40 p-2 rounded-full transition-all z-10"
//         >
//           <ChevronLeft size={28} />
//         </button> */}

//         {/* Logo Row */}
//         <div className="overflow-hidden w-full flex justify-center items-center">
//           <motion.div
//             key={index}
//             className="flex gap-6"
//             initial={{ x: 50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: -50, opacity: 0 }}
//             transition={{ duration: 0.6, ease: "easeInOut" }}
//           >
//             {visibleClients.map((client, i) => (
//               <div
//                 key={i}
//                 className="bg-white rounded-xl shadow-lg flex items-center justify-center p-6 h-32 w-48 sm:w-64 md:w-60 lg:w-64 hover:scale-105 transition-transform duration-300"
//               >
//                 <img
//                   src={client.src}
//                   alt={client.alt}
//                   className="max-h-full w-full object-contain"
//                 />
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Right Arrow */}
//         {/* <button
//           onClick={handleNext}
//           className="absolute right-6 md:right-10 text-white bg-white/20 hover:bg-white/40 p-2 rounded-full transition-all z-10"
//         >
//           <ChevronRight size={28} />
//         </button> */}
//       </div>

//       {/* --- Dots --- */}
//       <div className="flex justify-center items-center mt-8 space-x-2">
//         {clients.map((_, i) => (
//           <span
//             key={i}
//             onClick={() => setIndex(i)}
//             className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
//               i === index ? "bgprimary scale-125" : "bg-gray-400"
//             }`}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import client1 from "../assets/Inovance.png";
import client2 from "../assets/ABB Logo.png";
import client3 from "../assets/SiemensLogo.png";
import client4 from "../assets/Danfoss-Logo.png";
import client5 from "../assets/omron-logo.png";
import client6 from "../assets/Weintek-LOGO.png";
import client7 from "../assets/Schneiders.png";
import client8 from "../assets/Eaton.png";
import client9 from "../assets/MitsubishiElectric.png";
import client10 from "../assets/polycab.jpg";

const clients = [
  { src: client1, alt: "Inovance" },
  { src: client2, alt: "ABB" },
  { src: client3, alt: "Siemens" },
  { src: client4, alt: "Danfoss" },
  { src: client5, alt: "Omron" },
  { src: client6, alt: "Weintek" },
  { src: client7, alt: "Schneiders" },
  { src: client8, alt: "Eaton" },
  { src: client9, alt: "Mitsubishi" },
  { src: client10, alt: "Polycab" },
];

export default function OurClients() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(5);
  const total = clients.length;

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(4);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  const handleNext = () => setIndex((prev) => (prev + 1) % total);
  const handlePrev = () => setIndex((prev) => (prev - 1 + total) % total);

  const visibleClients = [];
  for (let i = 0; i < visible; i++) {
    visibleClients.push(clients[(index + i) % total]);
  }

  return (
    <div
      className="py-24 relative overflow-hidden bg-gradient-to-br from-[#F8FAFF] via-[#FEFFED] to-[#EAF4FF]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }}
    >
      {/* --- Floating Blur Backgrounds --- */}
      <motion.div
        className="absolute top-10 left-10 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl"
        animate={{ y: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-72 h-72 bg-yellow-200/40 rounded-full blur-3xl"
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
      />

      {/* --- Section Heading --- */}
      <div className="text-center mb-16 relative z-10">
        <div className="flex flex-col items-center mb-3">
          <div className="flex space-x-1 mb-1">
            <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
            <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
            <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
            <div className="w-14 h-[5px] bgprimary rounded-full"></div>
          </div>
        </div>
        <h2 className="text-4xl font-bold evolheading">Our Partners</h2>
        <p className="text-gray-500 mt-2">Trusted by world-class technology leaders</p>
      </div>

      {/* --- Carousel --- */}
      <div className="relative flex justify-center items-center">
        <div className="overflow-hidden w-full flex justify-center items-center">
          <motion.div
            key={index}
            className="flex gap-8"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {visibleClients.map((client, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white/50 backdrop-blur-md rounded-2xl shadow-lg flex items-center justify-center  h-32 w-48 sm:w-64 md:w-60 lg:w-64 border border-white/40 transition-all duration-300"
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className="max-h-full w-full object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* --- Dots --- */}
      <div className="flex justify-center items-center mt-10 space-x-2 relative z-10">
        {clients.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              i === index ? "bgprimary scale-125" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
