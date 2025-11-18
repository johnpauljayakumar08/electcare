// // import React from "react";
// // import { motion } from "framer-motion";

// // // Example service list
// // const services = [
// //   { title: "VFD'S & DC DRIVES"},
// //   { title: "PLC and HMI" },
// //   { title: "Programming" },
// //   { title: "Commisioning"},
// //   { title: "Re-Commisioning"},
// //   { title: "General Electric Systems"},
// // ];

// // // Color sequence
// // const colors = ["bg-orange-200", "bg-red-200", "bg-green-200"];

// // const cardVariants = {
// //   hidden: { opacity: 0, y: 50 },
// //   visible: (i) => ({
// //     opacity: 1,
// //     y: 0,
// //     transition: { delay: i * 0.4, duration: 0.8, ease: "easeOut" },
// //   }),
// // };

// // function OurServices() {
// //   return (
// //     <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-16 py-16 bg-gradient-to-r from-orange-50 to-red-50">
// //       {/* Left Section */}
// //       <div className="flex-1 text-center md:text-left mb-12 md:mb-0">
// //         <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-800">
// //           What We Serve
// //         </h1>
// //         <p className="mt-4 text-gray-600 max-w-md">
// //           We provide world-class automation and control solutions tailored for
// //           your industry needs. From design to execution, we’ve got you covered.
// //         </p>
// //       </div>

// //       {/* Right Section - Service Cards */}
// //       <div className="flex-1 grid gap-6">
// //         {services.map((service, index) => (
// //           <motion.div
// //             key={index}
// //             custom={index}
// //             variants={cardVariants}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true, amount: 0.3 }}
// //             className={`p-6 rounded-2xl shadow-md ${
// //               colors[index % colors.length]
// //             }`}
// //           >
// //             <h3 className="text-xl font-semibold text-gray-800">
// //               {service.title}
// //             </h3>
          
// //           </motion.div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default OurServices;


// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import "./Ourservices.css";
// import SwiperCard3D from '../Swipingcard/Swipingcard';
// const texts = ["SAP Services", "IT Services", "Digital Marketing Services", "HR Consultancy"];
// function Ourservices() {
//   const [currentText, setCurrentText] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentText((prevText) => (prevText + 1) % texts.length);
//     }, 5100);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className='container servicesbg my-5 pt-5' id='ourservices'>
//       <div className='row'>
//         <div className='col-12 lg:col-6 '>
//           <h1 className='serviceheading'>
//             <span className='servetext text-center'>Our Services</span>
//           </h1>
//           <motion.h4
//             className='saptext py-3'
//             key={currentText}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//             transition={{ duration: 1 }}
//           >
//             {texts[currentText]}
//           </motion.h4>
//           {/* Conditional rendering for small devices */}
//           {currentText === 0 && <p className='small-device-text text-center prt d-block d-md-none '>Innovation drives us to help clients redefine their future, leveraging our know-how to achieve continuous improvement and lasting success.</p>}
//           {currentText === 1 && <p className='small-device-text text-center prt d-block d-md-none'>We blend industry insights, top technologies, and expert execution to optimize IT Services and tailor solutions that drive your success.</p>}
//           {currentText === 2 && <p className='small-device-text text-center prt d-block d-md-none'>We partner with ambitious brands to drive growth through creative solutions in AI, branding, tech advisory, and digital strategy, blending design and tech to solve challenges and enhance digital platforms.</p>}
//           {currentText === 3 && <p className='small-device-text text-center prt d-block d-md-none'>We don’t just place talent; we create opportunities. Our mission is to empower individuals and organizations, driving meaningful impact that transforms careers, communities, and economies.</p>}
//         </div>
//         <div className='col-12 col:lg-6 px-2 d-none d-md-block'>
//           <SwiperCard3D />
//         </div>
      
//       </div>
//     </div>
//   );
// }

// export default Ourservices;



import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Ourservices.css";
import SwiperCard3D from "../Swipingcard/Swipingcard";
const texts = [
  "Repairing",
  "Annual Maintenance Charges (AMC)",
  "Comprehensive Maintenance Contract (CMC)",
  "Genuine Spares Supply",
  "Retrofitting Solutions",
  "Erection Support",
  "On Site Support",
  "Maintenance Support",
  "Online Support",
];

function Ourservices() {
  const [currentText, setCurrentText] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % texts.length);
    }, 5100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="servicesbg my-10 pt-5" id="ourservices">
   <div class="flex flex-col lg:flex-row w-full">
 
  <div class="w-full lg:w-1/2 p-4">
   
          <h1 className="serviceheading">
            <span className="servetext text-center">Our Services</span>
            <motion.div
                                className="relative mb-3 flex flex-col items-start bg-danger"
                                initial={{ opacity: 1 }}
                               
                                
                              >
                                <div className="flex space-x-1 mb-1">
                                  <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
                                  <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
                                  <span className="w-1.5 h-1.5 bgprimary rounded-full"></span>
                                  <div className="w-14 h-[5px] bgprimary rounded-full"></div>
                                </div>
                              </motion.div>
            {/* <span className="block w-72 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent mx-auto lg:ml-0 rounded-full"></span> */}
          </h1>

          <motion.h4
            className="saptext"
            key={currentText}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}>
            {texts[currentText]}
          </motion.h4>
        </div>
 

  <div class="w-full lg:w-1/2 p-4">
     <SwiperCard3D />
  </div>
</div>

      
    </div>
  );
}

export default Ourservices;
