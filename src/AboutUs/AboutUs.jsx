import React from "react";
import { motion } from "framer-motion";
function AboutUs() {
  return (
    <div className="relative w-full h-screen overflow-hidden entirebg">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="./v1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <section className="relative z-10 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          {/* <h1 className="text-4xl md:text-5xl mb-7  elect1 pb-5">
            About Us
          </h1> */}
                <div className="flex justify-center items-center">
  <h1 className="evolheading mb-5">
    <motion.div
                    className="relative mb-3 flex flex-col items-center "
                    initial={{ opacity: 1 }}
                   
                    
                  >
                    <div className="flex space-x-1 mb-0">
                      <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
                      <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
                      <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
                      <div className="w-14 h-[5px] bgprimary rounded-full"></div>
                    </div>
                  </motion.div>
    <b>About Us</b>
    {/* <span className="block w-42 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto  rounded-full"></span> */}
  </h1>
</div>
          <p className="text-xl">
           At Electcare Solutions, we take pride in being one of India’s most trusted providers of comprehensive electrical services, trading, and spare supply solutions. With over 11 years of proven expertise in the electrical industry, we are committed to delivering reliable, efficient, and cost-effective solutions that ensure optimal performance, safety, and sustainability. Our core competencies include electrical panel servicing, preventive maintenance, and system refurbishment, enabling clients to achieve seamless operations and long-term reliability. We also offer a wide range of genuine electrical components, spare parts, and control accessories from globally renowned brands, empowering businesses to maintain, upgrade, and enhance their systems with confidence. At Electcare Solutions, we are driven by a commitment to quality, innovation, and service excellence, powering progress across industries.
          </p>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center mt-6">
          {/* <p className="text-xl my-6">
            We specialize in electrical panel servicing, maintenance, and refurbishment, ensuring uninterrupted performance and long-term safety. In addition, we offer a wide range of genuine electrical components, spare parts, and control accessories sourced from top brands, enabling clients to maintain and upgrade their systems with confidence.
          </p> */}
          <p className="text-lg  italic">
            "Your success is our blueprint."
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
