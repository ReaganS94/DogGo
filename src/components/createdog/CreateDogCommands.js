import "./CreateDog.css";

import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";

function CreateDogCommands({
  sit,
  setSit,
  come,
  setCome,
  paw,
  setPaw,
  stop,
  setStop,
  stay,
  setStay,
  bring,
  setBring,
  down,
  setDown,
}) {
  return (
    <div className="createdog-commands-array ">
      <FormControl sx={{ m: 7 }} component="fieldset" variant="standard">
        <FormLabel component="legend">commands</FormLabel>
        <FormGroup>
          <div className="createdog-character">
            <FormControlLabel
              control={
                <Checkbox
                  checked={sit}
                  onChange={() => setSit(true)}
                  name="sit"
                />
              }
              label="sit"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={come}
                  onChange={() => setCome(true)}
                  name="come"
                />
              }
              label="come"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={paw}
                  onChange={() => setPaw(true)}
                  name="paw"
                />
              }
              label="paw"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={stop}
                  onChange={() => setStop(true)}
                  name="stop"
                />
              }
              label="stop"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={stay}
                  onChange={() => setStay(true)}
                  name="stay"
                />
              }
              label="stay"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={bring}
                  onChange={() => setBring(true)}
                  name="bring"
                />
              }
              label="bring"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={down}
                  onChange={() => setDown(true)}
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
