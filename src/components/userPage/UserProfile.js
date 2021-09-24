import React, { useState } from "react";
import "./UserProfile.css";
import HeaderUserProfile from "./HeaderUserProfile";
import ToggleButton from "../userPage/ToggleButton";

function UserProfile() {
  //  const [user, setUsers] = useState([]);

  {
    /* useEffect(() => {
        axios
          .get("")
          .then((json) => {
            setRecipes(json.data.data);
            console.log("blablabla", json.data.data);
          })
          .catch((err) => console.log(err));
      }, []);
    
      console.log("recipes console", recipes);
    */
  }

  const [toggled, setToggled] = useState(false);

  const onChange = (event) => {
    setToggled(event.target.checked);
  };

  return (
    <div className="userProfile">
      <HeaderUserProfile />

      <div className="userDetails">
        <div className="userDetailsLeft backgroundred">
          <img
            src="https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1160&q=80"
            width="200px"
          />
          <h6>location</h6>
          <ToggleButton onChange={onChange} />
          <p>{toggled ? "Open to take care of your buddy" : ""}</p>
        </div>

        <div className="userDetailsMiddle backgroundyellow">
          <h5>user name</h5>
          <h6>about</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident
          </p>
        </div>

        <div className="userDetailsRight backgroundblue">
          <p>Activities</p>
        </div>
      </div>

      <div className="linkedDogs">
        <img
          src="https://images.unsplash.com/photo-1610312287759-a7aae807b165?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1156&q=80"
          width="200px"
        />
        <img
          src="https://images.unsplash.com/photo-1610312287759-a7aae807b165?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1156&q=80"
          width="200px"
        />
        <img
          src="https://images.unsplash.com/photo-1610312287759-a7aae807b165?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1156&q=80"
          width="200px"
        />
      </div>
    </div>
  );
}

export default UserProfile;
