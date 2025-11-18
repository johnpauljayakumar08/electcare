
import React from "react";
import { Mail, Phone } from 'lucide-react';
import { Facebook, Twitter, Instagram, Linkedin,X } from "lucide-react";
import logo from "../assets/svglogoplane.png";
const socialIcons = {
  facebook: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
      fill="currentColor" className="w-4 h-4">
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h2V2h-3c-3.87 0-5 2.53-5 5.5v3H6v4h3v9h5v-9z" />
    </svg>
  ),
  twitter: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
      fill="currentColor" className="w-4 h-4">
      <path d="M17.21 3H20l-6.59 7.56L20.5 21h-6.32l-4.95-6.44L3.74 21H1l7.18-8.23L1 3h6.32l4.53 6.06L17.21 3zM16.07 19h1.75L8.09 5h-1.9l9.88 14z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor"
      xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
      <path fillRule="evenodd" clipRule="evenodd"
        d="M12 18C15.3137 18 18 15.3137 18 12C18 
        8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 
        6 12C6 15.3137 8.68629 18 12 18Z" />
      <path d="M18 5C17.4477 5 17 5.44772 
        17 6C17 6.55228 17.4477 7 18 
        7C18.5523 7 19 6.55228 19 
        6C19 5.44772 18.5523 5 18 5Z" />
    </svg>
  ),
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M4.98 3.5c0 .87-.71 1.5-1.5 
        1.5s-1.5-.63-1.5-1.5S2.71 
        2 3.5 2s1.48.63 1.48 1.5zM2.5 
        8h2v14h-2V8zm7.5 0h2v1.5h.07a4.57 
        4.57 0 014.13-2.25c4.42 0 5.25 
        2.91 5.25 6.7V22h-2V12.7c0-2.31-.44-4-3.14-4-1.72 
        0-2.52 1.15-2.93 2.22V22h-2V8z" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="bgfooterpart relative overflow-hidden w-full px-3 border-t border-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, orange 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-5">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
         
          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-6">
            <img src={logo} alt="Electcare Logo" className="w-72 " />
            <div className="flex space-x-3">
              {[
                { href: "#", label: "Facebook", icon: <Facebook className="w-4 h-4" /> },
                { href: "#", label: "Twitter", icon: socialIcons.twitter },
                { href: "#", label: "Instagram", icon: <Instagram className="w-4 h-4" /> },
                { href: "#", label: "LinkedIn", icon: <Linkedin className="w-4 h-4" /> },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-black hover:bg-orange-200 transition"
                >
                  {React.cloneElement(social.icon, {
                    className: "w-4 h-4",
                  })}
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold">Quick Links</h2>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/industries", label: "Electcare Industries" },
                { href: "/contact", label: "Contact" },
              ].map((link, index) => (
                <a key={index} href={link.href}       
                  className="font-medium hover:text-red-500 transition">
                  {link.label}
                </a>
              ))}
            </nav>          
          </div>

          {/* Services */}
          

          {/* Services */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold">Security</h2>
            <nav className="flex flex-col gap-2">
              {[
                "Team & Condition", "Privacy Policy", "Help"
              ].map((service, index) => (
                <a key={index} href="/services"
                  className="font-medium hover:text-red-500 transition">
                  {service}
                </a>
              ))}
            </nav>
          </div>
 {/* <div className="lg:col-span-3 space-y-6">
            <h2 className="text-2xl font-bold">Location</h2>
            <p>
              1/22 Perumal Kovil Street, <br />
              Barur(Po), Pochampalli(TK) <br />
              Krishnagiri(Dt)-635201 <br />
              Tamilnadu, India.
            </p>
            <p>
              Plot No.136, 7th Cross, <br />
              Behind Brooke Bond, Kamaraj Nagar, <br />
              Chinnaelasagiri, Sipcot, <br />
              Hosur, Krishnagiri(Dt)-635126 <br />
              Tamilnadu, India.
            </p>
          </div> */}

          {/* Contact */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-2xl font-bold">Contact</h2>
            <div className="space-y-3"> 
              <a href="mailto:venugopal@svgelectric.com" className="flex items-center  hover:text-red-500 transition">
           <Mail className="w-5 h-5 mr-2" /> venugopal@svgelectric.com
          </a>   
            {/* <a href="mailto:svgelectric@gmail.com" className="flex items-center  hover:text-red-500 transition">
            <Mail className="w-5 h-5 mr-2" /> svgelectric@gmail.com
            </a> */}
            
  
      <a href="tel:+918870719804" className="flex items-center  hover:text-red-500 transition">
        <Phone className="w-5 h-5 mr-2" /> +91 8870719804
      </a>
      {/* <a href="tel:+916382792780" className="flex items-center  hover:text-red-500 transition">
        <Phone className="w-5 h-5 mr-2" /> +91 6382792780
      </a>    */}
            </div>
              <p>
              Plot No.136, 7th Cross,Behind <br />
              Brooke Bond, Kamaraj Nagar, <br />
              Chinnaelasagiri, Sipcot, <br />
              Hosur, Krishnagiri(Dt)-635126 <br />
              Tamilnadu, India.
            </p>
            <p>CIN - U27331TN2024PLC173781</p>
            <p>PAN - AAHCH5637G</p>
          </div>
</div>
          {/* Connect */}
         <div className="lg:col-span-12 flex justify-center items-center">
  
</div>


        {/* Bottom Section */}
        <div className="border-t border-black pt-4">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} Electcare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
