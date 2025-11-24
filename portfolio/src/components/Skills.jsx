// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   DiHtml5,
//   DiCss3,
//   DiJavascript1,
//   DiReact,
//   DiNodejsSmall,
//   DiMongodb,
//   DiGithubBadge,
// } from "react-icons/di";
// import {
//   SiTailwindcss,
//   SiMui,
//   SiNextdotjs,
//   SiFirebase,
//   SiChakraui,
//   SiFramer,
//   SiExpress,
//   SiPostgresql,
//   SiFigma,
//   SiGit,
//   SiPostman,
//   SiRender,
//   SiCanva
// } from "react-icons/si";
// import Reveal from "./Reveal";

// const skills = [
//   {
//     category: "Frontend Development",
//     description:
//       "Making the web beautiful, one pixel at a time 🎨. Frontend development is all about crafting intuitive, responsive, and engaging user interfaces. Also, 90% of the job is making divs look good!",
//     technologies: [
//       { name: "Next.js", icon: <SiNextdotjs className="text-white text-6xl" /> },
//       { name: "React.js", icon: <DiReact className="text-[#61DAFB] text-6xl" /> },
//       { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4] text-6xl" /> },
//       { name: "Framer Motion", icon: <SiFramer className="text-white text-6xl" /> },
//       { name: "JavaScript", icon: <DiJavascript1 className="text-[#F7DF1E] text-6xl" /> },
//       { name: "HTML", icon: <DiHtml5 className="text-[#E44D26] text-6xl" /> },
//       { name: "CSS", icon: <DiCss3 className="text-[#264DE4] text-6xl" /> },
//       { name: "MUI", icon: <SiMui className="text-[#007FFF] text-6xl" /> },
//       { name: "Chakra", icon: <SiChakraui className="text-[#319795] text-6xl" /> },
//     ],
//   },
//   {
//     category: "Backend Development",
//     description:
//       "Ensuring the magic happens behind the scenes 🧙‍♂️. Backend development is where the real logic happens, turning chaotic user requests into structured responses. If something goes wrong, blame the frontend!",
//     technologies: [
//       { name: "Node.js", icon: <DiNodejsSmall className="animate-bounce text-[#68A063] text-6xl" /> },
//       { name: "Express.js", icon: <SiExpress className="animate-bounce text-[#000000] text-6xl" /> },
//       { name: "Firebase", icon: <SiFirebase className="animate-bounce text-[#FFCA28] text-6xl" /> },
//     ],
//   },
//   {
//     category: "Tools & Platforms",
//     description:
//       "Keeping things running smoothly, even when they don't want to 🚀. DevOps is where debugging feels like detective work—except you're both the detective and the suspect!",
//     technologies: [
//       { name: "Postman", icon: <SiPostman className="animate-bounce text-[#FF6C37] text-6xl" /> },
//       { name: "Git", icon: <SiGit className="animate-bounce text-[#F34F29] text-6xl" /> },
//       { name: "GitHub", icon: <DiGithubBadge className="animate-bounce text-[#181717] text-6xl" /> },
//       { name: "Figma", icon: <SiFigma className="animate-bounce text-[#F24E1E] text-6xl" /> },
//       { name: "Render", icon: <SiRender className="animate-bounce text-[#46E3B7] text-6xl" /> },
//       { name: "Canva", icon: <SiCanva className="animate-bounce text-[#46E3B7] text-6xl" /> },
//     ],
//   },
// ];

// const Skills = () => {
//   return (
//     <div className="max-w-5xl mx-auto flex flex-col justify-center px-6 text-gray-300 pb-16 md:py-20 mt-20">
//       <Reveal>
//         <h2 className="text-4xl font-bold mb-6 text-center text-white">Skills</h2>
//         <p className="text-center mb-8 text-lg text-gray-400">
//           As a full-stack developer, I turn coffee into code and bugs into features! 
//           From pixel-perfect frontends to battle-tested backends, I enjoy making the web a better place.
//           When in doubt, just add another console.log! 😂
//         </p>
//         <p className="text-center mb-10 text-lg text-gray-400">
//           Check out my projects {" "}
//           <Link to="/projects" className="underline text-purple-400 hover:text-purple-500">
//             here
//           </Link>. 
//           Also, did you know? Debugging is like being a detective in a crime movie where you're also the murderer. 🕵️‍♂️💻
//         </p>
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg mb-10"
//           >
//             <h3 className="text-2xl font-semibold mb-4 text-center text-white">{skill.category}</h3>
//             <p className="text-center text-gray-400 mb-4">{skill.description}</p>
//             <div className="flex flex-wrap justify-center gap-4">
//               {skill.technologies.map((tech, idx) => (
//                 <div 
//                   key={idx} 
//                   className="flex flex-col items-center justify-center bg-gray-800 p-6 w-32 h-32 rounded-lg shadow-md transition-transform transform hover:scale-110 hover:bg-gray-700"
//                 >
//                   <span className="text-5xl mb-1">{tech.icon}</span>
//                   <span className="text-lg font-medium text-white">{tech.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </Reveal>
//     </div>
//   );
// };

