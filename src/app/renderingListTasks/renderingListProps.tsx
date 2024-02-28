interface PeoplePropsType {
  title: string;
  people: PeopleType[];
}

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

const RenderingListPropsSection = ({ title, people }: PeoplePropsType) => {
  return (
    <div>
      <h1>{title}</h1>

      <ul>
        {people.map((person: PeopleType) => {
          return (
            <li key={person.id}>
              <img src={getImageUrl(person)} alt={person.name} />
              <p>
                <b>{person.name}</b>
                {`${person.profession} know for ${person.accomplishment}`}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const RenderingListProps = () => {
  const chemists = people.filter(
    (person: PeopleType) => person.profession === "chemist"
  );
  const everyoneElse = people.filter(
    (person: PeopleType) => person.profession !== "chemist"
  );

  return (
    <>
      <RenderingListPropsSection title="Chemists" people={chemists} />
      <RenderingListPropsSection title="Else Everyone" people={everyoneElse}/>
    </>
  );
};

export default RenderingListProps;
