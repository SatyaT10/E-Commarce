// import React from 'react'

// const HeroSection = () => {
//     // assets/img/video/bannervideo.mp4
//     // style={{
//         // backgroundImage:'url("../src/public/images/ajay.jpeg")'
//     //    }}
//   return (
//    <>
//    <div className='  h-[810px]  relative  overflow-hidden'  >
   
//    <img src='https://www.cartwings.com/public/uploads/all/lA500aYe0Awyj0aTa9dxQkOuXd4kc5nZWAvg0H6g.webp' className="w-full h-full object-cover"> </img>
//    {/* <div className="absolute inset-0 bg-black opacity-40"></div>
//     <div className="absolute inset-0 items-center flex px-20">
//           <p className="text-white text-[30px] font-bold">Ajay Pratap Singh</p>
//         </div> */}
//         <div className='inset-0 bg-black opacity-40 absolute'></div>
//         <div className='inset-0 flex absolute items-center px-20'>
//           <p className='text-white'>ajay singh</p>
//         </div>
     
//    </div>
//    </>
//   )
// }

// export default HeroSection


import React from 'react';

const HeroSection = () => {
  return (
    <div className="h-full relative overflow-hidden z-100">
    
      <img
        src="https://www.cartwings.com/public/uploads/all/lA500aYe0Awyj0aTa9dxQkOuXd4kc5nZWAvg0H6g.webp"
        alt="Background"
        className="w-full h-full bg-cover bg-no-repeat "
      />
      
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0 flex items-center px-20">
        <p className="text-white text-[30px] font-bold">Satyaprakash Roy</p>
      </div>
    </div>
  );
};

export default HeroSection;
