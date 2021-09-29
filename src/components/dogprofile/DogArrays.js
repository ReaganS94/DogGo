import "./DogArrays.css";

function DogArrays({ dog }) {
  return (
    <div className="dogarray-container">
      <div className="dogarray-character">
        <div className="array-box-text">
          <h6>character:</h6>
        </div>

        <div className="array-box-array">
          {dog.character.map((character) => (
            <button className="buttonblue arraybuttons">
              {character.character}
            </button>
          ))}
        </div>
      </div>
      <div className="dogarray-commands">
        <div className="array-box-text">
          <h6>commands:</h6>
        </div>
        <div className="array-box-array">
          {dog.commands.map((command) => (
            <button className="buttonblue arraybuttons">{command.name}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DogArrays;
