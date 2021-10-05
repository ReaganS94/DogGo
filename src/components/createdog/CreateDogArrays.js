import "./CreateDog.css";

import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";

import axios from "axios";
import { useState, useEffect } from "react";

function CreateDogArrays({ character, setCharacter }) {
  const [characterOptions, setCharacterOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://dry-temple-96625.herokuapp.com/characters/`)
      .then((res) => {
        setCharacterOptions(res.data.data);
      })
      .catch((err) => console.log(err))
      .then((res) => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Data is loading...</p>;
  }

  const onChange = (e) => {
    const { value } = e.target;
    const newCharacter = character.some((char) => char === value)
      ? character.filter((char) => char !== value)
      : [...character, value];

    setCharacter(newCharacter);
  };

  console.log(character);

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
                    onChange={onChange}
                    name="character"
                    checked={character.includes(char._id)}
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
