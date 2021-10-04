import "./CreateDog.css";

import axios from "axios";
import { useCallback, useState, useEffect } from "react";

import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";

function CreateDogArrays({ character, setCharacter }) {
  const [characterOptions, setCharacterOptions] = useState([]);

  useEffect(() => {
    axios
      .get("https://dry-temple-96625.herokuapp.com/characters")
      .then((res) => setCharacterOptions(res.data.data));
  }, []);

  console.log(characterOptions);
  return (
    <div className="createdog-arrays">
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">character</FormLabel>
        <FormGroup>
          <div className="createdog-character">
            {characterOptions.map((char) => (
              <FormControlLabel
                control={
                  <Checkbox
                    value={char._id}
                    onChange={(e) => console.log(e.target.value)}
                    name="character"
                  />
                }
                label={char.character}
              />
            ))}
          </div>
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default CreateDogArrays;
