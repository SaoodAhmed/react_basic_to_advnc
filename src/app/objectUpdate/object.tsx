"use client";

import React, { useState } from "react";

interface PersonType {
  name: string;
  artWork: {
    title: string;
    city: string;
    image: string;
  };
}

const personObj: PersonType = {
  name: "Saud Ahmed",
  artWork: {
    title: "Philosopher",
    city: "Hyderabad",
    image: "https://i.imgur.com/Sd1AgUOm.jpg",
  },
};

const UpdateObject = () => {
  const [person, setPerson] = useState(personObj);

  // Okk
  // const handleName = (e:any)=>{
  //     setPerson({
  //         name:e.target.value,
  //         artWork:{
  //             title:"Philosopher",
  //             city:"Hyderabad",
  //             image:"https://i.imgur.com/Sd1AgUOm.jpg"
  //         }
  //     })

  // }

  // Okay
  // const handleTitle = (e:any)=>{
  //     setPerson({
  //         name:"Saud Ahmed",
  //         artWork:{
  //             title:e.target.value,
  //             city:"Hyderabad",
  //             image:"https://i.imgur.com/Sd1AgUOm.jpg"
  //         }

  //     })
  // }




  const handleName = (e: any) => {
    setPerson({
      ...person,
      name: e.target.value,
    });
  };

  const handleTitle = (e: any) => {
    setPerson({
      ...person,
      artWork: {
        ...person.artWork,
        title: e.target.value,
      },
    });
  };



  const handleCity = (e: any) => {
    setPerson({
      ...person,
      artWork: {
        ...person.artWork,
        city: e.target.value,
      },
    });
  };

  return (
    <div>
      <div className="mb-8 text-lg space-y-4 flex flex-col">
        Name :{" "}
        <input
          className=" py-[4px] px-4 rounded-lg text-lg  w-64"
          placeholder="Saud Ahmed"
          type="text"
          value={person.name}
          onChange={handleName}
        />
        Title :{" "}
        <input
          className=" py-[4px] px-4 rounded-lg text-lg w-64"
          placeholder="Saud Ahmed"
          type="text"
          value={person.artWork.title}
          onChange={handleTitle}
        />
        City :{" "}
        <input
          className=" py-[4px] px-4 rounded-lg text-lg w-64"
          placeholder="Saud Ahmed"
          type="text"
          value={person.artWork.city}
          onChange={handleCity}
        />
        Image :{" "}
        <input
          className=" py-[4px] px-4 rounded-lg text-lg w-64"
          placeholder="Saud Ahmed"
          type="text"
          value={person.artWork.image}
          onChange={(e: any) =>
            setPerson({
              ...person,
              artWork: { 
                ...person.artWork, 
                image: e.target.value 
            },
            })
          }
        />
      </div>
      <div>
        <p>
          {`${person.artWork.title} by `} {person.name}
        </p>
        <p>
            {`(located in ${person.artWork.city})`}
        </p>
        <img src={person.artWork.image} className=" w-auto" alt={person.artWork.title}/>
        
      </div>
    </div>
  );
};

export default UpdateObject;
