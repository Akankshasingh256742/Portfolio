import React from 'react'

function Button({title,style}) {
  return (
   
        <a href="#Contact"><button className={`font-abc bg-custom-gradient px-4 py-2 text-lg rounded-3xl ${style}`}>{title}</button></a>
  )
}

export default Button