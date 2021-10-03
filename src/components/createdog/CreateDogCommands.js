import "./CreateDog.css";

import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";

function CreateDogCommands() {
  return (
    <div className="createdog-commands-array ">
      <FormControl sx={{ m: 7 }} component="fieldset" variant="standard">
        <FormLabel component="legend">commands</FormLabel>
        <FormGroup>
          <div className="createdog-character">
            <FormControlLabel
              control={
                <Checkbox
                  // // checked={jason}
                  // onChange={handleChange}
                  name="sit"
                />
              }
              label="sit"
            />
            <FormControlLabel
              control={
                <Checkbox
                  // checked={antoine}
                  // onChange={handleChange}
                  name="come"
                />
              }
              label="come"
            />
            <FormControlLabel
              control={
                <Checkbox
                  // checked={antoine}
                  // onChange={handleChange}
                  name="paw"
                />
              }
              label="paw"
            />
            <FormControlLabel
              control={
                <Checkbox
                  // checked={antoine}
                  // onChange={handleChange}
                  name="stop"
                />
              }
              label="stop"
            />
            <FormControlLabel
              control={
                <Checkbox
                  // checked={antoine}
                  // onChange={handleChange}
                  name="stay"
                />
              }
              label="stay"
            />

            <FormControlLabel
              control={
                <Checkbox
                  // checked={antoine}
                  // onChange={handleChange}
                  name="bring"
                />
              }
              label="bring"
            />
            <FormControlLabel
              control={
                <Checkbox
                  // checked={antoine}
                  // onChange={handleChange}
                  name="down"
                />
              }
              label="down"
            />
          </div>
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default CreateDogCommands;
