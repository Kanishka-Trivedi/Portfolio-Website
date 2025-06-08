// import React from "react"
// import {
//   DiHtml5,
//   DiCss3,
//   DiSass,
//   DiBootstrap,
//   DiJavascript1,
//   DiReact,
//   DiNodejsSmall,
//   DiMongodb,
//   DiGithubBadge,
// } from "react-icons/di"
// import Reveal from "./Reveal"

// const skills = [
//     {
//       category: 'Frontend',
//       technologies: [
//         { name: 'HTML', icon: <DiHtml5 className='text-orange-600' /> },
//         { name: 'CSS', icon: <DiCss3 className='text-blue-600' /> },
//         { name: 'Sass', icon: <DiSass className='text-pink-600' /> },
//         { name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600' /> },
//         { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
//         { name: 'React', icon: <DiReact className='text-blue-500' /> },
//       ],
//     },
//     {
//       category: 'Fullstack',
//       technologies: [
//         { name: 'Node Js', icon: <DiNodejsSmall className='text-green-500' /> },
//         { name: 'MongoDB', icon: <DiMongodb className='text-green-600' /> },
//         { name: 'React', icon: <DiReact className='text-blue-500' /> },
//         { name: 'GitHub', icon: <DiGithubBadge className='text-gray-600' /> },
//       ],
//     },
//   ]

// const Skills = () => {
//   return (
//     <div className="max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
//         <Reveal>
//         <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
//         <p className="text-center mb-8">
//             I worked on various frontend and fullstack projects. Check them <a href="#" className="underline">there</a>.
//         </p>

//         <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8
//                         ">
//             {skills.map((skill, index) => (
//                 <div key={index} className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg 
//                                 w-full md:w-1/2">
//                     <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
//                     <div className="grid grid-cols-2 gap-4">
//                         {skill.technologies.map((tech, idx) => (
//                             <div key={idx} className="flex items-center space-x-2">
//                                 <span className="text-2xl">{tech.icon}</span>
//                                 <span>{tech.name}</span>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             ))}
//         </div>
//         </Reveal>
//     </div>
//   )
// }

// export default Skills





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
//   SiFirebase,
//   SiChakraui,
//   SiExpress,
//   SiPostgresql,
//   SiTypescript,
//   SiFigma,
//   SiGit,
//   SiPostman,
//   SiRender,
// } from "react-icons/si";
// import Reveal from "./Reveal";

// const skills = [
//   {
//     category: "Frontend",
//     technologies: [
//       { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
//       { name: "CSS", icon: <DiCss3 className="text-blue-600" /> },
//       { name: "Tailwind", icon: <SiTailwindcss className="text-teal-500" /> },
//       { name: "MaterialUI", icon: <SiMui className="text-purple-600" /> },
//       { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-500" /> },
//       { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
//       { name: "React", icon: <DiReact className="text-blue-500" /> },
//       { name: "ChakraUI", icon: <SiChakraui className="text-blue-500" /> },
//     ],
//   },
//   {
//     category: "Backend",
//     technologies: [
//       { name: "Node.js", icon: <DiNodejsSmall className="text-green-500" /> },
//       { name: "Express.js", icon: <SiExpress className="text-gray-600" /> },
//       { name: "MongoDB", icon: <DiMongodb className="text-green-600" /> },
//       { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
//       { name: "Firebase", icon: <SiFirebase className="text-orange-600" /> },
//     ],
//   },
//   {
//     category: "DevOps & Tools",
//     technologies: [
//       { name: "Postman", icon: <SiPostman className="text-blue-500" /> },
//       { name: "Git", icon: <SiGit className="text-blue-400" /> },
//       { name: "GitHub", icon: <DiGithubBadge className="text-gray-600" /> },
//       { name: "Figma", icon: <SiFigma className="text-red-500" /> },
//       { name: "Render", icon: <SiRender className="text-red-500" /> },
//     ],
//   },
// ];

