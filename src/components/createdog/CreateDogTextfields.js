import "./CreateDog.css";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

function CreateDogTextfields({
  dogname,
  dogbreed,
  dogsize,
  dogage,
  dogabout,
  setDogname,
  setDogbreed,
  setDogsize,
  setDogage,
  setDogabout,
}) {
  return (
    <>
      <TextField
        required
        id="outlined-required"
        label="name"
        value={dogname}
        onChange={(e) => setDogname(e.target.value)}
      />

      <TextField
        required
        id="outlined-required"
        label="breed"
        value={dogbreed}
        onChange={(e) => setDogbreed(e.target.value)}
      />

      <TextField
        required
        id="outlined-required-amount"
        label="size"
        type="number"
        InputProps={{
          inputProps: {
            max: 150,
            min: 1,
          },
          endAdornment: <InputAdornment position="end">kg</InputAdornment>,
        }}
        value={dogsize}
        onChange={(e) => setDogsize(e.target.value)}
      />

      <TextField
        required
        id="outlined-required"
        label="age"
        type="number"
        InputProps={{
          inputProps: {
            max: 30,
            min: 1,
          },
          endAdornment: <InputAdornment position="end">years</InputAdornment>,
        }}
        value={dogage}
        onChange={(e) => setDogage(e.target.value)}
      />

      <TextField
        multiline
        columns={2}
        rows={4}
        id="outlined"
        label="about"
        style={{ width: "95.7%" }}
        value={dogabout}
        onChange={(e) => setDogabout(e.target.value)}
      />
    </>
  );
}

export default CreateDogTextfields;
