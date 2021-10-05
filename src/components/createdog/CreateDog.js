import "./CreateDog.css";
import CreateDogTop from "./CreateDogTop";
import CreateDogTextfields from "./CreateDogTextfields";
import CreateDogBooleans from "./CreateDogBooleans";
import CreateDogArrays from "./CreateDogArrays";
import CreateDogCommands from "./CreateDogCommands";

import DropZone from "../createdog/DropZones/DropZone";
import ImageList from "../createdog/DropZones/ImageList";
import CreateDogPic from "./CreateDogPic";

import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

import cuid from "cuid";
import axios from "axios";

function CreateDog() {
  //acceptedFiles is an array of File values. You can read the file or send it to the server and upload.
  //Whatever process you want to do, you can do it there

  const onDropImage = useCallback((acceptedFiles) => {
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

  const onDropProfilePic = useCallback((acceptedFiles) => {
    console.log("accepted files", acceptedFiles);
    const reader = new FileReader();
    reader.onload = function (e) {
      setProfilePic([{ id: cuid(), src: e.target.result }]);
    };
    reader.readAsDataURL(acceptedFiles[0]);
  }, []);

  /*CREATE NEW DOG // PUSH TO SERVER------------------*/

  const [dogname, setDogname] = useState("");
  const [dogbreed, setDogbreed] = useState("");
  const [dogsize, setDogsize] = useState();
  const [dogage, setDogage] = useState();
  const [dogabout, setDogabout] = useState("");

  const [dogkidfriendly, setDogkidfriendly] = useState();
  const [dogcatfriendly, setDogcatfriendly] = useState();
  const [dogallergies, setDogallergies] = useState();
  const [dogcastrated, setDogcastrated] = useState();

  const [dogprofilepic, setDogprofilepic] = useState("");
  const [doggallery, setDoggallery] = useState([]);

  const [images, setImages] = useState([]);
  const [profilepic, setProfilePic] = useState([]);
  const [character, setCharacter] = useState([]);
  const [command, setCommand] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDoggo = {
      name: dogname,
      breed: dogbreed,
      size: dogsize,
      age: dogage,
      about: dogabout,
      kidFriendly: dogkidfriendly,
      catFriendly: dogcatfriendly,
      allergies: dogallergies,
      castrated: dogcastrated,
      profilePic: dogprofilepic,
      doggallery,
      character,
      commands: command,
    };

    const refreshPage = (e) => {
      window.location.reload(false);
    };

    const scrollToTop = (e) => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const cleanInput = (e) => {
      setDogname("");
      setDogbreed("");
      setDogage("");
      setDogsize("");
      setDogabout("");
      setDogprofilepic();

      setDogkidfriendly();
      setDogcatfriendly();
      setDogallergies();
      setDogcastrated();

      setDogprofilepic();
      setDoggallery([]);

      setCharacter([]);
      setCommand([]);
      setImages([]);
      setProfilePic("");
    };

    axios
      .post("https://dry-temple-96625.herokuapp.com/dogs", newDoggo)
      .then((res) => {
        console.log(res);
        alert("Your dog has been added.");
        cleanInput();
        // refreshPage();
        scrollToTop();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <CreateDogTop />
      <div className="createdog-container">
        <div className="createdog-form" id="myForm">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <CreateDogPic onDrop={onDropProfilePic} profilepic={profilepic} />
            <CreateDogTextfields
              dogname={dogname}
              dogbreed={dogbreed}
              dogsize={dogsize}
              dogage={dogage}
              dogabout={dogabout}
              setDogname={setDogname}
              setDogbreed={setDogbreed}
              setDogsize={setDogsize}
              setDogage={setDogage}
              setDogabout={setDogabout}
            />
            <CreateDogBooleans
              dogkidfriendly={dogkidfriendly}
              dogcatfriendly={dogcatfriendly}
              dogcastrated={dogcastrated}
              dogallergies={dogallergies}
              setDogkidfriendly={setDogkidfriendly}
              setDogcatfriendly={setDogcatfriendly}
              setDogcastrated={setDogcastrated}
              setDogallergies={setDogallergies}
            />
            <CreateDogArrays
              character={character}
              setCharacter={setCharacter}
            />

            <CreateDogCommands command={command} setCommand={setCommand} />

            <DropZone
              onDrop={onDropImage}
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
          <Link to="/userprofile/614a158ebb2bb0928e269f5f">
            <button className="cancelbutton">cancel</button>
          </Link>
          <input
            className="submitbutton"
            value="save"
            type="submit"
            onClick={handleSubmit}
          ></input>
        </div>
      </div>
    </>
  );
}

export default CreateDog;
