// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { AiOutlineClose } from 'react-icons/ai';

// const QuadrantDrawer = ({ isOpen, onClose }) => {
//   const sections = ['Home', 'Skills', 'Projects', 'Contact'];
//   const navigate = useNavigate();

//   const handleNavigate = (path) => {
//     onClose();
//     navigate(path);
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-40 z-40"
//           onClick={onClose}
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             exit={{ scale: 0 }}
//             transition={{ duration: 0.4, ease: 'easeInOut' }}
//             className="absolute top-0 right-0 w-[300px] h-[300px] z-50"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Cross Button */}
//             <button
//               onClick={onClose}
//               className="absolute top-2 right-2 text-white bg-transparent hover:text-red-400 transition-colors"
//             >
//               <AiOutlineClose size={22} />
//             </button>

//             {/* Section Buttons */}
//             {sections.map((section, index) => (
//               <motion.div
//                 key={section}
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 * index }}
//                 className="absolute text-white font-semibold text-sm flex items-center justify-end pr-4 cursor-pointer hover:bg-purple-700"
//                 style={{
//                   backgroundColor: `hsl(${260 + index * 15}, 100%, 50%)`,
//                   width: `${100 + index * 30}px`,
//                   height: `40px`,
//                   top: `${index * 60 + 40}px`, // pushed down to avoid cross
//                   right: 0,
//                   borderTopLeftRadius: '150px',
//                   borderBottomLeftRadius: '150px',
//                 }}
//                 onClick={() => handleNavigate(`/${section.toLowerCase()}`)}
//               >
//                 {section}
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export default QuadrantDrawer;







import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';

const QuadrantDrawer = ({ isOpen, onClose }) => {
  const sections = [
    { name: 'Home', path: '/' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const sectionColors = [
  '#4B0082', // Indigo
  '#5E2B97', // Deep Violet
  '#6A0DAD', // Amethyst Purple
  '#7B1FA2', // Royal Purple
];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-40 z-40"
          onClick={onClose} // clicking outside closes drawer
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="absolute top-0 right-0 w-[300px] h-[300px] z-50"
            onClick={(e) => e.stopPropagation()} // clicking inside won’t close it
          >
            {/* Cross Button */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-white bg-transparent hover:text-red-400 transition-colors"
            >
              <AiOutlineClose size={22} />
            </button>

            {/* Section Buttons */}
            {sections.map((section, index) => (
              <motion.div
                key={section.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="absolute text-white font-semibold text-sm flex items-center justify-end pr-4 cursor-pointer hover:bg-purple-700"
                style={{
                backgroundColor: sectionColors[index],
                  width: `${100 + index * 30}px`,
                  height: `40px`,
                  top: `${index * 60 + 40}px`, // pushed down to avoid cross
                  right: 0,
                  borderTopLeftRadius: '150px',
                  borderBottomLeftRadius: '150px',
                }}
              >
                <Link
                  to={section.path}
                  onClick={onClose}
                  className="w-full h-full flex items-center justify-end pr-4"
                >
                  {section.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuadrantDrawer;
