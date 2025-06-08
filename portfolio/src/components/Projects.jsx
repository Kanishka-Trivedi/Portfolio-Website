// import React from 'react';
// import project1 from "../assets/project1.png"
// import project2 from "../assets/project2.png"
// import project4 from "../assets/project4.png"
// import project5 from "../assets/project5.png"
// import project6 from "../assets/project6.png"
// import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
// import Reveal from './Reveal';

// const projects = [
//     {
//       img: project1,
//       title: "Project #1",
//       description: "UI for frontend development using React.",
//       links: {
//         site: "#",
//         github: "#",
//       },
//     },
//     {
//       img: project2,
//       title: "Project #2",
//       description: "A fullstack application built with Node.js and MongoDB.",
//       links: {
//         site: "#",
//         github: "#",
//       },
//     },
//     {
//       img: project4,
//       title: "Project #3",
//       description: "An e-commerce platform with various features.",
//       links: {
//         site: "#",
//         github: "#",
//       },
//     },
//     {
//       img: project5,
//       title: "Project #4",
//       description: "A mobile-friendly application using React Native.",
//       links: {
//         site: "#",
//         github: "#",
//       },
//     },
//     {
//       img: project6,
//       title: "Project #5",
//       description: "A data visualization project using D3.js and other libraries.",
//       links: {
//         site: "#",
//         github: "#",
//       },
//     },
//   ]

// const Portfolio = () => {
//   return (
//     <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
//         <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
//         {projects.map((project, index) => (
//             <Reveal>
//             <div key={index} 
//             className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
//                 <div className='w-full md:w-1/2 p-4'>
//                     <img
//                         src={project.img}
//                         alt={project.title}
//                         className='w-full h-full object-cover rounded-lg shadow-lg'
//                     />
//                 </div>
//                 <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
//                     <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
//                     <p className='text-gray-300 mb-4'>{project.description}</p>
//                     <div className='flex space-x-4'>
//                         <a href={project.links.site}
//                             className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
//                                         transition duration-300'>
//                             View Site
//                         </a>
//                         <a href={project.links.github}
//                             className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
//                                         transition duration-300'>
//                             <AiOutlineGithub/>
//                         </a>

//                     </div>

//                 </div>

//             </div>
//             </Reveal>
//         ))}
        
//     </div>
//   )
// }

// export default Portfolio




import React from 'react';
import { Link } from 'react-router-dom';
import Project1 from "../assets/Project1.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/Project3.png";
import Project4 from "../assets/Project4.png";
import Project5 from "../assets/Project5.png";
import Project6 from "../assets/Project6.png";
import Project7 from "../assets/Project7.png";
import Project8 from "../assets/Project8.png";
import Project9 from "../assets/Project9.png";
import Project10 from "../assets/Project10.png";
import { AiOutlineGithub } from 'react-icons/ai';
import Reveal from './Reveal';

const projects = [
    {
      img: Project1,
      name: "FINOPTIX",
      title: "Project 1",
      description: "Finoptix – A financial tracking app built with React, Vite, and MongoDB that helps users optimize savings, track expenses, and detect discrepancies with smart alerts and real-time insights.",
      links: {
        site: "https://finoptix.netlify.app",
        github: "https://github.com/Kanishka-Trivedi/finoptix",
      },
    },
    {
      img: Project2,
      name: "NASA Clone",
      title: "Project 2",
      description: "NASA Clone – A responsive HTML & CSS website replicating NASA’s design with space imagery and mission details. ",
      links: {
        site: "https://nasaclone12.netlify.app",
        github: "https://github.com/Kanishka-Trivedi/NASA-Clone",
      },
    },
    {
      img: Project3,
      name: "Canva Clone",
      title: "Project 3",
      description: "A responsive HTML & CSS design mimicking Canva’s UI with a sleek and modern layout.",
      links: {
        site: "https://canva-clone12.netlify.app",
        github: "https://github.com/Kanishka-Trivedi/Canva-Clone",
      },
    },
    {
      img: Project4,
      name: "Citadel Clone",
      title: "Project 4",
      description: "A responsive HTML & CSS replica of Citadel’s website, featuring a sleek and professional design.",
      links: {
        site: "https://citadelclone12.netlify.app",
        github: "https://github.com/Kanishka-Trivedi/Citadel-Clone",
      },
    },
    {
      img: Project5,
      name: "API Route Project",
      title: "Project 5",
      description: "A React Router project using MealsDB, CocktailDB, and more to browse meals, drinks, and recipes. ",
      links: {
        site: "/projects/project5",
        github: "https://github.com/Kanishka-Trivedi/Route-Project",
      },
    },
    {
      img: Project6,
      name: "Swiggy Clone",
      title: "Project 6",
      description: "A responsive HTML & CSS replica of Swiggy’s UI, featuring a clean design and food delivery layout.",
      links: {
        site: "/projects/project6",
        github: "https://github.com/Kanishka-Trivedi/Html-Projects/blob/main/swiggy%20clone.html",
      },
    },
    {
      img: Project7,
      name: "Plant Orbit",
      title: "Project 7",
      description: "A responsive HTML & CSS website for buying plants, featuring a clean and green design.",
      links: {
        site: "/projects/project7",
        github: "https://github.com/Kanishka-Trivedi/Html-Projects/blob/main/plant%20website.html",
      },
    },
    {
      img: Project8,
      name: "Amazon Clone",
      title: "Project 8",
      description: "A responsive HTML & CSS replica of Amazon’s UI, featuring a product grid and e-commerce layout.",
      links: {
        site: "/projects/project8",
        github: "https://github.com/Kanishka-Trivedi/Html-Projects/blob/main/amazon%20clone.html",
      },
    },
    {
      img: Project9,
      name: "Spotify Clone",
      title: "Project 9",
      description: "A React project replicating Spotify’s UI with dynamic music browsing, playlists, and a sleek audio player.",
      links: {
        site: "/projects/project9",
        github: "https://github.com/Kanishka-Trivedi/Html-Projects/tree/main/Spotify%20Clone/vite_app",
      },
    },
    {
      img: Project10,
      name: "Curency Calculator",
      title: "Project 10",
      description: "A React app using an API to provide real-time currency conversion with a simple and intuitive UI.",
      links: {
        site: "/projects/project10",
        github: "https://github.com/Kanishka-Trivedi/React-Projects/tree/main/currencyCalculator",
      },
    }
];

const Projects = () => {
  return (
  <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">

<h2 className="text-3xl font-bold text-gray-200 mb-8 mt-20">Project Demos</h2>

<div className="flex justify-center">
  <div className="relative w-full max-w-2xl" style={{ paddingTop: "56.25%" }}>
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src="https://www.youtube.com/embed/LGklxaiPuXo"
      title="Embedded Video"
      frameBorder="0"
      allowFullScreen
    ></iframe>
  </div>
</div>


      <h2 className="text-3xl font-bold text-gray-200 mb-8 mt-15">Projects</h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
            <div className="w-full md:w-1/2 p-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">{project.title}</h3>
              <h4 className="text-xl font-semibold text-gray-200 mb-4">{project.name}</h4>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <Link
                  to={project.links.site}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                >
                  View Project
                </Link>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                >
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Projects;
