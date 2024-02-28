import React from "react";

type PeopleType = {
  id: number;
  name: string;
  profession: string;
  accomplishment: string;
  imageId: string;
};

const people: PeopleType[] = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
    accomplishment: "spaceflight calculations",
    imageId: "MK3eW3A",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
    accomplishment: "discovery of Arctic ozone hole",
    imageId: "mynHUSa",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
    accomplishment: "electromagnetism theory",
    imageId: "bE7W1ji",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
    accomplishment:
      "pioneering cortisone drugs, steroids and birth control pills",
    imageId: "IOjWm71",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
    accomplishment: "white dwarf star mass calculations",
    imageId: "lrWQx8l",
  },
];

const getImageUrl = (person: PeopleType) => {
  return `https://i.imgur.com/${person.imageId}s.jpg`;
};

const RenderingListTasks = () => {
  const chemists = people.filter(
    (chemist: PeopleType) => chemist.profession === "chemist"
  );
  const everyoneElse = people.filter(
    (person: PeopleType) => person.profession !== "chemist"
  );

  const ChemistsList = chemists.map((person: PeopleType) => (
    <li>
      <img
        className=" rounded-full"
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}</b>
        <br />
        {`${person.profession} known for ${person.name} `}
      </p>
    </li>
  ));

  const everyoneElseList = everyoneElse.map((person: PeopleType) => (
    <li>
      <img
        className="rounded-full"
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}</b>
        <br />
        {`${person.profession} known for ${person.name}`}
      </p>
    </li>
  ));

  return (
    <div>
      <h1>Chemists</h1>
      <ul className=" list-none">{ChemistsList}</ul>
      <h2>Everyone Else</h2>
      <ul className=" list-none ">{everyoneElseList}</ul>
    </div>
  );
};

export default RenderingListTasks;
