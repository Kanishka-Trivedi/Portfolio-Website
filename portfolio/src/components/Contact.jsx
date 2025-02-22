// import React from "react";
// import { Link } from "react-router-dom";
// import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
// import Reveal from "./Reveal";

// const Contact = () => {
//   return (
//     <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
//       <Reveal>
//         <div className="grid md:grid-cols-2 place-items-center">
//           {/* 🟣 Left Section: About Me */}
//           <div>
//             <div className="text-gray-300 my-3">
//               <h3 className="text-4xl font-semibold mb-5">
//                 About <span>Me</span>
//               </h3>
//               <p className="text-justify leading-7 w-11/12 mx-auto">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eos, quam vel quisquam,
//                 explicabo sit labore dignissimos optio ratione quibusdam doloribus pariatur.
//               </p>
//             </div>

//             {/* 🟣 Stats Section */}
//             <div className="flex mt-10 items-center gap-7">
//               <div className="bg-gray-800/40 p-4 rounded-lg w-[350px] flex flex-col items-center">
//                 <h3 className="md:text-4xl text-2xl font-semibold text-white">11<span>+</span></h3>
//                 <p className="text-xs md:text-base text-white">Projects</p>
//               </div>
//             </div>
//           </div>

//           {/* 🟣 Right Section: Contact Form */}
//           <form
//             action="https://getform.io/f/placeYourEndpointHere"
//             method="POST"
//             className="max-w-6xl p-5 md:p-12"
//             id="form"
//           >
//             <p className="text-gray-100 font-bold text-xl mb-2">Let´s connect!</p>
//             <input
//               type="text"
//               id="name"
//               placeholder="Your Name ..."
//               name="name"
//               className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 placeholder-purple-600"
//               required
//             />
//             <input
//               type="email"
//               id="email"
//               placeholder="Your Email ..."
//               name="email"
//               className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 placeholder-purple-600"
//               required
//             />
//             <textarea
//               name="textarea"
//               id="textarea"
//               cols="30"
//               rows="4"
//               placeholder="Your Message ..."
//               className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 placeholder-purple-600"
//               required
//             />
//             <button
//               type="submit"
//               className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
//             >
//               Send Message
//             </button>

//             {/* 🔗 Back to Home Button */}
//             <Link to="/" className="block text-center mt-4 text-purple-400 hover:text-purple-300">
//               ← Back to Home
//             </Link>
//           </form>
//         </div>
//       </Reveal>
//     </div>
//   );
// };

// export default Contact;





import React from "react";
import { Link } from "react-router-dom";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <div className="px-6 max-w-4xl mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 gap-10 place-items-center mt-15">
          {/* 🟣 Left Section: About Me */}
          <div className="text-gray-300 text-center md:text-left">
            <h3 className="text-4xl font-semibold mb-5 text-white">
              About <span className="text-purple-400">Me</span>
            </h3>

            <p className="text-justify leading-7 w-full">
              Hey there! I'm a passionate <span className="text-purple-300 font-medium">Full-Stack Developer</span> who thrives on turning ideas into reality.
              With expertise in both frontend and backend technologies, I love creating smooth, user-friendly, and performant applications.
            </p>

            <p className="text-justify leading-7 w-full mt-4">
              My journey in tech has been fueled by curiosity and a constant drive to learn. From crafting sleek UI/UX experiences
              to designing robust server-side logic, I enjoy solving real-world problems through code.
              When I'm not coding, you’ll find me exploring new tech trends, contributing to open-source, or brainstorming the next big project. 🚀
            </p>

            <p className="mt-4 text-lg font-medium text-purple-300">
              Let's collaborate and build something awesome together! 🤝✨
            </p>

            {/* 🟣 Stats Section */}
            <div className="flex flex-wrap mt-8 gap-5 justify-center md:justify-start">
              <div className="bg-gray-800/40 p-5 rounded-lg w-80 flex flex-col items-center">
                <h3 className="text-3xl font-semibold text-white">8+</h3>
                <p className="text-xs text-white">Projects Completed</p>
              </div>
            </div>

            {/* 🟣 Social Links */}
            <div className="flex gap-6 mt-6 justify-center md:justify-start">
              <a
                href="https://github.com/Kanishka-Trivedi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-400 hover:text-white transition"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/kanishka-trivedi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-400 hover:text-white transition"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="mailto:kanishka.trivedi.cg@gmail.com"
                className="text-3xl text-gray-400 hover:text-white transition"
              >
                <AiOutlineMail />
              </a>
            </div>
          </div>

          {/* 🟣 Right Section: Contact Form */}
          {/* <form
            action="https://getform.io/f/bejrrvna"
            method="POST"
            className="bg-gray-900 p-6 md:p-8 rounded-lg shadow-lg w-full"
          >
            <h3 className="text-gray-100 font-bold text-2xl mb-4">Let’s Connect! 🚀</h3>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="mb-3 w-full p-3 rounded-md border border-purple-600 bg-gray-800 text-white placeholder-gray-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="mb-3 w-full p-3 rounded-md border border-purple-600 bg-gray-800 text-white placeholder-gray-500"
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message..."
              className="mb-3 w-full p-3 rounded-md border border-purple-600 bg-gray-800 text-white placeholder-gray-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 rounded-md text-white font-semibold text-xl bg-purple-600 hover:bg-purple-700 transition"
            >
              Send Message
            </button>
          </form> */}


          <form
            action="https://getform.io/f/bejrrvna"
            method="POST"
            className="bg-gray-900 p-6 md:p-8 rounded-lg shadow-lg w-full"
          >
            <h3 className="text-gray-100 font-bold text-2xl mb-4">Let’s Connect! 🚀</h3>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="mb-3 w-full p-3 rounded-md border border-purple-600 bg-gray-800 text-white placeholder-gray-500"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="mb-3 w-full p-3 rounded-md border border-purple-600 bg-gray-800 text-white placeholder-gray-500"
              required
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message..."
              className="mb-3 w-full p-3 rounded-md border border-purple-600 bg-gray-800 text-white placeholder-gray-500"
              required
            ></textarea>

            {/* Hidden field for spam prevention */}
            <input
              type="hidden"
              name="_gotcha"
              className="hidden" // Replaced inline style with a class
            />

            {/* Add your email as a hidden field */}
            <input
              type="hidden"
              name="_to"
              value="kanishka.trivedi.cg@gmail.com"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-md text-white font-semibold text-xl bg-purple-600 hover:bg-purple-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;