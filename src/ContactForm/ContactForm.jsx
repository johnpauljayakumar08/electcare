import React, { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.mobile || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    toast.success("Your message has been sent!");
    setFormData({ name: "", email: "", mobile: "", message: "" });
  };

  return (
    <div className="  flex flex-col md:flex-row items-center justify-center min-h-screen px-6 sm:my-1 lg:my-8">
      

      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 ">
        <h1 className="text-4xl font-bold whitespace-nowrap overflow-hidden border-r-4 border-red-500 animate-typing  pt-30 lg:pt-3">
          Contact Us
        </h1>
        <p className="text-gray-700 mt-4 mr-5">
          Got a{" "}
          <span className="text-red-500 font-bold">
            machine that needs care?
          </span>{" "}
          Whether it's repairs or maintenance we've got you covered. Fill out
          the form and our team will get back to you!
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 p-6 rounded-lg shadow-lg w-full max-w-md my-3 border">
      <ToastContainer />
        <form onSubmit={handleSubmit} className="space-y-4 text-black">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border border-gray-500 placeholder:text-gray-400 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500 my-2"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border border-gray-500 placeholder:text-gray-400 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500 my-2"
            required
          />
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Your Mobile Number"
            className="w-full p-3 rounded-lg border border-gray-500 placeholder:text-gray-400 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500 my-2"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="2"
            className="w-full p-3 rounded-lg border border-gray-500 placeholder:text-gray-400 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500 my-2"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-3 rounded flex items-center justify-center gap-2 group transition-all duration-300"
          >
            <span>Send Message</span>
            <FaTelegramPlane className="text-xl transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
