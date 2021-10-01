import "./CreateDog.css";

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
  return (
    <div className="createdog-arrays">
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">character</FormLabel>
        <FormGroup>
          <div className="createdog-character">
            <FormControlLabel
              control={
                <Checkbox
                  checked={calm}
                  onChange={() => setCalm(true)}
                  name="calm"
                />
              }
              label="calm"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={easygoing}
                  onChange={() => setEasygoing(true)}
                  name="easy going"
                />
              }
              label="easy going"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={courageous}
                  onChange={() => setCourageous(true)}
                  name="courageous"
                />
              }
              label="courageous"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={territorial}
                  onChange={() => setTerritorial(true)}
                  name="territorial"
                />
              }
              label="territorial"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={intelligent}
                  onChange={() => setIntelligent(true)}
                  name="intelligent"
                />
              }
              label="intelligent"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={patient}
                  onChange={() => setPatient(true)}
                  name="patient"
                />
              }
              label="patient"
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={loyal}
                  onChange={() => setLoyal(true)}
                  name="loyal"
                />
              }
              label="loyal"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={affectionate}
                  onChange={() => setAffectionate(true)}
                  name="affectionate"
                />
              }
              label="affectionate"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={hyperactive}
                  onChange={() => setHyperactive(true)}
                  name="hyper active"
                />
              }
              label="hyper active"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={anxious}
                  onChange={() => setAnxious(true)}
                  name="anxious"
                />
              }
              label="anxious"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={aggressive}
                  onChange={() => setAggressive(true)}
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
