// // import React from "react";

// // function Vdbanner() {
// //   return (
// //     <div className="relative w-full h-screen overflow-hidden">
// //       {/* Background Video */}
// //       <video
// //         className="absolute top-0 left-0 w-full h-full object-cover"
// //         src="./expertvideo.mp4" // replace with your video path
// //         autoPlay
// //         loop
// //         muted
// //         playsInline
// //       />

// //       {/* Overlay (optional dark layer for readability) */}
// //       <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

// //       {/* Content */}
// //       <div className="relative z-10  h-full  text-white px-6">
// //         <h1 className="text-4xl md:text-6xl font-bold mb-4">
// //           Powering the Future
// //         </h1>
// //         <p className="text-lg md:text-2xl max-w-2xl">
// //           Reliable solutions for industries worldwide.
// //         </p>
// //         <button className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg shadow-md text-lg font-semibold">
// //           Get Started
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Vdbanner;







// import React from "react";
// import { Link } from "react-router-dom";

// function Vdbanner() {
//   return (
//     <div className="relative w-full h-screen ">
//       {/* Background Video */}
//      <video
//   className="absolute top-0 left-0 w-full h-full object-cover min-h-screen  min-w-full"
//   src="./expertvideo.mp4"
//   autoPlay
//   loop
//   muted
//   playsInline
// />

 
//       {/* Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

//       {/* Content */}
//       <div className="relative z-10 h-full flex items-center justify-start px-10 text-white">
//         <div className="max-w-2xl">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">
//             Powering the Future
//           </h1>
//           <p className="text-lg md:text-2xl">
//             Reliable solutions for industries worldwide.
//           </p>
//           <Link to="/services">
//           <button className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg shadow-md text-lg font-semibold">
//             Know More
//           </button></Link>

//         </div>
//       </div>
//     </div>
//   );
// }
// export default Vdbanner;
///animated banner

import React from 'react';
import './WDbanner.css';
import { Link } from "react-router-dom";
function Vdbanner() {
  return (
    <div className="video-container hidden lg:block">
      <video 
        className="background-video"
        src="./bluepart.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
      />
       <video 
        className="background-video block lg:hidden"
        src="./mobilebanner.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline 
      />
      <div className="content">
      
         <h1 className="hidden md:block text-3xl md:text-6xl font-bold mb-4 pt-2 md:pt-0 text-red-100 ">
            Powering the Future
          </h1>
          <h1 className="block md:hidden text-3xl md:text-6xl font-bold mb-1 md:pt-0 text-red-100  md:text-left">
  Powering the<br/> Future
</h1>
           <p className="hidden md:block text-lg md:text-2xl">
          Reliable solutions for industries worldwide.
          </p>
           <p className="block md:hidden text-md md:text-xl">  
         Reliable solutions <br/>for industries worldwide.
          </p>
         
           <Link to="/services">
            <button className="mt-3 md:mt-7 px-3 md:px-6 py-2 md:py-3 bg-[#f50000] opacity-70 rounded-lg shadow-md text-lg font-semibold cursor:pointer">
              Know More
            </button>
        
          </Link>
      </div>
    </div>
  );
}

export default Vdbanner;
