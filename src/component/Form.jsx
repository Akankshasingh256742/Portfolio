import React from 'react'
import Button from './Button'

function Form() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "b0ee8e59-86e0-458d-93bf-166c785f49e7");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            alert('Message Send')
          }
      }
  return (
    <div className='mx-6 md:mx-0'>
        <form onSubmit={onSubmit} action="" className='flex flex-col gap-3'>
            
            <label htmlFor="">Your Name</label>
            <input className='p-4 w-96 md:w-width3 rounded bg-color2 text-color3 font-abc3' type="text" name="Name" id="" placeholder='Enter your Name'/>
            <label htmlFor="">Your Email</label>
            <input  className='p-4 w-96 md:w-width3 rounded bg-color2 text-color3 font-abc3' type="email" name="Email" id="" placeholder='Enter your Email' />
            <label htmlFor="">Write your message here</label>
            <textarea rows={8}  className='p-4 w-96 md:w-width3 rounded bg-color2 text-color3 font-abc3' name="Message" id="" placeholder='Enter your message'></textarea>
            <div className='w-52 mt-6'>
            <button type='submit' className={`font-abc bg-custom-gradient px-4 py-2 text-lg rounded-3xl ${'transition-transform hover:scale-110 duration-200 ease-in-out delay-150'}`}>Submit now</button>
            </div>
            
        </form>
    </div>
  )
}

export default Form