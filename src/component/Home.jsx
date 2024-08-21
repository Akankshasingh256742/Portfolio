import React from 'react'
import Button from './Button'
import resume from '../assets/AkankshaSingh_Resume.pdf'


function Home() {
  return (
    <div id='Home' className='flex flex-col justify-center items-center'>
        <div className='flex pl-16 md:pl-0 justify-center items-center py-10'>
            <img className='md:w-60 md:h-60 w-44 h-44 rounded-full' src='https://media.licdn.com/dms/image/v2/D5603AQGIgNLGCtsd7A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723171558823?e=1729728000&v=beta&t=IXUmZzrM8eGsGmDJjE1jcqa0W1Frlqu1YUln3rLqzlY' alt="" />
        </div>
        <div className='md:text-6xl text-3xl font-abc '>
            <p><span className='bg-custom-gradient text-transparent bg-clip-text'>I'm Akanksha Singh,</span> frontend</p>
            <p className='md:pl-16'>developer based in India.</p>
        </div>
        <div className='flex gap-8 mt-6'>
            <Button style='transition-transform hover:scale-110 hover:border-2 hover:border-white duration-200 cursor-pointer' title='Connect with me' />
            <a href={resume} target='_blank' ><button className='font-abc px-11 py-2 text-lg rounded-3xl border-2 transition-colors hover:border-violet-700'>Resume</button></a>
        </div>
    </div>
  )
}

export default Home