import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

function DogAbout({ dog }) {
  const { id } = useParams();

  return (
    <>
      <div className="dogprofile-top">
        <div className="dogprofilepic">
          <img src={dog.profilePic} />
        </div>

        <div className="dogprofiletop-right">
          <div className="nameandfacts">
            <div className="dogname">
              <div>
                <h2>hi, I am {dog.name}</h2>
              </div>
            </div>
            <div className="dogkeyfacts">
              <div className="age">
                {" "}
                <h6>{dog.age} years</h6>
              </div>
              <div className="breed">
                <h6>{dog.breed}</h6>
              </div>
              <div className="size">
                {" "}
                <h6> {dog.size} kg</h6>
              </div>
            </div>
          </div>
          <div className="aboutpart">
            <div className="aboutme-dog">
              <h3 className="">about me:</h3>{" "}
              <div className="p1">{dog.about}</div>
            </div>
            <div className="aboutdogparent">
              <h3>my parent:</h3>
              <img src={dog.user.profilePic} />

              <div>
                <NavLink to="/userprofile/:id">
                  <button className="backtoparent">back to my parent</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DogAbout;
