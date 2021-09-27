import { useParams } from "react-router-dom";

function DogArrays({ dog }) {
  const { id } = useParams();

  return (
    <div className="dogarray-container">
      <div className="dogarray-character">
        <h6>character:</h6>
        {dog.character.map((character) => (
          <button className="buttonblue">{character}</button>
        ))}
      </div>
      <div className="dogarray-commands">
        <h6>commands:</h6>
        {dog.commands.map((command) => (
          <button className="buttonblue">{command}</button>
        ))}
      </div>
    </div>
  );
}

export default DogArrays;
