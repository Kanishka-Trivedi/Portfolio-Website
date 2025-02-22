// import React from "react";
// import profilepic from "../assets/profpic.png";
// import { TypeAnimation } from "react-type-animation";
// import ShinyEffect from "./ShinyEffect";
// import {
//   AiOutlineGithub,
//   AiOutlineInstagram,
//   AiOutlineLink,
//   AiOutlineLinkedin,
// } from "react-icons/ai";

// import {
//   DiCss3,
//   DiHtml5,
//   DiJavascript1,
//   DiNodejsSmall,
//   DiReact,
// } from "react-icons/di";
// import { motion } from "framer-motion";


// const Hero = () => {
//   return (
//     <div className="mt-24 max-w-[1200px] mx-auto relative">
//         <div className="grid md:grid-cols-2 place-items-center gap-8">
//             <motion.div
//             initial={{ opacity: 0, y: -50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1 }}
//             >
//                 <TypeAnimation
//                     sequence={[
//                         "Fullstack Dev",
//                         1000,
//                         "Webdesigner",
//                         1000,
//                         "Consultant",
//                         1000
//                     ]}
//                     speed={50}
//                     repeat={Infinity}
//                     className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
//                 />

//                 <motion.p
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 1, delay: 0.5 }}
//                 className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
//                 >
//                     HEYA, I AM <br/>
//                     <span className="text-purple-500">KANISHKA TRIVEDI</span>
//                 </motion.p>

//                 <motion.p
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 1, delay: 1 }}
//                 className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
//                 >
//                     I am a passionate fullstack developer.
//                 </motion.p>

//                 <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 1, delay: 1.5 }}
//                 className="flex flex-row items-center gap-6 my-4 md:mb-0"
//                 >
//                     <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
//                         className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
//                                      border-purple-400 rounded-xl"     
//                     >
//                         Download Resume
//                     </motion.button>

//                     <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
//                         <motion.a whileHover={{ scale: 1.2 }} href="#">
//                             <AiOutlineGithub/>
//                         </motion.a>

//                         <motion.a whileHover={{ scale: 1.2 }} href="#">
//                             <AiOutlineLinkedin/>
//                         </motion.a>

//                         <motion.a whileHover={{ scale: 1.2 }} href="#">
//                             <AiOutlineInstagram/>
//                         </motion.a>
//                     </div>
//                 </motion.div>
//             </motion.div>


//             <motion.img 
//                 src={profilepic}
//                 className="w-[300px] md:w-[450px]"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 1 }}
//             />
//         </div>

//         <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1, delay: 2 }}
//             className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
//         >
//             <p className="text-gray-200 mr-6">My Tech Stack</p>
//             <DiHtml5 className="text-orange-600 mx-2" />
//             <DiCss3 className="text-blue-600 mx-2" />
//             <DiJavascript1 className="text-yellow-500 mx-2" />
//             <DiReact className="text-blue-500 mx-2" />
//             <DiNodejsSmall className="text-green-500 mx-2" />

//         </motion.div>

//         <div className="absolute inset-0 hidden md:block">
//             <ShinyEffect left={0} top={0} size={1400} />
//         </div>

//     </div>
//   )
// }

// export default Hero;





// import React from "react";
// import { Link } from "react-router-dom"; // Import Link for navigation
// import profilepic from "../assets/profpic.png";
// import { TypeAnimation } from "react-type-animation";
// import ShinyEffect from "./ShinyEffect";
// import {
//   AiOutlineGithub,
//   AiOutlineInstagram,
//   AiOutlineLinkedin,
// } from "react-icons/ai";

// import {
//   DiCss3,
//   DiHtml5,
//   DiJavascript1,
//   DiNodejsSmall,
//   DiReact,
// } from "react-icons/di";
// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <div className="mt-24 max-w-[1200px] mx-auto relative">
//       <div className="grid md:grid-cols-2 place-items-center gap-8">
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1 }}
//         >
//           <TypeAnimation
//             sequence={["Fullstack Devloper", 1000, "Webdesigner", 1000]}
//             speed={50}
//             repeat={Infinity}
//             className="font-bold text-gray-400 text-xl md:text-5xl italic mb-4"
//           />

//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1, delay: 0.5 }}
//             className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
//           >
//             HEYA, I AM <br />
//             <span className="text-purple-500">KANISHKA TRIVEDI</span>
//           </motion.p>

//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1, delay: 1 }}
//             className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
//           >
//             I am a passionate fullstack developer.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1, delay: 1.5 }}
//             className="flex flex-row items-center gap-6 my-4 md:mb-0"
//           >
//             <motion.button
//               whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
//               className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl"
//             >
//               <Link to="/resume">Download Resume</Link>
//             </motion.button>

//             <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
//               <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/Kanishka-Trivedi" target="_blank">
//                 <AiOutlineGithub />
//               </motion.a>

//               <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/kanishka-trivedi/" target="_blank">
//                 <AiOutlineLinkedin />
//               </motion.a>

//               <motion.a whileHover={{ scale: 1.2 }} href="https://instagram.com/YOUR_INSTAGRAM" target="_blank">
//                 <AiOutlineInstagram />
//               </motion.a>
//             </div>
//           </motion.div>
//         </motion.div>

