// import { useParams } from "react-router-dom";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import paw from "../../img/transparent-background/12.png";

import "./DogGallery.css";

function DogGallery({ dog }) {
  // const { id } = useParams();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="doggallery">
      <h2 className="textwhite">my gallery</h2>
      <img className="pawprint-gallery" src="/static/media/12.c2531b29.png" />
      <ImageList className="dog-gallery-box" cols={4} alignContent="flex-start">
        {dog.galleryPhotos.map((item) => (
          <ImageListItem className="doggalleryphoto" key={item.img}>
            <img
              src={`${item}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.name}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <button onClick={scrollToTop} className="buttonbacktop">
        back to top
      </button>
    </div>
  );
}

export default DogGallery;
