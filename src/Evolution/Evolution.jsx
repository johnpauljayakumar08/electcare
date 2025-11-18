
import React from "react";
import { motion } from "framer-motion";
import "./Evolution.css";
const timelineData = [
  {
    year: "2017",
    text: "Humble Beginnings with a Clear Vision Established in 2017, began its journey as a humble provider of specialized electrical services. From the outset, we have consistently delivered professional freelance solutions with precision, reliability, and an unwavering commitment to quality. Our expertise has illuminated every project, powering progress one connection at a time.",
  },
  {
    year: "2018",
    text: "From Vision to Reality — Powered Since 25th April 2018 SVG Electric & Control Products was officially registered on 25th April 2018, marking the beginning of our journey as a trusted service provider. Built on a foundation of strong customer trust and commitment to quality, we set out to deliver dependable electrical and control solutions tailored to our clients’ needs.",
  },
  {
    year: "2019",
    text: "The Spark of an Idea: We launched trading operations.In 2019, SVG Electric turned vision into action by launching its trading operations. From that pivotal moment, we’ve been delivering reliable, customer-driven electrical solutions—built from the ground up to power homes, businesses, and progress.",
  },
  {
    year: "2020",
    text: "The Spark of an Idea: We launched manufacturing operations.In 2020: We ignited our next chapter by launching electric panel manufacturing operations, expanding our capabilities to deliver end-to-end power solutions with precision and performance at the core.",
  },
  {
    year: "2021",
    text: "Between 2021 and 2023, SVG Electric advanced step by step—evolving with purpose, precision, and perseverance. Each milestone marked meaningful progress, turning challenges into powerful opportunities and fuelling the next stage of our journey.",
  },
  {
    year: "2023",
    text: "SVG Electric acquired 1.62 acres of land in Pochampalli SIPCOT, marking a bold step toward future infrastructure and expansion. This strategic milestone set the stage for building a dedicated space focused on innovation, operational excellence, and long-term service growth.",
  },
  {
    year: "2024",
    text: "SVG Electric further expanded its footprint by acquiring an additional 1 acre of land in Pochampalli SIPCOT, bringing the total land owned to 2.62 acres. These strategic acquisitions underscore our unwavering commitment to growth and the development of a state-of-the-art facility designed to drive innovation and excellence.",
  },
  {
    year: "2024",
    text: "In May 2024: A New Identity, A Renewed Commitment SVG Electric underwent a strategic rebranding and was officially renamed ElectCare Solutions. This transformation reflects our renewed dedication to innovation, excellence, and delivering superior electrical services with an unwavering focus on customer satisfaction. This marks an exciting new chapter in our journey toward powering progress with care and precision.",
  },
  {
    year: "2024",
    text: "In October 2024: Establishing Hertson Electric Limited as a Public Limited Company Responding to customer feedback and evolving market needs, Hertson Electric Limited was established as a public limited company focused on product manufacturing.As part of this strategic reorganization, the business was divided into two distinct entities:Hertson Electric Limited, dedicated to product development & manufacturing, and ElectCare Solutions, responsible for service and trading operations.This restructuring allows for greater specialization in each domain, reinforcing our commitment to excellence in both product innovation and service delivery.",
  },
  {
    year: "2025",
    text: "Establishing Electcare Solutions as a Public Limited Company",
  },
];

export default function Evolution() {
  return (
    <>
      
        <div class="services-intro  ">
               <h1 className="text-4xl md:text-5xl font-bold text-center my-8 evolheading">
                <motion.div
                                          className="relative mb-3 flex flex-col items-center "
                                          initial={{ opacity: 1 }}
                                         
                                          
                                        >
                                          <div className="flex space-x-1 mb-1 mt-3">
                                            <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
                                            <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
                                            <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
                                            <div className="w-14 h-[5px] bgprimary rounded-full"></div>
                                          </div>
                                        </motion.div>
        Our Evolution
        {/* <span className="block w-42 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto  rounded-full"></span> */}
      </h1>
            </div>
      <section className="relative w-full py-20  overflow-hidden">
        {/* Vertical Timeline Line */}
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
  className={`absolute ${index % 2 === 0 ? 'left-[20%]' : 'right-[20%]'} -top-10 z-10`}
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
    className="relative flex items-center justify-center w-20 h-20 rounded-full bg-red-500 text-white font-bold text-2xl shadow-lg cursor-pointer"
    whileHover={{ scale: 1.1 }}
    animate={{ y: [0, -4, 0] }}
    transition={{
      repeat: Infinity,
      duration: 2,
      ease: "easeInOut",
    }}
  >
    {item.year}
    <div className="absolute -bottom-2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[12px] border-transparent border-t-red-500"></div>
  </motion.div>
</motion.div>
              {/* Text Card */}
              {/* <motion.div
                className={`w-[40%] p-6 border border-gray-300 rounded-xl shadow-lg bg-gray-100 
                transition-all duration-500 cursor-pointer ${
                  index % 2 === 0 ? "ml-32" : "mr-32"
                }`}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-800 text-lg transition-colors duration-500 group-hover:text-white">
                  {item.text}
                </p>
              </motion.div> */}

              <motion.div
  className={`w-full md:w-[70%] lg:w-[40%] p-6 mt-10 border border-gray-300 rounded-xl shadow-lg 
  bg-white transition-all duration-500 relative ${
    index % 2 === 0 ? "md:ml-32" : "md:mr-32"
  }`}
  whileHover={{ scale: 1.05 }}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
  viewport={{ once: true }}
>
  <p className="text-gray-800 text-lg transition-colors duration-500 group-hover:text-white">
    {item.text}
  </p>
</motion.div>

            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
