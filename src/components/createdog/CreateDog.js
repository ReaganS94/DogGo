import "./CreateDog.css";
import CreateDogTop from "./CreateDogTop";
import CreateDogTextfields from "./CreateDogTextfields";
import CreateDogBooleans from "./CreateDogBooleans";
import CreateDogArrays from "./CreateDogArrays";
import CreateDogPic from "./CreateDogPic";
import DropZone from "./DropZone";

import Box from "@mui/material/Box";
// import LoadingButton from "@mui/lab/LoadingButton";
// import Stack from "@mui/material/Stack";

function CreateDog() {
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
            <CreateDogPic />
            <CreateDogTextfields />
            <CreateDogBooleans />
            <CreateDogArrays />
            <DropZone />
          </Box>
          {/* <Stack direction="row" spacing={2}>
            <LoadingButton loading variant="outlined">
              Submit
            </LoadingButton>
          </Stack> */}
        </div>

        <div className="createdog-bottom"></div>
      </div>
    </>
  );
}

export default CreateDog;
