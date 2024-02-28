"use client"

import React, { useState } from 'react'

const Sendmessage = () => {

    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('Hi!')

//   console.log(useState)


    if(isSent){
        return <h1>Your message is on it's way!</h1>
    }

    const handleOnSubmit = (e:any)=>{
        e.preventDefault();
        setIsSent(true);
    }



  return (
    <form onSubmit={handleOnSubmit} className='flex flex-col'>
        <textarea onChange={e=>setMessage(e.target.value)} placeholder='Message' value={message}/>
        <button className=' w-12 mt-2' type='submit'>send</button>




    </form>
  )
}

export default Sendmessage