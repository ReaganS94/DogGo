import { useParams } from "react-router-dom";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import paw from "../../img/transparent-background/12.png";

import "./DogGallery.css";

function DogGallery({ dog }) {
  const { id } = useParams();

  return (
    <div className="doggallery">
      <h2 className="textwhite">my gallery</h2>
      <img className="pawprint-gallery" src={paw} />
      <ImageList className="dog-gallery-box" cols={3}>
        {dog.galleryPhotos.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.name}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default DogGallery;
