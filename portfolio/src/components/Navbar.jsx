// import React, { useState } from 'react';
// import Logo from '../assets/Logo1.png';
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const Navbar = () => {
//     const [nav, setNav] = useState(false);

//     const toggleNav = () => {
//         setNav(!nav);
//     };

//     const closeNav = () => {
//         setNav(false);
//     };

//     const menuVariants = {
//         open: {
//             x: 0,
//             transition: {
//                 stiffness: 20,
//                 damping: 15,
//             },
//         },
//         closed: {
//             x: '-100%',
//             transition: {
//                 stiffness: 20,
//                 damping: 15,
//             },
//         },
//     };

//     return (
//         <div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
//             <div className="max-w-[1300px] mx-auto flex justify-between text-gray-200 text-xl items-center px-12 h-20">

//                 <div className='flex items-center'>
//                     <img src={Logo} alt="" className='w-[80px]' />
//                 <Link to="/" className="font-bold text-[22px]">
//                     Kanishka Trivedi
//                 </Link> 
//                 </div>

//                 {/* Desktop Menu */}
//                 <ul className="hidden md:flex gap-12 cursor-pointer">
//                     <li><Link to="/" className="hover:text-purple-400">Home</Link></li>
//                     <li><Link to="/skills" className="hover:text-purple-400">Skills</Link></li>
//                     <li><Link to="/projects" className="hover:text-purple-400">Projects</Link></li>
//                     <li><Link to="/contact" className="hover:text-purple-400">Contact</Link></li>
//                 </ul>

//                 {/* Mobile Menu Toggle */}
//                 <div onClick={toggleNav} className="md:hidden z-50 text-gray-200">
//                     {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
//                 </div>

//                 {/* Mobile Menu */}
//                 <motion.div
//                     initial={false}
//                     animate={nav ? 'open' : 'closed'}
//                     variants={menuVariants}
//                     className="fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40 flex items-center justify-center"
//                 >
//                     <ul className="font-semibold text-4xl space-y-8 text-center">
//                         <li><Link to="/" onClick={closeNav} className="hover:text-purple-400">Home</Link></li>
//                         <li><Link to="/skills" onClick={closeNav} className="hover:text-purple-400">Skills</Link></li>
//                         <li><Link to="/projects" onClick={closeNav} className="hover:text-purple-400">Projects</Link></li>
//                         <li><Link to="/contact" onClick={closeNav} className="hover:text-purple-400">Contact</Link></li>
//                     </ul>
//                 </motion.div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;









import React, { useState } from 'react';
import Logo from '../assets/Logo1.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import QuadrantDrawer from './QuadrantDrawer';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);
    };

    const menuVariants = {
        open: {
            x: 0,
            transition: {
                stiffness: 20,
                damping: 15,
            },
        },
        closed: {
            x: '-100%',
            transition: {
                stiffness: 20,
                damping: 15,
            },
        },
    };

    return (
        <div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
            <div className="max-w-[1300px] mx-auto flex justify-between text-gray-200 text-xl items-center px-12 h-20">

                <div className='flex items-center'>
                    <img src={Logo} alt="" className='w-[80px]' />
                    <Link to="/" className="font-bold text-[22px]">
                        Kanishka Trivedi
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-12 cursor-pointer">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-indigo-300 font-semibold" : "hover:text-purple-400"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/skills"
                            className={({ isActive }) =>
                                isActive ? "text-indigo-300 font-semibold" : "hover:text-purple-400"
                            }
                        >
                            Skills
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) =>
                                isActive ? "text-indigo-300 font-semibold" : "hover:text-purple-400"
                            }
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? "text-indigo-300 font-semibold" : "hover:text-purple-400"
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>


                {/* Mobile Menu Toggle */}
                <div onClick={toggleNav} className="md:hidden z-50 text-gray-200">
                    {!nav && <AiOutlineMenu size={30} />}
                </div>

                {/* Mobile Menu */}
                <QuadrantDrawer isOpen={nav} onClose={closeNav} />
            </div>
        </div>
    );
};

export default Navbar;

