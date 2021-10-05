import "./CreateDog.css";

import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";

import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "react-loader-spinner";

function CreateDogCommands({ command, setCommand }) {
  const [commandOptions, setCommandOptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://dry-temple-96625.herokuapp.com/commands/`)
      .then((res) => {
        setCommandOptions(res.data.data);
      })
      .catch((err) => console.log(err))
      .then((res) => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={5000} //5 secs
      />
    );
  }

  const onChange = (e) => {
    const { value } = e.target;
    const newCommand = command.some((com) => com === value)
      ? command.filter((com) => com !== value)
      : [...command, value];

    setCommand(newCommand);
  };

  return (
    <div className="createdog-commands-array ">
      <FormControl sx={{ m: 7 }} component="fieldset" variant="standard">
        <FormLabel component="legend">commands</FormLabel>
        <FormGroup>
          <div className="createdog-commands">
            {commandOptions.map((com) => (
              <FormControlLabel
                key={com._id}
                control={
                  <Checkbox
                    value={com._id}
                    onChange={onChange}
                    name="command"
                    checked={command.includes(com._id)}
                  />
                }
                label={com.name}
              />
            ))}
          </div>
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default CreateDogCommands;
