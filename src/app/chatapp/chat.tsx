import React, { useState } from 'react'

const Chat = ({contact}:{contact:any}) => {
    const [text, setText] = useState('')
  return (
    <div className='flex flex-col '>
        <textarea  rows={8} onChange={(e:any)=>setText(e.target.value)} value={text} placeholder={`send to ${contact.name}`}/>
        <br/>
        <button className=' '>{`Send to ${contact.email}`}</button>
    </div>
  )
}

export default Chat