// const Skills = () => {
//   return (
//     <div className="max-w-4xl mx-auto flex flex-col justify-center px-6 text-gray-200 pb-12 md:py-16 mt-10">
//       <Reveal>
//         <h2 className="text-4xl font-bold mb-6 text-center">Skills & Technologies</h2>
//         <p className="text-center mb-8 text-lg">
//           I specialize in full-stack development, crafting seamless web experiences. 
//           From designing stunning frontends to engineering powerful backends, I love turning ideas into reality.
//           When in doubt, just add another console.log! 😂
//         </p>
//         <p className="text-center mb-8 text-lg">
//           Check out my projects {" "}
//           <Link to="/projects" className="underline text-purple-400 hover:text-purple-500">
//             here
//           </Link>. 
//           Also, did you know? Debugging is like being the detective in a crime movie where you are also the murderer. 🕵️‍♂️💻
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg"
//             >
//               <h3 className="text-2xl font-semibold mb-4 text-center">{skill.category}</h3>
//               <p className="text-center text-gray-400 mb-4">
//                 {skill.category === "Frontend" && "Making the web beautiful, one pixel at a time 🎨"}
//                 {skill.category === "Backend" && "Ensuring the magic happens behind the scenes 🧙‍♂️"}
//                 {skill.category === "DevOps & Tools" && "Keeping things running smoothly, even when they don't want to 🚀"}
//               </p>
//               <div className="grid grid-cols-2 gap-4">
//                 {skill.technologies.map((tech, idx) => (
//                   <div key={idx} className="flex items-center space-x-2">
//                     <span className="text-3xl">{tech.icon}</span>
//                     <span className="text-lg">{tech.name}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </Reveal>
//     </div>
//   );
// };

// export default Skills;






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
//   SiFirebase,
//   SiChakraui,
//   SiExpress,
//   SiPostgresql,
//   SiTypescript,
//   SiFigma,
//   SiGit,
//   SiPostman,
//   SiRender,
// } from "react-icons/si";
// import Reveal from "./Reveal";

// const skills = [
//   {
//     category: "Frontend Development",
//     description:
//       "Frontend development focuses on creating visually appealing, interactive, and user-friendly interfaces. I specialize in modern web technologies, ensuring seamless user experiences.",
//     technologies: [
//       { name: "HTML", icon: <DiHtml5 className="text-[#E44D26] text-6xl" /> },
//       { name: "CSS", icon: <DiCss3 className="text-[#264DE4] text-6xl" /> },
//       { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4] text-6xl" /> },
//       { name: "Material UI", icon: <SiMui className="text-[#007FFF] text-6xl" /> },
//       { name: "JavaScript", icon: <DiJavascript1 className="text-[#F7DF1E] text-6xl" /> },
//       { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6] text-6xl" /> },
//       { name: "React.js", icon: <DiReact className="text-[#61DAFB] text-6xl" /> },
//       { name: "Chakra UI", icon: <SiChakraui className="text-[#319795] text-6xl" /> },
//     ],
//   },
//   {
//     category: "Backend Development",
//     description:
//       "Backend development is the backbone of any web application, handling data, authentication, and business logic. I ensure secure, scalable, and high-performance backend solutions.",
//     technologies: [
//       { name: "Node.js", icon: <DiNodejsSmall className="text-[#68A063] text-6xl" /> },
//       { name: "Express.js", icon: <SiExpress className="text-[#000000] text-6xl" /> },
//       { name: "MongoDB", icon: <DiMongodb className="text-[#47A248] text-6xl" /> },
//       { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791] text-6xl" /> },
//       { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28] text-6xl" /> },
//     ],
//   },
//   {
//     category: "DevOps & Tools",
//     description:
//       "Efficient development and deployment rely on the right tools and practices. I use DevOps tools to streamline workflows, manage code, and optimize application performance.",
//     technologies: [
//       { name: "Postman", icon: <SiPostman className="text-[#FF6C37] text-6xl" /> },
//       { name: "Git", icon: <SiGit className="text-[#F34F29] text-6xl" /> },
//       { name: "GitHub", icon: <DiGithubBadge className="text-[#181717] text-6xl" /> },
//       { name: "Figma", icon: <SiFigma className="text-[#F24E1E] text-6xl" /> },
//       { name: "Render", icon: <SiRender className="text-[#46E3B7] text-6xl" /> },
//     ],
//   },
// ];

