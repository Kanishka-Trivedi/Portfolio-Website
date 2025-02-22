// import React from 'react'
// import { FaGithubSquare, FaInstagram } from 'react-icons/fa'

// const Footer = () => {
//   return (
//     <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
//         <div className='space-y-4'>
//             <h3 className='text-2xl text-gray-200 font-semibold'>Kanishka</h3>
//             <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
//                 <a href="#"><FaGithubSquare /></a>
//                 <a href="#"><FaInstagram /></a>
//             </div>

//         </div>

//         <p className='text-gray-400'>@2024 Kanishka Trivedi</p>
        
//     </div>
//   )
// }

// export default Footer





import React from "react";
import { FaGithubSquare, FaInstagram, FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left p-6 md:p-20 text-sm md:text-lg mt-12 border-t border-gray-700">
      
      {/* Left Section - Branding */}
      <div className="flex-1 space-y-4">
        <h3 className="text-2xl text-gray-200 font-semibold">Kanishka Trivedi</h3>
      </div>

      {/* Middle Section - Social Links */}
      <div className="flex-1 space-y-2">
        <h4 className="text-gray-300 text-lg font-medium">Connect with me:</h4>
        <div className="flex justify-center md:justify-center gap-4 text-gray-400 text-3xl">
          <a href="https://github.com/Kanishka-Trivedi" target="_blank" rel="noopener noreferrer">
            <FaGithubSquare className="hover:text-gray-200 transition-all duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/kanishka-trivedi/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-500 transition-all duration-300" />
          </a>
          <a href="https://www.instagram.com/kanishkatrivedi06/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500 transition-all duration-300" />
          </a>
          <a href="https://x.com/kanishkatr76445" target="_blank" rel="noopener noreferrer">
            <FaTwitterSquare className="hover:text-blue-400 transition-all duration-300" />
          </a>
          <a href="mailto:kanishka.trivedi.cg@gmail.com">
            <MdEmail className="hover:text-red-400 transition-all duration-300" />
          </a>
        </div>
      </div>

      {/* Right Section - Copyright */}
      <div className="flex-1 text-gray-400">
        <p>© 2025 Kanishka Trivedi. All rights reserved.</p>
      </div>

    </div>
  );
};

export default Footer;
