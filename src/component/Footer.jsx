import React from 'react'
import logo from '../assets/logo.svg'

function Footer() {
  return (
    <div className='mt-14 flex-col px-11 md:px-0'>
        
        <div className='relative'>
        <h1 className='relative z-40 text-5xl font-abc2 font-extrabold '>Akanksha</h1>
        <img className='absolute -top-9 left-0 z-30   w-width1' src={logo} alt="" />
      </div>
      <div className='mt-1 text-sm md:text-base'>
        <p>I am Frontend developer from, Bangalore with 2 years <br />experience in Cognizant.</p>
      </div>
     
      <div>
        <hr className='bg-white mt-6 rounded'/>
      </div>
      <div className='mt-3 text-xs md:text-base flex justify-between'>
          <p >© 2024 Akanksha Singh. All rights reserved.</p>
          <ul className='flex md:gap-7'>
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
            <li>Connect with me</li>
          </ul>
      </div>
    </div>
  )
}

export default Footer