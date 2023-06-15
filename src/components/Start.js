import React, { useRef } from 'react'

export default function Start({setusername}) {
    const inputref=useRef();

    const handleclick=()=>{
        inputref.current.value && setusername(inputref.current.value);

    }
  return (
    <div className='start'> 
      <input placeholder='Enter your name' className='startinput' ref={inputref}/>
      <button className='StartButton' onClick={handleclick}>Start</button>
    </div>
  )
}
