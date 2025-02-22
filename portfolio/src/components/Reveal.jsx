// import React, { useEffect, useRef } from 'react'
// import { motion, useInView, useAnimation } from 'framer-motion'

// const Reveal = ({ children, width = 'fit-content' }) => {

//     const ref = useRef(null)

//     const isInView = useInView(ref, { once: true })

//     const mainControls = useAnimation()

//     useEffect(() => {
//         if (isInView) {
//             mainControls.start('visible')
//         }
//     }, [isInView, mainControls])

//   return (
//     <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>

//         <motion.div
//         variants={{
//             hidden: { opacity: 0, y: 75 },
//             visible: { opacity: 1, y: 0 }, 
//         }}
//         initial="hidden"
//         animate={mainControls}
//         transition={{ duration: 0.5, delay: 0.25 }}
//         >
//             {children}
//         </motion.div>
        
//     </div>
//   )
// }

// export default Reveal





import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({ children, width = "fit-content", duration = 0.5, delay = 0.25 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" }); // Adjust margin for smooth triggering
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <div ref={ref} style={{ width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration, delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;
