import React from 'react'

const Progress = ({ value }) => {
  // const radius = 50; // Radius of the circle
  // const circumference = 2 * Math.PI * radius; // Circumference of the circle
  // const offset = circumference - (progress / 50) * circumference; // Offset to represent progress



  return (
    <div className='w-fit flex justify-center flex-col items-center mt-2 mx-auto'>
      <div role="progressbar" className=' font-Orbitron ' style={{ "--value": value }}>
        <div className='flex flex-col items-center justify-center'>
          <p className='block text-2xl'>
            {value}%
          </p>
          <p className='block font-Raleway text-sm text-light'>Progress</p>
        </div>
      </div>

      <div className='w-full flex justify-between font-Raleway items-center mt-1 text-light'>
        <p>0%</p>
        <p className=' translate-x-2'>{value}%</p>
      </div>
    </div>
  );
};

export default Progress