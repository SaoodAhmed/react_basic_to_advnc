"use client"

import React, { useState } from 'react'


function Sendmessageadv() {

    const [to, setTo] = useState('Saud Ahmed');
    const [message, setToMessage] = useState("Hi!")


    function handleSubmit(e:any) {
        e.preventDefault();
        setTimeout(() => {
          alert(`You said ${message} to ${to}`);
        }, 5000);
      }



  return (
    <form className='flex flex-col' onSubmit={handleSubmit}>
        <label>
            To:{' '}
            <select onChange={e=>setTo(e.target.value)}>
                <option value={"Saud Ahmed"}>Saud Ahmed</option>
                <option value={"Shahzaib Sarki"}>Shahzaib</option>
            </select>
        </label>
        <textarea onChange={e => setToMessage(`${e.target.value}`)} value={message} />
        <button className="w-12" type="submit">send</button>
    </form>
  )
}

export default Sendmessageadv