// export default Skills;






import React from "react";
import { Link } from "react-router-dom";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiGithubBadge,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiMui,
  SiNextdotjs,
  SiFirebase,
  SiChakraui,
  SiFramer,
  SiExpress,
  SiPostgresql,
  SiFigma,
  SiGit,
  SiPostman,
  SiRender,
  SiCanva,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiVercel,
  SiNetlify,
  SiGithubpages,
} from "react-icons/si";
import Reveal from "./Reveal";

const skills = [
  {
    category: "Frontend Development",
    description:
      "Building fast, elegant, and modern interfaces. I focus on pixel-perfect layouts, smooth animations, and scalable UI architecture.",
    technologies: [
      { name: "Next.js", icon: <SiNextdotjs className="text-white text-6xl" /> },
      { name: "React.js", icon: <DiReact className="text-[#61DAFB] text-6xl" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4] text-6xl" /> },
      { name: "Framer Motion", icon: <SiFramer className="text-white text-6xl" /> },
      { name: "JavaScript", icon: <DiJavascript1 className="text-[#F7DF1E] text-6xl" /> },
      { name: "HTML", icon: <DiHtml5 className="text-[#E44D26] text-6xl" /> },
      { name: "CSS", icon: <DiCss3 className="text-[#264DE4] text-6xl" /> },
      { name: "MUI", icon: <SiMui className="text-[#007FFF] text-6xl" /> },
      { name: "Chakra UI", icon: <SiChakraui className="text-[#319795] text-6xl" /> },
    ],
  },

  {
    category: "Backend Development",
    description:
      "Designing reliable backend systems, REST APIs, authentication flows, and scalable server-side logic.",
    technologies: [
      { name: "Node.js", icon: <DiNodejsSmall className="text-[#68A063] text-6xl" /> },
      { name: "Express.js", icon: <SiExpress className="text-white text-6xl" /> },
      { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28] text-6xl" /> },
    ],
  },

  {
    category: "Databases",
    description:
      "Experience with modern, scalable, and high-performance database systems used in production-grade applications.",
    technologies: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-6xl" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-500 text-6xl" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-500 text-6xl" /> },
      { name: "Firebase DB", icon: <SiFirebase className="text-yellow-400 text-6xl" /> },
      { name: "Redis", icon: <SiRedis className="text-red-500 text-6xl" /> },
    ],
  },

  // ⭐ NEW DEPLOYMENT SECTION ADDED HERE
  {
    category: "Deployment & Hosting",
    description:
      "Platforms I use to deploy full-stack applications, optimize performance, and manage production environments.",
    technologies: [
      { name: "Vercel", icon: <SiVercel className="text-white text-6xl" /> },
      { name: "Netlify", icon: <SiNetlify className="text-[#00C7B7] text-6xl" /> },
      { name: "Render", icon: <SiRender className="text-[#46E3B7] text-6xl" /> },
      { name: "GitHub Pages", icon: <SiGithubpages className="text-white text-6xl" /> },
      { name: "Firebase Hosting", icon: <SiFirebase className="text-yellow-400 text-6xl" /> },
    ],
  },

  {
    category: "Tools & Platforms",
    description:
      "Tools I frequently use for development, design, debugging, and deploy pipelines.",
    technologies: [
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37] text-6xl" /> },
      { name: "Git", icon: <SiGit className="text-[#F34F29] text-6xl" /> },
      { name: "GitHub", icon: <DiGithubBadge className="text-[#181717] text-6xl" /> },
      { name: "Figma", icon: <SiFigma className="text-[#F24E1E] text-6xl" /> },
      { name: "Canva", icon: <SiCanva className="text-[#46E3B7] text-6xl" /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className="max-w-5xl mx-auto flex flex-col justify-center px-6 text-gray-300 pb-16 md:py-20 mt-20">
      <Reveal>
        <h2 className="text-4xl font-bold mb-6 text-center text-white">Skills</h2>

        <p className="text-center mb-8 text-lg text-gray-400">
          As a full-stack developer, I work across the entire product stack—from crafting beautiful UI/UX
          to engineering fast and scalable backend services.
        </p>

        <p className="text-center mb-10 text-lg text-gray-400">
          Explore my projects{" "}
          <Link to="/projects" className="underline text-purple-400 hover:text-purple-500">
            here
          </Link>.
        </p>

        {skills.map((skill, index) => (
          <div
            key={index}
            className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg mb-10"
          >
            <h3 className="text-2xl font-semibold mb-4 text-center text-white">
              {skill.category}
            </h3>
            <p className="text-center text-gray-400 mb-4">{skill.description}</p>

            <div className="flex flex-wrap justify-center gap-4">
              {skill.technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center bg-gray-800 p-6 w-32 h-32 rounded-lg shadow-md transition-transform transform hover:scale-110 hover:bg-gray-700"
                >
                  <span className="text-5xl mb-1">{tech.icon}</span>
                  <span className="text-lg font-medium text-white text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Reveal>
    </div>
  );
};

export default Skills;
