import "./CreateDog.css";

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

function CreateDogTextfields() {
  return (
    <>
      <TextField required id="outlined-required" label="name" />

      <TextField required id="outlined-required" label="breed" />

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
      />

      <TextField
        multiline
        columns={2}
        rows={4}
        id="outlined"
        label="about"
        style={{ width: "95.7%" }}
      />
    </>
  );
}

export default CreateDogTextfields;
