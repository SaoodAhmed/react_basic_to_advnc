"use client"


import { useState } from "react";

interface ArtistsArrayType {
  id: number;
  name: string;
}

const artistsArray: ArtistsArrayType[] = [];
let nextId = 0;

const AddElement = () => {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState(artistsArray);
  return (
    <div>
      <h2>Inspiring Sculpturs</h2>
      <input
        type={name}
        placeholder="Enter Your Name"
        onChange={(e: any) => setName(e.target.value)}
      />
      <span>
        <button
          onClick={() => setArtists([...artists, { id: nextId++, name: name }])}
        >
          Add
        </button>
      </span>
      <ul>
        {
            artists.map((artist:ArtistsArrayType)=>(
                <li key={artist.id}>
                    {artist.name}
                    <button onClick={()=>setArtists(artists.filter((item:any)=>item.id !== artist.id))}>Delete</button>
                            
                </li>
            ))
        }
      </ul>
    </div>
  );
};

export default AddElement;
