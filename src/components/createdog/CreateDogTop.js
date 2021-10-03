import "./CreateDog.css";

import Navbar from "../Navbar";

function CreateDogTop() {
  return (
    <>
      <div className="createdog-header">
        <Navbar />
      </div>

      <div className="createdog-top">
        <h2>add your doggo:</h2>
      </div>
    </>
  );
}

export default CreateDogTop;
