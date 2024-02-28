import React from 'react'

type PeopleType = {
    id:number;
    name:string;
    profession:string;
    accomplishment:string;
    imageId:string;
}

const people:PeopleType[] = 
[
    {
        id:0,
        name:'Creola Katherine Johnson',
        profession: 'mathematician',
        accomplishment:'spaceflight calculations',
        imageId: 'MK3eW3A'
    }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
        accomplishment: 'discovery of Arctic ozone hole',
        imageId: 'mynHUSa'
      }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
        accomplishment: 'electromagnetism theory',
        imageId: 'bE7W1ji'
      }, {
        id: 3,
        name: 'Percy Lavon Julian',
        profession: 'chemist',
        accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
        imageId: 'IOjWm71'
      }, {
        id: 4,
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
        accomplishment: 'white dwarf star mass calculations',
        imageId: 'lrWQx8l'
      }
]


function getImageUrl(person:PeopleType){
    return `https://i.imgur.com/${person.imageId}s.jpg`
}


const RenderingList = () => {

    const physicist = people.filter((person:any)=>person.profession === 'chemist')
    // console.log(physicist)
    
    const listItems = physicist.map((person:any)=>(
        <li key={person.id} className='flex gap-x-4 justify-center items-center'>
            <img className='rounded-full' src={getImageUrl(person)} alt={person.name}/>
            <p>
                <b>{person.name} : </b>
                <br/>
                {person.profession} known for {person.accomplishment}
            </p>
        </li>
    ))



  return <ul className=' justify-center items-center list-none'>{listItems}</ul>
}

export default RenderingList