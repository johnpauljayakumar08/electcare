// import React from "react";
// import "./whyelectcare.css";
// import {
//   Handshake,
//   Star,
//   Scale,
//   Lightbulb,
//   Users,
//   Smile,
//   Rocket,
// } from "lucide-react";

// export default function WhyElectcare() {
//   const smallBoxes = [
//     {
//       icon: <Handshake className="text-[#f00005]" size={28} />,
//       text: "Commitment & Responsible",
//     },
//     {
//       icon: <Star className="text-[#f00005]" size={28} />,
//       text: "Quality",
//     },
//     {
//       icon: <Scale className="text-[#f00005]" size={28} />,
//       text: "Ethics",
//     },
//     {
//       icon: <Lightbulb className="text-[#f00005]" size={28} />,
//       text: "Idealogy",
//     },
//     {
//       icon: <Users className="text-[#f00005]" size={28} />,
//       text: "Team Work",
//     },
//     {
//       icon: <Smile className="text-[#f00005]" size={28} />,
//       text: "Customer Focus",
//     },
//     {
//       icon: <Rocket className="text-[#f00005]" size={28} />,
//       text: "Innovation",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
//       <div className="w-full max-w-5xl">
//         {/* --- Mobile Heading --- */}
//         <div className="bgprimarywhy text-white rounded-xl flex flex-col items-center justify-center p-6 text-center mb-6 md:hidden">
//           <h2 className="text-3xl font-bold mb-2">Why Electcare</h2>
//           <p className="text-sm max-w-xs">
//             Delivering innovative, reliable, and sustainable electrical solutions with excellence and trust.
//           </p>
//         </div>

//         {/* --- Desktop Grid Layout --- */}
//         <div className="hidden md:grid grid-cols-3 grid-rows-3 gap-6">
//           {/* Row 1 */}
//           <div className="bg-white shadow-md rounded-xl flex flex-col items-center justify-center p-4 ">
//             {smallBoxes[0].icon}
//             <p className="text-gray-700 mt-2 text-sm font-semibold">{smallBoxes[0].text}</p>
//           </div>

//           <div></div>

//           <div className="bg-white shadow-md rounded-xl flex flex-col items-center justify-center p-4">
//             {smallBoxes[1].icon}
//             <p className="text-gray-700 mt-2 text-sm font-semibold">{smallBoxes[1].text}</p>
//           </div>

//           {/* Row 2 */}
//           <div className="bg-white shadow-md rounded-xl flex flex-col items-center justify-center p-4">
//             {smallBoxes[2].icon}
//             <p className="text-gray-700 mt-2 text-sm font-semibold">{smallBoxes[2].text}</p>
//           </div>

//           <div className="bgprimarywhy text-white rounded-xl flex flex-col items-center justify-center p-6 text-center">
//             <h2 className="text-3xl font-bold mb-2">Why Electcare</h2>
//             <p className="text-sm max-w-xs">
//               Delivering innovative, reliable, and sustainable electrical solutions with excellence and trust.
//             </p>
//           </div>

//           <div className="bg-white shadow-md rounded-xl flex flex-col items-center justify-center p-4">
//             {smallBoxes[3].icon}
//             <p className="text-gray-700 mt-2 text-sm font-semibold">{smallBoxes[3].text}</p>
//           </div>

//           {/* Row 3 */}
//           <div className="bg-white shadow-md rounded-xl flex flex-col items-center justify-center p-4">
//             {smallBoxes[4].icon}
//             <p className="text-gray-700 mt-2 text-sm font-semibold">{smallBoxes[4].text}</p>
//           </div>

//           <div className="bg-white shadow-md rounded-xl flex flex-col items-center justify-center p-4">
//             {smallBoxes[5].icon}
//             <p className="text-gray-700 mt-2 text-sm font-semibold">{smallBoxes[5].text}</p>
//           </div>

//           <div className="bg-white shadow-md rounded-xl flex flex-col items-center justify-center p-4">
//             {smallBoxes[6].icon}
//             <p className="text-gray-700 mt-2 text-sm font-semibold">{smallBoxes[6].text}</p>
//           </div>
//         </div>

//         {/* --- Mobile Layout --- */}
//         <div className="grid grid-cols-1 gap-4 md:hidden">
//           {smallBoxes.map((box, i) => (
//             <div
//               key={i}
//               className="bg-white shadow-md rounded-xl flex flex-col items-center justify-center p-4"
//             >
//               {box.icon}
//               <p className="text-gray-700 mt-2 text-sm font-semibold">{box.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import { motion } from "framer-motion";

export default function WhatWeServe() {
  const services = [
    { title: "Commitment to Quality & Responsibility", color: "bg-[#ff604f]" },
    { title: "Value-Driven Mindset & Team Collaboration", color: "bg-[#ffff]" },
    { title: "Customer Focus & Innovation", color: "bg-[#ffff]" },
    
  ];

  return (
    <section className="w-full bg-[#FFF6F2] py-20 px-6 md:px-24 flex flex-col md:flex-row items-start justify-between">
      {/* Left Section */}
      <div className="md:w-1/2 my-auto md:pr-10">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1E2A39] mb-6">
          Why Electcare
        </h2>
        <p className="text-lg text-[#555D68] leading-relaxed max-w-lg">
         Delivering innovative, reliable, and sustainable electrical solutions with excellence and trust.
        </p>
      </div>

      {/* Right Section - reveal on scroll */}
      <div className="md:w-1/2 mt-10 md:mt-0 space-y-6">
        {services.map((item, index) => (
          <motion.div
            key={index}
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
            className={`${item.color} px-8 py-5 rounded-3xl drop-shadow-md w-full md:w-[75%]`}
          >
            <h3 className="font-semibold text-lg text-[#1E2A39]">
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
