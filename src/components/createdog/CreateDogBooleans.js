import "./CreateDog.css";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";

function CreateDogBooleans({
  dogkidfriendly,
  setDogkidfriendly,
  dogcatfriendly,
  setDogcatfriendly,
  dogcastrated,
  setDogcastrated,
  dogallergies,
  setDogallergies,
}) {
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
              control={<Radio />}
              label="yes"
              value={true}
              checked={dogkidfriendly === true}
              onClick={() => setDogkidfriendly(true)}
            />
            <FormControlLabel
              control={<Radio />}
              label="no"
              value={false}
              checked={dogkidfriendly === false}
              onClick={() => setDogkidfriendly(false)}
            />
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
              control={<Radio />}
              label="yes"
              value={true}
              checked={dogcatfriendly === true}
              onClick={() => setDogcatfriendly(true)}
            />
            <FormControlLabel
              control={<Radio />}
              label="no"
              value={false}
              checked={dogcatfriendly === false}
              onClick={() => setDogcatfriendly(false)}
            />
          </RadioGroup>
        </div>
      </FormControl>

      <FormControl component="fieldset">
        <div className="createdog-booleans-column">
          <FormLabel component="legend">castrated</FormLabel>
          <RadioGroup row aria-label="castrated" name="row-radio-buttons-group">
            <FormControlLabel
              control={<Radio />}
              label="yes"
              value={true}
              checked={dogcastrated === true}
              onClick={() => setDogcastrated(true)}
            />
            <FormControlLabel
              control={<Radio />}
              label="no"
              value={false}
              checked={dogcastrated === false}
              onClick={() => setDogcastrated(false)}
            />
          </RadioGroup>
        </div>
      </FormControl>
      <FormControl component="fieldset">
        <div className="createdog-booleans-column">
          <FormLabel component="legend">allergies</FormLabel>
          <RadioGroup row aria-label="allergies" name="row-radio-buttons-group">
            <FormControlLabel
              control={<Radio />}
              label="yes"
              value={true}
              checked={dogallergies === true}
              onClick={() => setDogallergies(true)}
            />
            <FormControlLabel
              control={<Radio />}
              label="no"
              value={false}
              checked={dogallergies === false}
              onClick={() => setDogallergies(false)}
            />
          </RadioGroup>
        </div>
      </FormControl>
    </div>
  );
}

export default CreateDogBooleans;
