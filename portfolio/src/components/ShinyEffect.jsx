// import React from 'react'

// const ShinyEffect = ({left, right, top, size = 500}) => {

//     const positionStyles = {
//         top: `${top}px`,
//         width: `${size}px`,
//         height: `${size}px`,
//         zIndex: -1
//     }


//     if (left !== undefined) {
//         positionStyles.left = `${left}px`
//     }

//     if (right !== undefined) {
//         positionStyles.right = `${right}px`
//     }

//   return (
//     <div className='shiny-effect' style={positionStyles}></div>
//   )
// }

// export default ShinyEffect




import React from 'react';

const ShinyEffect = ({ left = 0, right, top = 0, size = 500 }) => {
  const positionStyles = {
    top: `${top}px`,
    width: `${size}px`,
    height: `${size}px`,
    zIndex: -1,
    ...(left !== undefined ? { left: `${left}px` } : {}),
    ...(right !== undefined ? { right: `${right}px` } : {}),
  };

  return <div className="absolute bg-purple-500/20 blur-3xl rounded-full" style={positionStyles}></div>;
};

export default ShinyEffect;
