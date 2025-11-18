import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ServicesScroll({ content }) {
  const { scrollYProgress } = useScroll();

  // background color changes with scroll
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    ["#fef2e2", "#fde2e4", "#e2fbe2", "#ffffff"] // orange → red → green → white
  );

  return (
    <motion.div
      style={{ backgroundColor: bgColor }}
      className="relative flex min-h-screen w-full"
    >
      {/* Left: Text */}
      <div className="flex-1 flex flex-col justify-center px-12 py-24">
        {content.map((item, i) => (
          <motion.div
            key={i}
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {item.title}
            </h2>
            <p className="text-gray-600 max-w-md">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Right: Semicircle with image */}
      <div className="relative w-1/2 flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ backgroundColor: bgColor }}
          className="absolute right-0 h-full w-[200%] rounded-l-full"
        />
        <div className="relative z-10 w-2/3">
          {content.map((item, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.3 }}
              viewport={{ once: true }}
            >
              {item.content}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
