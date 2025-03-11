import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#F5F0E8] py-12 px-6 md:px-12 flex flex-wrap items-center justify-center gap-10">
      {/* Sign-Up Section */}
      <div className="bg-[#EDE6DA] p-6 rounded-md w-full sm:w-3/4 md:w-2/3 lg:w-1/2 shadow-md text-center md:text-left">
        <h3 className="text-2xl font-bold text-[#746B5F] mb-4">
          Sign up for our Newsletter
        </h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-2 rounded-md bg-white text-[#746B5F] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A28E66]"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 rounded-md bg-white text-[#746B5F] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A28E66]"
          />
          <button
            type="submit"
            className="w-full bg-[#A28E66] hover:bg-[#3c3422] text-white font-semibold py-2 rounded-md transition"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Social Links */}
      <div className="w-full sm:w-3/4 md:w-1/3 text-center md:text-right">
        <ul className="space-y-3 text-lg text-[#746B5F]">
          {[
            { name: "Instagram", icon: <FaInstagram /> },
            { name: "Facebook", icon: <FaFacebookF /> },
            { name: "TikTok", icon: <FaTiktok /> },
            { name: "Twitter", icon: <FaTwitter /> },
            { name: "WhatsApp", icon: <FaWhatsapp /> },
          ].map((platform) => (
            <li
              key={platform.name}
              className="flex items-center gap-2 justify-center  hover:underline cursor-pointer transition duration-300 hover:text-[#A28E66]"
            >
              {platform.icon}
              <span className="font-medium">{platform.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
