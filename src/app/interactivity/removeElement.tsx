"use client"


import React, { useState } from "react";

interface initialArtistsType{
    id:number;
    name:string;
}

const initialArtists:initialArtistsType[] = [
  {
    id: 0,
    name: "Saud Ahmed",
  },
  {
    id: 1,
    name: "AsmSa",
  },
  {
    id: 2,
    name: "Hamzaa Jann",
  },
];

const RemoveElement = () => {
    const [artists, setArtists] = useState(initialArtists);
  return (
    <>
        <div>
            <h1>Inspiring Sculptors: </h1>
            {
                artists.map((artist:initialArtistsType)=>{
                    return (
                        <li key={artist.id}>{artist.name}
                            <button onClick={()=>setArtists((artists.filter((item:any)=>item.id !== artist.id)))}>Delete</button>
                        </li>
                    )
                })
            }
        </div>
    </>
  )
};

export default RemoveElement;
