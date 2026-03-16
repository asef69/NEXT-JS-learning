import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='relative h-screen'>
      <div className='absolute inset-0 -z-10'>
        <Image src="/AI_in_healthcare.jpg" alt="AI in Healthcare" fill />
        <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>
      </div>
      <div className='flex items-center justify-center pt-64'>
      <h1 className='font-bold text-4xl text-white'>Professional AI Assistance</h1>
      </div>
    </div>
  )
}

export default Hero;