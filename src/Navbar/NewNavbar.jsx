// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FiMenu, FiX } from "react-icons/fi";
// import { Link } from "react-router-dom";

// export default function NewNavbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navLinks = [
//     { label: "Home", href: "/" },
//     { label: "About", href: "/about" },
//     { label: "Our Services", href: "/services" },
//     { label: "Our Industries", href: "/industries" },
//   ];

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.3 }}
//       className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-[2px] border-b border-white/20"
//     >
//       <div className="mx-auto px-4 sm:px-6 py-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link to="/" className="text-[#555555] font-bold text-lg">
//             <img
//               src="/svglogoplane.png"
//               alt="Logo"
//               className="h-75 w-auto"
//             />
//           </Link>

//           {/* Desktop Links */}
//           {/* Desktop Links */}
// <div className="hidden md:flex items-center space-x-6">
//   {navLinks.map((link) => (
//     <Link
//       key={link.label}
//       to={link.href}
//       onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
//       className="text-gray-700 font-normal text-xl transition-colors 
//                  hover:text-red-500"
//     >
//       {link.label}
//     </Link>
//   ))}

//   <Link
//     to="/contact"
//     onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
//     className="px-4 py-2 cursor-pointer bg-gray-800 opacity-90 
//                hover:bg-white text-white hover:text-gray-800 rounded-full 
//                transition-colors text-xl hover:bg-[#120849] font-normal 
//                hover:font-semibold hover:shadow-2xl"
//   >
//     Contact Us
//   </Link>
// </div>

//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="text-[#291571] text-2xl"
//             >
//               {menuOpen ? <FiX /> : <FiMenu />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Dropdown */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//             className="absolute top-[100%] left-0 w-full bg-white/10 backdrop-blur-[2px] p-4 md:hidden border-b border-white/20"
//           >
//             <div className="flex flex-col space-y-4">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.label}
//                   to={link.href}
//                   onClick={() => setMenuOpen(false)}
//                   className="text-[#fa2000] font-medium transition-colors hover:text-[#fa2000]"
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//               <Link
//                 to="/contact"
//                 className="text-[#fa2000] font-medium transition-colors hover:text-[#fa2000]"
//               >
//                 Contact Us
//               </Link>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }




import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function NewNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Our Industries", href: "/industries" },
    { label: "Contact Us", href: "/contact" },
    { label: "+91 8870719804", href: "tel:+918870719804" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled
          ? "bg-gradient-to-r from-[white] via-[#ff0000] to-[#a00000] shadow-lg"
          : "bg-gradient-to-b from-white/90 via-gray-200/80 to-gray-400/40 backdrop-blur-sm"
      }`}
    >
      {/* Add subtle red glow overlay */}
      {!scrolled && (
        <div className="absolute inset-0 bg-gradient-radial from-red-500/20 via-transparent to-transparent pointer-events-none" />
      )}

      <div className="relative mx-auto px-6 py-3">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/svglogoplane.png"
              alt="Logo"
              className="h-75 w-auto object-contain"
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.label}
                to={link.href}
                onClick={() => {
                  setMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "instant" });
                }}
                className={`text-lg font-semibold transition-all ${
                  scrolled
                    ? "text-white hover:text-gray-200"
                    : "text-gray-800 hover:text-[#d00000]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`text-3xl ${
                scrolled ? "text-white" : "text-gray-800"
              }`}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`absolute top-[100%] left-0 w-full p-4 md:hidden transition-all ${
              scrolled
                ? "bg-gradient-to-r from-[#d00000] via-[#ff0000] to-[#a00000]"
                : "bg-gradient-to-b from-white/90 via-gray-200/80 to-gray-400/40 backdrop-blur-sm"
            }`}
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-lg font-medium ${
                    scrolled
                      ? "text-white hover:text-gray-200"
                      : "text-gray-800 hover:text-[#d00000]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
