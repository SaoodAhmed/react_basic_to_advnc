"use client"

import React, { useState } from 'react'

function TrafficLight() {
    const [walk, setWalk] = useState(true)

    function handlOnClick(){
       
        setWalk(!walk)
        alert(walk ? 'Stop is next':'Walk is next')
        
    }

  return (
    <>
        <button onClick={handlOnClick}>
            Change to {walk ? "Stop":"Walk"}
        </button>
        <h1 className={walk ?  "text-green-800": "text-red-600"}>{walk ? "Walk": "Stop"}</h1>
    </>
  )
}

export default TrafficLight