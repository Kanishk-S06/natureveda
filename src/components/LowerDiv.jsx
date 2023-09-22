import React from 'react';

const LowerDiv = () => {
  return (
    <div className='flex-row flex w-full bg-black'>
      <div className='bg-slate-50 w-2/4'>
       <div className=' w-2/4  text-center text-white bg-slate-500 '>
        Text Area
       </div>
      </div>
      <div className=' w-2/4 bg-transparent'>
        <img className="" src="/images/laptopscreen.jpg" alt="laptop-screen"></img>
      </div>
    </div>
  );
}

export default LowerDiv;

