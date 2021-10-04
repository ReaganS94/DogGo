import React from "react";

import "./DropZone.css";

const Image = ({ image }) => {
  return (
    <div className="file-item">
      <img alt={`img - ${image.id}`} src={image.src} className="file-img" />
    </div>
  );
};

const ProfilePicList = ({ profilepic }) => {
  const renderImage = (image, index) => {
    return (
      <div className={"renderprofilepic"}>
        <Image image={image} key={`${image.id}-image`} />
      </div>
    );
  };

  return (
    <>
      <section className="profilepic-list">
        {profilepic && profilepic.map(renderImage)}
      </section>
    </>
  );
};

export default ProfilePicList;
