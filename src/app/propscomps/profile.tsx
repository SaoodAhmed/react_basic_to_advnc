type propsType = {
  name: string;
  imageId: string;
  profession: string;
  discovery: string;
  award: string[];
  size?: number;
};

const Profile = ({
  name,
  imageId,
  profession,
  discovery,
  award,
  size,
}: propsType) => {
  return (
    <>
      <h2>{name}</h2>
      <img
        src={`https://i.imgur.com/${imageId}s.jpg`}
        alt={name}
        height={size}
        width={size}
        className=" rounded-full"
      />
      <ul>
        <li>
          <b>Profession:</b>
          {profession}
        </li>
        <li>
          <b>Awards:</b>
          {award.length} ({award.join(", ")})
        </li>
        <li>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </>
  );
};


export default Profile;