import "./CreateDog.css";

import { useCallback, useState } from "react";

import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";

function CreateDogArrays({
  calm,
  setCalm,
  easygoing,
  setEasygoing,
  courageous,
  setCourageous,
  territorial,
  setTerritorial,
  intelligent,
  setIntelligent,
  patient,
  setPatient,
  loyal,
  setLoyal,
  affectionate,
  setAffectionate,
  hyperactive,
  setHyperactive,
  anxious,
  setAnxious,
  aggressive,
  setAggressive,
}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(isChecked);
  };

  const [charactertraits, setCharactertraits] = useState([]);

  const character = {
    calm: "614a39d25f04d20f05cad5e5",
    calm: "614a39de5f04d20f05cad5e6",
    easygoing: "614a39e95f04d20f05cad5e7",
    courageous: "614a39f75f04d20f05cad5e8",
    territorial: "614a3a1d5f04d20f05cad5e9",
    intelligent: "614a3a275f04d20f05cad5ea",
    patient: "614a3a335f04d20f05cad5eb",
    loyal: "614a3a8d5f04d20f05cad5ee",
    affectionate: "614a3a9e5f04d20f05cad5ef",
    hyperactive: "614a3ba15f04d20f05cad5f2",
    anxious: "614a3bb25f04d20f05cad5f3",
  };

  return (
    <div className="createdog-arrays">
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">character</FormLabel>
        <FormGroup>
          <div className="createdog-character">
            <FormControlLabel
              control={
                <Checkbox
                  value={calm}
                  checked={isChecked}
                  onChange={handleOnChange}
                  name="calm"
                />
              }
              label="calm"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value={easygoing}
                  checked={isChecked}
                  onChange={handleOnChange}
                  name="easy going"
                />
              }
              label="easy going"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value={courageous}
                  checked={isChecked}
                  onChange={handleOnChange}
                  name="courageous"
                />
              }
              label="courageous"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value={territorial}
                  checked={isChecked}
                  onChange={handleOnChange}
                  name="territorial"
                />
              }
              label="territorial"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value={intelligent}
                  checked={isChecked}
                  onChange={handleOnChange}
                  name="intelligent"
                />
              }
              label="intelligent"
            />

            <FormControlLabel
              control={
                <Checkbox
                  value={patient}
                  checked={isChecked}
                  onChange={handleOnChange}
                  name="patient"
                />
              }
              label="patient"
            />

            <FormControlLabel
              control={
                <Checkbox
                  value={loyal}
                  checked={isChecked}
                  onChange={handleOnChange}
                  name="loyal"
                />
              }
              label="loyal"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value={affectionate}
                  checked={isChecked}
                  onChange={handleOnChange}
                  name="affectionate"
                />
              }
              label="affectionate"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value={hyperactive}
                  checked={isChecked}
                  onChange={handleOnChange}
                  name="hyper active"
                />
              }
              label="hyper active"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value={anxious}
                  checked={isChecked}
                  onChange={handleOnChange}
                  name="anxious"
                />
              }
              label="anxious"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value={aggressive}
                  checked={isChecked}
                  onChange={handleOnChange}
                  name="aggressive"
                />
              }
              label="aggressive"
            />
          </div>
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default CreateDogArrays;
