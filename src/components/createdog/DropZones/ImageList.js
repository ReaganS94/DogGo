import React from "react";

import "./DropZone.css";

const Image = ({ image }) => {
  return (
    <div className="file-item">
      <img alt={`img - ${image.id}`} src={image.src} className="file-img" />
    </div>
  );
};

const ImageList = ({ images }) => {
  const renderImage = (image, index) => {
    return (
      <div className={"renderedimages"}>
        <Image image={image} key={`${image.id}-image`} />
      </div>
    );
  };

  return (
    <>
      <section className="file-list">
        {images && images.map(renderImage)}
      </section>
    </>
  );
};

export default ImageList;
