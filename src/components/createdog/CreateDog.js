import "./CreateDog.css";
import CreateDogTop from "./CreateDogTop";
import CreateDogTextfields from "./CreateDogTextfields";
import CreateDogBooleans from "./CreateDogBooleans";
import CreateDogArrays from "./CreateDogArrays";
import DropZone from "./DropZone";
import ImageList from "./ImageList";

import { useCallback, useState } from "react";
import Box from "@mui/material/Box";

import cuid from "cuid";

function CreateDog() {
  const [images, setImages] = useState([]);
  //acceptedFiles is an array of File values. You can read the file or send it to the server and upload.
  //Whatever process you want to do, you can do it there

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    acceptedFiles.map((file) => {
      // Initialize FileReader browser API
      const reader = new FileReader();
      // onload callback gets called after the reader reads the file data
      reader.onload = function (e) {
        // add the image into the state.
        setImages((prevState) => [
          ...prevState,
          { id: cuid(), src: e.target.result },
        ]);
      };
      // Read the file as Data URL (since we accept only images)
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  return (
    <>
      <CreateDogTop />
      <div className="createdog-container">
        <div className="createdog-form">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <DropZone
              onDrop={onDrop}
              accaept={"image/*"}
              className={"profilepic-container"}
              classNameImg={"profilepic-img"}
            />
            <CreateDogTextfields />
            <CreateDogBooleans />
            <CreateDogArrays />
            <DropZone
              onDrop={onDrop}
              accept={"image/*"}
              className={"dragndrop-container"}
              classNameImg={"dragndrop-img"}
              textdefault={
                "Drag 'n' drop your photo here or click to select files."
              }
              textactive={"Release to drop the files here"}
            />
            <ImageList images={images} />
          </Box>
        </div>

        <div className="createdog-bottom">
          <input className="submitbutton" value="save" type="submit"></input>
        </div>
      </div>
    </>
  );
}

export default CreateDog;
