// import React from "react";
// import { Timeline } from "./Timeline";
// import svgfactory from "../../src/assets/SVGINDUSTRY.jpeg";
// import svgpanel from "../../src/assets/svgpanel.jpeg";

// export function TimelineMain() {
//   const data = [
//     {
//       title: "2017",
//       content: (
//         <div>
//           <p
//             className="mb-8 text-xs font-normal md:text-lg dark:text-dark-800">
//             SVG Electric & Control Products was started its business
// activities in the year 2017 by Mr.S.Venugopal B.E., DEEE, PGDIA. as
// a service provider. He is a first generation entrepreneur hailing
// from Krishnagiri District, TamilNadu (India).
//           </p>
//           <div className="grid grid-cols-2 gap-4">
//             <img
//               src="https://content.jdmagicbox.com/v2/comp/bangalore/86/080p5114186/catalogue/pragathi-controls-kanakapura-road-bangalore-panel-board-manufacturers-1xgs7uu.jpg"
//               alt="startup template"
//               width={500}
//               height={500}
//               className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
//             <img
//               src="https://i0.wp.com/www.ecegroup.in/wp-content/uploads/2023/06/apfc-panel2.jpg?fit=1000%2C750&ssl=1"
//               alt="startup template"
//               width={500}
//               height={500}
//               className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
           
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "2018",
//       content: (
//         <div>
//           <p
//             className="mb-8 text-xs font-normal md:text-lg dark:text-dark-800">
//            But it legally registered as a Sole Proprietorship firm in 2018 in the industry. He has more than 5 years’ experience in Control panels, Drives & Automation fields. He successfully commissioned lot sugar automation projects.
//           
</p>
         
//           <div className="grid grid-cols-2 gap-4">
//             <img
//               src={svgpanel}
//               alt="hero template"
//               width={500}
//               height={500}
//               className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
           
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "2023",
//       content: (
//         <div>
//           <p
//             className="mb-8 text-xs font-normal md:text-lg dark:text-dark-800">
//            5+ Years of Excellence
//           </p>
//           <div className="mb-8">
//             <div
//               className="mb-8 text-xs font-normal md:text-lg dark:text-dark-800">
//               Achieved expertise in Control Panels, Drives & Automation with numerous successful projects.

//             </div>
           
           
//           </div>
//           <div className="grid grid-cols-2 gap-4">
           
//             <img
//               src={svgfactory}
//               alt="bento template"
//               width={500}
//               height={500}
//               className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
//           </div>
//         </div>
//       ),
//     },
//   ];
//   return (
//     <div className="relative w-full overflow-clip">
//       <h1 className="text-4xl md:text-5xl font-light text-center pt-3 tracking-tight elect1">Our Evolution</h1>
//       <Timeline data={data} />
//     </div>
//   );
// }



// src/components/EvolutionTimeline.jsx
// src/components/EvolutionTimeline.jsx
import React from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2018",
    text: "We started our journey with a small but passionate team.",
  },
  {
    year: "2019",
    text: "Expanded our services and built strong partnerships.",
  },
  {
    year: "2020",
    text: "Adapted to global challenges and went fully digital.",
  },
  {
    year: "2021",
    text: "Launched innovative solutions for our clients.",
  },
  {
    year: "2022",
    text: "Grew exponentially and reached international markets.",
  },
  {
    year: "2023",
    text: "Continuing to evolve with creativity and excellence.",
  },
];

export default function TimelineMain() {
  return (
    <section className="relative w-full py-20 bg-white overflow-hidden">
      {/* Timeline Line */}
      <motion.div
        className="absolute left-1/2 top-0 h-full w-2 bg-red-500 transform -translate-x-1/2 rounded"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true }}
      />

      <div className="max-w-6xl mx-auto space-y-24 relative z-10">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className={`relative flex items-center w-full ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -150 : 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Year Circle */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
                delay: 0.2,
              }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative flex items-center justify-center w-20 h-20 rounded-full bg-white border-4 border-red-500 text-red-600 font-bold text-lg shadow-lg cursor-pointer"
                whileHover={{ scale: 1.15, rotate: 5 }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                {item.year}
                <div className="absolute -bottom-3 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[16px] border-transparent border-t-red-500"></div>
              </motion.div>
            </motion.div>

            {/* Text Card */}
            <motion.div
              className={`w-[40%] p-6 border-2 border-red-400 rounded-md shadow-lg bg-white ${
                index % 2 === 0 ? "ml-32" : "mr-32"
              }`}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 text-lg">{item.text}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
