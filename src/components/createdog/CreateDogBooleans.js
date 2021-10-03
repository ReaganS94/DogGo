import "./CreateDog.css";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";

function CreateDogBooleans() {
  return (
    <div className="createdog-booleans">
      <FormControl component="fieldset">
        <div className="createdog-booleans-column">
          <FormLabel component="legend">kid friendly</FormLabel>
          <RadioGroup
            row
            aria-label="kid-friendly"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="yes"
              control={<Radio required={true} />}
              label="yes"
            />
            <FormControlLabel value="no" control={<Radio />} label="no" />
          </RadioGroup>
        </div>
      </FormControl>

      <FormControl component="fieldset">
        <div className="createdog-booleans-column">
          <FormLabel component="legend">cat friendly</FormLabel>
          <RadioGroup
            row
            aria-label="cat-friendly"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="yes"
              control={<Radio required={true} />}
              label="yes"
            />
            <FormControlLabel value="no" control={<Radio />} label="no" />
          </RadioGroup>
        </div>
      </FormControl>

      <FormControl component="fieldset">
        <div className="createdog-booleans-column">
          <FormLabel component="legend">castrated</FormLabel>
          <RadioGroup row aria-label="castrated" name="row-radio-buttons-group">
            <FormControlLabel
              value="yes"
              control={<Radio required={true} />}
              label="yes"
            />
            <FormControlLabel value="no" control={<Radio />} label="no" />
          </RadioGroup>
        </div>
      </FormControl>
      <FormControl component="fieldset">
        <div className="createdog-booleans-column">
          <FormLabel component="legend">allergies</FormLabel>
          <RadioGroup row aria-label="allergies" name="row-radio-buttons-group">
            <FormControlLabel
              value="yes"
              control={<Radio required={true} />}
              label="yes"
            />
            <FormControlLabel value="no" control={<Radio />} label="no" />
          </RadioGroup>
        </div>
      </FormControl>
    </div>
  );
}

export default CreateDogBooleans;