//         <motion.img
//           src={profilepic}
//           className="w-[300px] md:w-[450px]"
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1 }}
//         />
//       </div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 1, delay: 2 }}
//         className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
//       >
//         <p className="text-gray-200 mr-6">My Tech Stack</p>
//         <DiHtml5 className="text-orange-600 mx-2" />
//         <DiCss3 className="text-blue-600 mx-2" />
//         <DiJavascript1 className="text-yellow-500 mx-2" />
//         <DiReact className="text-blue-500 mx-2" />
//         <DiNodejsSmall className="text-green-500 mx-2" />
//       </motion.div>

//       <div className="absolute inset-0 hidden md:block">
//         <ShinyEffect left={0} top={0} size={1400} />
//       </div>
//     </div>
//   );
// };

// export default Hero;






import React from "react";
import { Link } from "react-router-dom";
import Kanishka1 from "../assets/Kanishka1.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* 🟣 Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <TypeAnimation
            sequence={["Fullstack Developer", 1000, "Web Designer", 1000]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl sm:text-2xl md:text-4xl italic mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 text-4xl sm:text-5xl md:text-7xl tracking-tight mb-4"
          >
            HEYA, I AM <br />
            <span className="text-purple-500">KANISHKA TRIVEDI</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 text-lg sm:text-xl md:text-2xl max-w-lg mx-auto md:mx-0 mb-6"
          >
            Passionate about crafting intuitive digital experiences with
            cutting-edge technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col sm:flex-row items-center gap-6 my-4 md:mb-0"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              className="z-10 cursor-pointer font-bold text-gray-200 p-4 border border-purple-400 rounded-xl"
            >
              <Link to="/resume">Download Resume</Link>
            </motion.button>

            <div className="flex gap-6 text-4xl text-purple-400 z-20">
              <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/Kanishka-Trivedi" target="_blank">
                <AiOutlineGithub />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/kanishka-trivedi/" target="_blank">
                <AiOutlineLinkedin />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="https://www.instagram.com/kanishkatrivedi06/" target="_blank">
                <AiOutlineInstagram />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.img
          src={Kanishka1}
          className="w-[250px] sm:w-[300px] md:w-[400px] rounded-xl shadow-lg mb-30"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* 🔵 Tech Stack */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-wrap justify-center text-center text-2xl sm:text-3xl text-gray-200 py-12"
      >
        <p className="w-full text-gray-300 mb-4">My Tech Stack</p>
        <div className="flex justify-center gap-4">
          <DiHtml5 className="text-orange-600" />
          <DiCss3 className="text-blue-600" />
          <DiJavascript1 className="text-yellow-500" />
          <DiReact className="text-blue-500" />
          <DiNodejsSmall className="text-green-500" />
        </div>
      </motion.div>

      {/* 🟢 About Me Section */}
      <motion.div className="text-gray-300 mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-purple-400 font-semibold mb-6">
          About Me
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
          Hey there! I’m <span className="text-purple-400 font-semibold">Kanishka Trivedi</span>, an aspiring software engineer from <span className="text-purple-400 font-semibold">Palanpur, Gujarat</span>.
          I’m passionate about building smooth, intuitive digital experiences and love solving complex problems with full-stack development.
          Whether it’s crafting seamless UIs or optimizing backend performance, I’m always up for a challenge! 🚀
        </p>

      </motion.div>

      {/* 🟠 Education Section */}
      <motion.div className="text-gray-300 mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-purple-400 font-semibold mb-6">
          Education
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
          📖 Currently pursuing a Bachelor's Degree in Computer Science
          🎯 Focused on Web Development, and Software Engineering.
        </p>
      </motion.div>

      {/* 🔴 Finoptix Project */}
      <motion.div className="text-gray-300 mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-purple-400 font-semibold mb-6">
          My Major Project: Finoptix
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
          🚀 Finoptix is a financial tracking app that helps users manage
          expenses, optimize spending, and achieve financial freedom.
          💡 Features: smart insights, AI-powered analytics, and intuitive UI
          to make personal finance effortless.
          🌐 Built using React, MongoDB, and framer motion for dynamic
          insights.
        </p>
      </motion.div>

      <motion.div className="text-gray-300 mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-purple-400 font-semibold mb-6">
          Hobbies & Interests
        </h2>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto 
               text-gray-300 bg-gradient-to-r from-purple-400 to-indigo-400 
               inline-block bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          When I’m not coding, you’ll find me exploring new tech,
          diving into finance & investments, or automating random tasks just for fun.
          I also enjoy gaming 🎮, sci-fi movies 🎬, Traveling 🌍, Sketching 🎨, and Listening to Music 🎵.
        </motion.p>
      </motion.div>


      <motion.div className="text-gray-300 mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-purple-500 font-semibold mb-6">
          The Days I Code
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-6">
          My coding activity on GitHub – every purple square is a day I coded! 💻
        </p>
        <motion.a
          href="https://github.com/Kanishka-Trivedi"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="https://ghchart.rshah.org/color=a855f7/Kanishka-Trivedi"
            alt="Kanishka's GitHub contribution graph"
            className="mx-auto rounded-lg shadow-lg"
            style={{ width: "100%", maxWidth: "900px", height: "auto" }}
          />
        </motion.a>
        <p className="text-sm text-gray-400 mt-4">
          Click to visit my GitHub profile | Live contribution graph
        </p>
      </motion.div>

      {/* ✨ Background Effect */}
      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
