import "./CreateDog.css";

import ProfilePicList from "../createdog/DropZones/ProfilePicList";
import DropZoneProfile from "../createdog/DropZones/DropZoneProfile";

function CreateDogPic({ onDrop, profilepic }) {
  return (
    <div className="profilepic-div">
      <div>
        <p className="p1 addprofilepic">add your dogs profile picture here</p>
      </div>
      <DropZoneProfile
        onDrop={onDrop}
        accept={"image/*"}
        className={"profilepic-container"}
        classNameImg={"profilepic-img"}
      />

      <ProfilePicList profilepic={profilepic} />
    </div>
  );
}

export default CreateDogPic;
