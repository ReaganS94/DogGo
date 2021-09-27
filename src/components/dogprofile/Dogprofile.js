import { useParams } from "react-router-dom";

import DogAbout from "./DogAbout";
import DogArrays from "./DogArrays";
import DogBooleans from "./DogBooleans";

import Navbar from "../Navbar";

function Dogprofile({ dogs }) {
  const { id } = useParams();
  return (
    <>
      <div className="headerdogprofile">
        <Navbar />
        <p className="textwhite p1 slogan">So you can go places together</p>
      </div>

      <div className="dogprofile-container">
        {dogs
          .filter((dog) => dog._id === id)
          .map((dog) => (
            <div>
              <DogAbout dogs={dogs} />
              <DogBooleans dogs={dogs} />
              <DogArrays dogs={dogs} />
            </div>
          ))}
      </div>
    </>
  );
}

export default Dogprofile;
