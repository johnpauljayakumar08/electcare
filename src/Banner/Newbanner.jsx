// import React from "react";
// import { CheckCircle } from "lucide-react";

// function Newbanner() {
//   return (
//     <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
//       {/* Left Section */}
//       <div>
//         <h1 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900">
//           Expert Electcare <br /> Installations for Your{" "}
//           <span className="text-blue-600">Home and Business</span>
//         </h1>
//         <ul className="mt-6 space-y-3 text-gray-700">
//           <li className="flex items-center gap-2">
//             <CheckCircle className="text-green-500 w-5 h-5" />
//             Certified professionals with extensive experience.
//           </li>
//           <li className="flex items-center gap-2">
//             <CheckCircle className="text-green-500 w-5 h-5" />
//             We use top-grade materials for long-lasting results.
//           </li>
//           <li className="flex items-center gap-2">
//             <CheckCircle className="text-green-500 w-5 h-5" />
//             We prioritize your safety and satisfaction above all.
//           </li>
//         </ul>

//         <div className="mt-6 flex items-center gap-6">
//           <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md">
//             Know More
//           </button>
//           <div className="text-sm text-gray-600">
//             <div className="flex -space-x-2">
//               <img
//                 className="w-8 h-8 rounded-full border-2 border-white"
//                 src="https://randomuser.me/api/portraits/men/32.jpg"
//                 alt="client"
//               />
//               <img
//                 className="w-8 h-8 rounded-full border-2 border-white"
//                 src="https://randomuser.me/api/portraits/women/44.jpg"
//                 alt="client"
//               />
//               <img
//                 className="w-8 h-8 rounded-full border-2 border-white"
//                 src="https://randomuser.me/api/portraits/men/52.jpg"
//                 alt="client"
//               />
//             </div>
//             <p className="mt-1">360K+ Satisfied Clients</p>
//           </div>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="relative flex flex-col items-center space-y-6">
//         {/* Google Rating */}
//         <div className="absolute top-0 left-0 text-white bg-green-700 shadow-md rounded-lg p-3 flex items-center gap-2">
//          <p>a</p>
//         </div>
//  <div className="absolute top-40 right-50 text-white  bg-green-700 shadow-md rounded-lg p-3 flex items-center gap-2">
//          <p>1</p>
//         </div>
//         {/* Electrician image */}
        

//         {/* Expert card */}
       

//         {/* Happy worker */}
 


   
       
//       </div>
//     </div>
//   );
// }

// export default Newbanner;


import React from "react";
import { CheckCircle } from "lucide-react";
import RombassGrid from "./RombassGrid";

function Newbanner() {
  return (
    <div className="container py-30 mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative py-6">
      {/* Left Section */}
      <div>
        <h1 className="text-3xl md:text-6xl font-bold leading-snug text-gray-900">
          Expert Electcare <br /> Installations for Your{" "}
          <span className="text-blue-600">Home and Business</span>
        </h1>
        <ul className="mt-6 space-y-3 text-gray-700">
          <li className="flex items-center gap-2">
            <CheckCircle className="text-green-500 w-5 h-5" />
            Certified professionals with extensive experience.
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="text-green-500 w-5 h-5" />
            We use top-grade materials for long-lasting results.
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle className="text-green-500 w-5 h-5" />
            We prioritize your safety and satisfaction above all.
          </li>
        </ul>

        <div className="mt-6 flex items-center gap-6">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg shadow-md ">
            Know More
          </button>
          <div className="text-sm text-gray-600">
            <div className="flex -space-x-2">
              <img
                className="w-8 h-8 rounded-full border-2 border-white"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="client"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-white"
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="client"
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-white"
                src="https://randomuser.me/api/portraits/men/52.jpg"
                alt="client"
              />
            </div>
            <p className="mt-1">360K+ Satisfied Clients</p>
          </div>
        </div>
      </div>

      {/* Right Section - Diamond Shapes */}
      <div className="flex flex-row items-center space-y-10">
        <RombassGrid/>
      </div>
    </div>
  );
}

export default Newbanner;
