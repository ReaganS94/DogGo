import { useParams } from "react-router-dom";

function DogArrays({ dogs }) {
  const { id } = useParams();
  return (
    <>
      {dogs
        .filter((dog) => dog._id === id)
        .map((dog) => (
          <div>
            <div className="character">character: {dog.character[0]}</div>
            <div className="commands">commands: {dog.commands[0]}</div>
          </div>
        ))}
    </>
  );
}

export default DogArrays;
