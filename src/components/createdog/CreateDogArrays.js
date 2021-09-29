import "./CreateDog.css";

import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";

function CreateDogArrays() {
  return (
    <div className="createdog-arrays">
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">character</FormLabel>
        <FormGroup>
          <div className="createdog-character">
            <div className="createdogarray-left">
              <FormControlLabel
                control={
                  <Checkbox
                    // // checked={jason}
                    // onChange={handleChange}
                    name="calm"
                  />
                }
                label="calm"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={antoine}
                    // onChange={handleChange}
                    name="easy going"
                  />
                }
                label="easy going"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={antoine}
                    // onChange={handleChange}
                    name="courageous"
                  />
                }
                label="courageous"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={antoine}
                    // onChange={handleChange}
                    name="territorial"
                  />
                }
                label="territorial"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={antoine}
                    // onChange={handleChange}
                    name="intelligent"
                  />
                }
                label="intelligent"
              />
            </div>

            <div className="createdogarray-right">
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={antoine}
                    // onChange={handleChange}
                    name="patient"
                  />
                }
                label="patient"
              />
              {/* <FormControlLabel
            control={
              <Checkbox
                // checked={antoine}
                // onChange={handleChange}
                name="good temperament"
              />
            }
            label="good temperament"
          /> */}
              {/* <FormControlLabel
            control={
              <Checkbox
                // checked={antoine}
                // onChange={handleChange}
                name="good guard dog"
              />
            }
            label="good guard dog"
          /> */}
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={antoine}
                    // onChange={handleChange}
                    name="loyal"
                  />
                }
                label="loyal"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={antoine}
                    // onChange={handleChange}
                    name="affectionate"
                  />
                }
                label="affectionate"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={antoine}
                    // onChange={handleChange}
                    name="hyper active"
                  />
                }
                label="hyper active"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    // checked={antoine}
                    // onChange={handleChange}
                    name="anxious"
                  />
                }
                label="anxious"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    // // checked={gilad}
                    // onChange={handleChange}
                    name="aggressive"
                  />
                }
                label="aggressive"
              />
            </div>
          </div>
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default CreateDogArrays;