// const Skills = () => {
//   return (
//     <div className="max-w-5xl mx-auto flex flex-col justify-center px-6 text-gray-300 pb-16 md:py-20 mt-10">
//       <Reveal>
//         <h2 className="text-4xl font-bold mb-6 text-center text-white">Skills & Technologies</h2>
//         <p className="text-center mb-8 text-lg text-gray-400">
//           As a full-stack developer, I build robust, user-friendly web applications. 
//           I enjoy crafting beautiful frontends, developing scalable backends, and 
//           leveraging DevOps tools to streamline development. 
//         </p>
//         <p className="text-center mb-10 text-lg text-gray-400">
//           Explore my projects {" "}
//           <Link to="/projects" className="underline text-purple-400 hover:text-purple-500">
//             here
//           </Link>.
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
//                   <span className="text-5xl mb-3">{tech.icon}</span>
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
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiMui,
  SiFirebase,
  SiChakraui,
  SiExpress,
  SiPostgresql,
  SiTypescript,
  SiFigma,
  SiGit,
  SiPostman,
  SiRender,
  SiCanva
} from "react-icons/si";
import Reveal from "./Reveal";

const skills = [
  {
    category: "Frontend Development",
    description:
      "Making the web beautiful, one pixel at a time 🎨. Frontend development is all about crafting intuitive, responsive, and engaging user interfaces. Also, 90% of the job is making divs look good!",
    technologies: [
      { name: "HTML", icon: <DiHtml5 className="text-[#E44D26] text-6xl" /> },
      { name: "CSS", icon: <DiCss3 className="text-[#264DE4] text-6xl" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4] text-6xl" /> },
      { name: "MUI", icon: <SiMui className="text-[#007FFF] text-6xl" /> },
      { name: "JavaScript", icon: <DiJavascript1 className="text-[#F7DF1E] text-6xl" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6] text-6xl" /> },
      { name: "React.js", icon: <DiReact className="text-[#61DAFB] text-6xl" /> },
      { name: "Chakra", icon: <SiChakraui className="text-[#319795] text-6xl" /> },
    ],
  },
  {
    category: "Backend Development",
    description:
      "Ensuring the magic happens behind the scenes 🧙‍♂️. Backend development is where the real logic happens, turning chaotic user requests into structured responses. If something goes wrong, blame the frontend!",
    technologies: [
      { name: "Node.js", icon: <DiNodejsSmall className="text-[#68A063] text-6xl" /> },
      { name: "Express.js", icon: <SiExpress className="text-[#000000] text-6xl" /> },
      { name: "MongoDB", icon: <DiMongodb className="text-[#47A248] text-6xl" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791] text-6xl" /> },
      { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28] text-6xl" /> },
    ],
  },
  {
    category: "DevOps & Tools",
    description:
      "Keeping things running smoothly, even when they don't want to 🚀. DevOps is where debugging feels like detective work—except you're both the detective and the suspect!",
    technologies: [
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37] text-6xl" /> },
      { name: "Git", icon: <SiGit className="text-[#F34F29] text-6xl" /> },
      { name: "GitHub", icon: <DiGithubBadge className="text-[#181717] text-6xl" /> },
      { name: "Figma", icon: <SiFigma className="text-[#F24E1E] text-6xl" /> },
      { name: "Render", icon: <SiRender className="text-[#46E3B7] text-6xl" /> },
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
          As a full-stack developer, I turn coffee into code and bugs into features! 
          From pixel-perfect frontends to battle-tested backends, I enjoy making the web a better place.
          When in doubt, just add another console.log! 😂
        </p>
        <p className="text-center mb-10 text-lg text-gray-400">
          Check out my projects {" "}
          <Link to="/projects" className="underline text-purple-400 hover:text-purple-500">
            here
          </Link>. 
          Also, did you know? Debugging is like being a detective in a crime movie where you're also the murderer. 🕵️‍♂️💻
        </p>
        {skills.map((skill, index) => (
          <div
            key={index}
            className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg mb-10"
          >
            <h3 className="text-2xl font-semibold mb-4 text-center text-white">{skill.category}</h3>
            <p className="text-center text-gray-400 mb-4">{skill.description}</p>
            <div className="flex flex-wrap justify-center gap-4">
              {skill.technologies.map((tech, idx) => (
                <div 
                  key={idx} 
                  className="flex flex-col items-center justify-center bg-gray-800 p-6 w-32 h-32 rounded-lg shadow-md transition-transform transform hover:scale-110 hover:bg-gray-700"
                >
                  <span className="text-5xl mb-3">{tech.icon}</span>
                  <span className="text-lg font-medium text-white">{tech.name}</span>
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
