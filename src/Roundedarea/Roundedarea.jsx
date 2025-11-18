import React, { useRef, useState, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
 // for custom CSS

const services = [
  { title: "Service 4 — Retrofitting Solutions", color: "bg-blue-400" },
  { title: "Service 2", color: "bg-green-400" },
  { title: "Service 3", color: "bg-pink-400" },
  { title: "Service 4", color: "bg-orange-400" },
];

function Roundedarea() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const section = Math.floor(latest * services.length);
    setActiveIndex(section < services.length ? section : services.length - 1);
  });

  return (
    <div
      ref={ref}
      className="h-screen overflow-y-scroll flex flex-col space-y-32 p-10"
    >
      {services.map((s, i) => (
        <div key={i} className="h-[80vh] flex items-start justify-start">
          <h2 className="text-4xl font-bold">{s.title}</h2>
        </div>
      ))}

      {/* Sticky Box */}
      <div className="fixed right-0 top-1/4">
        <div
          className={`curvedarea flex items-center justify-center text-xl font-bold text-white transition-all duration-500 ${services[activeIndex].color}`}
        >
          {services[activeIndex].title}
        </div>
      </div>
    </div>
  );
}

export default Roundedarea;
