import React from 'react'

export default function Intro() {
  return (
    <div className='grid grid-cols-2 h-screen items-center'>
        <div className='flex flex-col space-y-10'>
          <h1 className='text-5xl font-semibold text-Primary'> The Best <br /> <b className='text-Secondary'>Marketing</b></h1>
          <h1 className='text-3xl font-semibold'>Doesn't Feel Like Marketing</h1>
          <button className='px-16 py-3 bg-Secondary text-xl text-white max-w-max hover:bg-Primary'>Get Started</button>
        </div>

        <div className='p-10'>
        <lottie-player src="https://lottie.host/630e55f8-bf0b-485a-9d76-5ec8eae069a5/OeoVJfImAa.json" background="#FFFFFF" speed="1"  loop autoplay ></lottie-player>
        
        </div>
    </div>
    
  );
}
